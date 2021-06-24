import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
   const uri = 'https://images-na.ssl-images-amazon.com/images/I/51lpm9SpsJL.png'

   return (
      <Image 
         source={{ uri }}
         style={styles.image}
         resizeMode="cover"
      />
   )
}