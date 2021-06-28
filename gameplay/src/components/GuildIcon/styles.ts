import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
   image: {
      height: 80,
      width: 68,
      borderRadius: 8, 
      backgroundColor: theme.colors.discord,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
   },
   container: {
      height: 80,
      width: 68,       
   },
});