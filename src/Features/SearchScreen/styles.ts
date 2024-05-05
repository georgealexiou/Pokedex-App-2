import { StyleSheet } from 'react-native';
import { Theme } from '../../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 70,
      backgroundColor: theme.primaryBackgroundColor,
    },
    background: {
      position: 'absolute',
      zIndex: -1,
      height: '100%',
      justifyContent: 'flex-end',
      right: -170,
    },
  });
