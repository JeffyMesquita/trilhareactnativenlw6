import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { 
   Text, 
   View, 
   ScrollView,
   KeyboardAvoidingView,
   Platform,   
} from 'react-native';

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


export function AppointmentCreate() {
   const [category, setCategory] = useState('');
   const [openGuildsModal, setOpenGuildsModal] = useState(false);
   const [ guild, setGuild] = useState<GuildProps>({} as GuildProps);

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
                           ? <GuildIcon /> 
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
                           <SmallInput maxLength={2}/>
                           <Text style={styles.divider}>
                              /
                           </Text>
                           <SmallInput maxLength={2}/>
                        </View>
                     </View>
                     <View>
                        <Text style={[styles.label, { marginBottom: 12}]}>
                           Hora e Minutos
                        </Text>
                        <View style={styles.column}>
                           <SmallInput maxLength={2}/>
                           <Text style={styles.divider}>
                              :
                           </Text>
                           <SmallInput maxLength={2}/>
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
                  />  

                  <View style={styles.footer}>
                     <Button title="Agendar"  />
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

