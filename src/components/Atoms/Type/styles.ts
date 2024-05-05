import { StyleSheet } from 'react-native';
import { Theme } from '../../../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.secondaryTextColor,
      fontFamily: 'Helvetica',
      fontSize: 18,
    },
    smallText: {
      color: theme.secondaryTextColor,
      fontFamily: 'Helvetica',
      fontSize: 15,
    },
    typeBox: {
      marginRight: 4,
      borderRadius: 8,
      width: 125,
      height: 35,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    smallTypeBox: {
      marginRight: 4,
      borderRadius: 8,
      width: 70,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
