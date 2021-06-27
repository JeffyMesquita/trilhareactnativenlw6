import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 100,
   },
   overlay: {
      flex: 1,
      backgroundColor: theme.colors.overlay,
   },
   barTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   },
   bar: {
      width: 75,
      height: 3,
      borderRadius: 4,
      backgroundColor: theme.colors.secondary30,
      alignSelf: 'center',
      marginTop: 13,  
      marginHorizontal: 3,    
   },  
   title: {
      flex: 1,
      textAlign: 'center',
      fontFamily: theme.fonts.title700,
      fontSize: 20,
      color: theme.colors.heading,
   }
})