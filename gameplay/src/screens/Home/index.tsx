import React, { useState, useEffect} from "react";
import {
   View,
   FlatList,
   Text,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { styles } from './styles';
import { Background } from '../../components/Background';

export function Home() {
   const [category, setCategory] = useState('');

   const navigation = useNavigation();

   const appointments = [
      {
         id: '1',
         guild: {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true,
         },
         category: '1',
         date: '22/06 às 20:40h',
         description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
      },
      {
         id: '2',
         guild: {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true,
         },
         category: '1',
         date: '22/06 às 20:40h',
         description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
      },      
   ]

   function handleCategorySelected(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId);
   }

   function handleAppointmentDetails(){
      navigation.navigate('AppointmentDetails');
   }

   function handleAppointmentCreate(){
      navigation.navigate('AppointmentCreate');
   }

   return(
      <Background>         
         <View style={styles.header}>
            <Profile />
            <ButtonAdd 
               onPress={handleAppointmentCreate}
            />
         </View>
      
         <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelected}
         />
         <View style={styles.content}>
            <ListHeader
               title="Partidas agendadas:"
               subtitle="Total 6"
            />            
         </View> 

         <FlatList
               data={appointments}
               keyExtractor={item => item.id}
               renderItem={({ item }) => (
                  <Appointment
                     data={item}
                     onPress={handleAppointmentDetails}
                  />
               )}
               ItemSeparatorComponent={() => <ListDivider />}
               contentContainerStyle={{ paddingBottom: 69}}
               style={styles.matches}
               showsVerticalScrollIndicator={false}
            />        
      </Background>
   )
}

