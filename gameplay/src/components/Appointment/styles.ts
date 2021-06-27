import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      alignSelf: 'center',
   },
   guildIconContainer: {
      height: 68,
      width: 70,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20,      
   },
   content: {
      flex: 1,
   },
   header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
   },
   footer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   dateInfo: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   date: {
      fontFamily: theme.fonts.title500,
      fontSize: 13,
      color: theme.colors.heading,
      marginLeft: 7,
   },
   title: { 
      fontFamily: theme.fonts.title700,
      fontSize: 18,
      color: theme.colors.heading,
   },
   category: {
      fontFamily: theme.fonts.text400,
      fontSize: 13,
      color: theme.colors.highlight,
      marginRight: 24,
   },
   playersInfo: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   player: {
      fontFamily: theme.fonts.text500,
      fontSize: 13,
      marginLeft: 7,
      marginRight: 24,
   },
})