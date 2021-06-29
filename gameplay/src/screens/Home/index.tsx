import React, { useState, useEffect, useCallback } from 'react';
import {
   View,
   FlatList,
   Text,
} from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CategorySelect } from "../../components/CategorySelect";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { Load } from "../../components/Load";

import { COLLECTION_APPOINTMENTS } from '../../configs/database'

import { styles } from './styles';
import { Background } from '../../components/Background';

export function Home() {
   const [category, setCategory] = useState('');
   const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
   const [loading, setLoading] = useState(true);

   const navigation = useNavigation();

   

   function handleCategorySelected(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId);
   }

   function handleAppointmentDetails(guildSelected: AppointmentProps){
      navigation.navigate('AppointmentDetails', { guildSelected });
   }

   function handleAppointmentCreate(){
      navigation.navigate('AppointmentCreate');
   }

   async function loadAppointments() {
      const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

      if(category) {
         setAppointments(storage.filter(item => item.category === category));
      }else {
         setAppointments(storage);
      }
      setLoading(false);
   }

   useFocusEffect(useCallback(() => {
      loadAppointments();
   }, [category]));

   return(
      <Background>         
         <View style={styles.header}>
            <Profile />
            <ButtonAdd 
               onPress={handleAppointmentCreate}
            />
         </View>
         <View style={styles.content}>
            <CategorySelect
               categorySelected={category}
               setCategory={handleCategorySelected}
            />
         </View> 

         {  loading ? <Load /> :
            <>               
               <ListHeader
                  title="Partidas agendadas:"
                  subtitle={`Total ${appointments.length}`}
               />     
               
               <FlatList
                  data={appointments}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                     <Appointment
                        data={item}
                        onPress={() => handleAppointmentDetails(item)}
                     />
                  )}
                  ItemSeparatorComponent={() => <ListDivider />}
                  contentContainerStyle={{ paddingBottom: 69}}
                  style={styles.matches}
                  showsVerticalScrollIndicator={false}
               />     
            </>
         }            
      </Background>
   )
}

