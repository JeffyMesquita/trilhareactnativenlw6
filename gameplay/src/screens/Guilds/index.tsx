import React, { useState, useEffect } from 'react';
import { View, FlatList, ImageComponent} from 'react-native';

import { api } from '../../services/api';

import { GuildProps } from '../../components/Guild';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { styles } from './styles';

type Props = {
   handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
   const [guilds, setGuilds] = useState<GuildProps[]>([]); 
   const [loading, setLoading] = useState(true);

   async function fetchGuilds() {
      const response = await api.get('/users/@me/guilds');

      setGuilds(response.data);
      setLoading(false);
   }

   useEffect(() => {
      fetchGuilds();
   }, []);

   return (
      <View style={styles.container}>
         {
            loading ? <Load /> :
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
         }         
      </View>
   )
}