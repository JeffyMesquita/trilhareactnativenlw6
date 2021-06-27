import React from 'react';
import { View, FlatList, ImageComponent} from 'react-native';
import { GuildProps } from '../../components/Appointment';

import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
   handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
   const guilds = [
      {
         id: '1',
         name: 'Lendários',
         icon: 'image.png',
         owner: true,
      },
      {
         id: '2',
         name: 'Galera do Game',
         icon: 'image.png',
         owner: true,
      },
      {
         id: '3',
         name: 'Salve f e v',
         icon: 'image.png',
         owner: true,
      },
      {
         id: '4',
         name: 'Salve f e v',
         icon: 'image.png',
         owner: true,
      },
      {
         id: '5',
         name: 'Salve f e v',
         icon: 'image.png',
         owner: true,
      }
   ];

   return (
      <View style={styles.container}>
         <FlatList 
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               <Guild 
                  data={item} 
                  onPress={() => handleGuildSelect(item)}
               />
            )}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <ListDivider isCentered />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            contentContainerStyle={{ paddingBottom: 69, paddingTop: 103}}
            style={styles.guilds}
         />
         
      </View>
   )
}