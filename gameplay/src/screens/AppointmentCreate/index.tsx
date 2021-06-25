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
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon} from '../../components/GuildIcon';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export function AppointmentCreate() {
   const [category, setCategory] = useState('');
      return(      
      <KeyboardAvoidingView 
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.container}>
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
                  setCategory={setCategory}
                  categorySelected={category}
               />
            </View>
            <View style={styles.form}>
               <RectButton>
                  <View style={styles.select}>
                     {
                        //<View style={styles.image} />
                        <GuildIcon />
                     }
         
                     <View style={styles.selectBody}>
                        <Text style={styles.label}>
                           Selecione um servidor
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
                     <Text style={styles.label}>
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
                     <Text style={styles.label}>
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
            </View>
         
         </Background>
      </KeyboardAvoidingView>
   )
} 
