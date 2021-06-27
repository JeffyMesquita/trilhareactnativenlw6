import React, { ReactNode } from 'react';
import {
   View,
   Modal,
   ModalProps, 
   Text,
   TouchableWithoutFeedback
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Background } from '../Background';

type Props = ModalProps & {
   children: ReactNode;
   closeModal: () => void;
}


export function ModalView({children, closeModal, ...rest }: Props){   
   return (
      <Modal
         transparent
         animationType="slide"
         {...rest}
      >         
         <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.overlay}>
               <View style={styles.container}>
                  <Background>
                     <View style={styles.barTop}>
                        <View style={styles.bar} />  
                        <Feather
                           name="x"
                           size={30}
                           color={theme.colors.heading}
                           style={{ marginTop: 12}}
                        />
                        <View style={styles.bar} /> 
                     </View>                   
                     {children}
                  </Background>
               </View>
            </View>
         </TouchableWithoutFeedback>
      </Modal>
   );
}



