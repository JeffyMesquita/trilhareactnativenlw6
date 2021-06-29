import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { 
   Text, 
   View, 
   ScrollView,
   KeyboardAvoidingView,
   Platform,
   Alert,   
} from 'react-native';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ModalView } from '../../components/ModalView';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon} from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type Params = {
   guildSelected: AppointmentProps;}

export function AppointmentCreate() {
   const [category, setCategory] = useState('');
   const [openGuildsModal, setOpenGuildsModal] = useState(false);
   const [ guild, setGuild] = useState<GuildProps>({} as GuildProps);

   const [day, setDay] = useState('');
   const [month, setMonth] = useState('');
   const [hour, setHour] = useState('');
   const [minute, setMinute] = useState('');
   const [description, setDescription] = useState('');

   const navigation = useNavigation();

   function handleOpenGuilds() {
      setOpenGuildsModal(true);
   }

   function handleCloseGuilds() {
      setOpenGuildsModal(false);
   }

   function handleGuildSelect(guildSelected: GuildProps) {
      setGuild(guildSelected);
      setOpenGuildsModal(false);
   }

   function handleCategorySelected(categoryId: string) {
      setCategory(categoryId);
   }

   async function handleSave(){
      const newAppointment ={
         id: uuid.v4(),
         guild,
         category,
         date: `${day}/${month} às ${hour}:${minute}h`,
         description,
      };

      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const appointments = storage ? JSON.parse(storage) : [];

      if(category === ''){
         Alert.alert('Por favor, Selecione uma categoria');
      }else if(guild.name === ''){
               Alert.alert('Por favor, Selecione um servidor');
            }else if((day === '')||(month === '')){
                     Alert.alert('Por favor, Preencha a data ou verifique se ela está preenchida corretamente');
                  }else if((hour === '')||(minute === '')){
                           Alert.alert('Por favor, Preencha o horário ou verifique se ele está preenchida corretamente');
                        }else if(description === ''){
                                 Alert.alert('Por favor, Preencha a descrição da sua gameplay');
                              }else{
                                 await AsyncStorage.setItem( 
                                    COLLECTION_APPOINTMENTS,
                                    JSON.stringify([...appointments, newAppointment])
                                 );    
                                 navigation
                                 .navigate('Home');                       
                              }      
   }

      return(      
      <KeyboardAvoidingView 
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.container}>
         <ScrollView>
            <Background>
               <Header
                  title="Agendar partida"
               />
               <Text style={[styles.label, {
                     marginLeft: 24, marginTop: 36
                  }]
               }>
                  Categoria
               </Text>
               <View style={styles.category}>
                  <CategorySelect
                     hasCheckBox
                     setCategory={handleCategorySelected}
                     categorySelected={category}
                  />
               </View>
               <View style={styles.form}>
                  <RectButton onPress={handleOpenGuilds}>
                     <View style={styles.select}>
                        {
                           guild.icon 
                           ? <GuildIcon guildId={guild.id} iconId={guild.icon}/> 
                           : <View style={styles.image} />
                        }
            
                        <View style={styles.selectBody}>
                           <Text style={styles.label}>
                              {
                                 guild.name 
                                 ? guild.name 
                                 : 'Selecione um servidor'
                              }
                           </Text>
                        </View>
                        <Feather
                           name="chevron-right"
                           color={theme.colors.heading}
                           size={18}
                        />
                     </View>
                  </RectButton>
            
                  <View style={styles.field}>
                     <View>
                        <Text style={[styles.label, { marginBottom: 12}]}>
                           Dia e Mês
                        </Text>
                        <View style={styles.column}>
                           <SmallInput 
                              maxLength={2}
                              onChangeText={setDay}
                           />
                           <Text style={styles.divider}>
                              /
                           </Text>
                           <SmallInput 
                              maxLength={2}
                              onChangeText={setMonth}
                           />
                        </View>
                     </View>
                     <View>
                        <Text style={[styles.label, { marginBottom: 12}]}>
                           Hora e Minutos
                        </Text>
                        <View style={styles.column}>
                           <SmallInput 
                              maxLength={2}
                              onChangeText={setHour}
                           />
                           <Text style={styles.divider}>
                              :
                           </Text>
                           <SmallInput 
                              maxLength={2}
                              onChangeText={setMinute}
                           />
                        </View>
                     </View>
                  </View>
                  <View style={[styles.field, {marginBottom: 12 }]}>
                     <Text style={styles.label}>
                        Descrição
                     </Text>
                     <Text style={styles.caracteresLimit}>
                        Max 100 Caracteres
                     </Text>
                  </View>
                  <TextArea
                     multiline
                     maxLength={100}
                     numberOfLines={5}
                     autoCorrect={false}
                     onChangeText={setDescription}
                  />  

                  <View style={styles.footer}>
                     <Button 
                        title="Agendar"
                        onPress={handleSave}
                     />
                  </View>
               </View>

               
            
            </Background>
         </ScrollView>

         <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
            <Guilds handleGuildSelect={handleGuildSelect}/>
         </ModalView>
      </KeyboardAvoidingView>
   )
} 


