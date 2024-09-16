import { StyleSheet } from 'react-native';
import { theme } from '../../../themes/theme';

export const styles = StyleSheet.create({
  tabBarOptionSelected: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444444',
    height: 30,
    width: 50,
    borderRadius: 100,
  },
  tabBarOptionNotSelected: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 30,
    borderRadius: 100,
  },

  tabBarOptionSearch: {
    justifyContent: 'center',
    aspectRatio: 1,
    height: 60,
    alignItems: 'center',
    backgroundColor: theme.palette.cadet,
    borderRadius: 100,
    zIndex: 10,
  },
});
