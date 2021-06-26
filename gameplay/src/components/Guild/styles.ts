import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 24,
   },
   content: {
      flex: 1,
      justifyContent: 'center',      
   },
   title: {
      fontFamily: theme.fonts.title700,
      fontSize: 18,
      color: theme.colors.heading,
      marginBottom: 11,
   },
   type: {
      fontFamily: theme.fonts.text400,
      fontSize: 13,
      color: theme.colors.highlight,
      marginBottom: 24,
   },
});