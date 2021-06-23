import React from "react";
import {
   View
} from 'react-native';

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";

import { styles } from './styles';

export function Home() {
   return(
      <View>
         <View style={styles.header}>
            <Profile />
            <ButtonAdd />
         </View>

         <View>
            <CategorySelect />
         </View>
      </View>
   )
}