import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   label: {
      fontSize: 18,
      fontFamily: theme.fonts.title700,
      color: theme.colors.heading,
   },
   category: {
      marginLeft: 24,
      marginTop: 18,
   },
   form: {
      paddingHorizontal: 24,
      marginTop: 32,
   },
   select: {
      width: '100%',
      height: 68,
      flexDirection: 'row',
      borderColor: theme.colors.secondary50, 
      borderWidth: 1,
      borderRadius: 8,
      alignItems: 'center',      
      paddingRight: 25,
      overflow: 'hidden',
   },
   image: {
      width: 64,
      height: 68,
      backgroundColor: theme.colors.secondary50,
      borderWidth: 1,
      borderRadius: 8,
   },
   selectBody: {
      flex: 1,
      alignItems: 'center',
   },
   field: {
      marginLeft: 7,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
   },
   column: {
      flexDirection: 'row',
      alignItems: 'center',

   },
   divider: {
      marginRight: 4,
      fontSize: 18,
      fontFamily: theme.fonts.text400,
      color: theme.colors.highlight,
   },
   caracteresLimit: {
      fontFamily: theme.fonts.text400,
      fontSize: 13,
      color: theme.colors.highlight,
   },
   footer: {
      marginTop: 34,
      marginVertical: 20,
      marginBottom: 56,      
   },
});