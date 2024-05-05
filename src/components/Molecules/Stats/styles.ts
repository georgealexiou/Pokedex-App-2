import { StyleSheet } from 'react-native';
import { Theme } from '../../../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    statsTextColor: {
      color: theme.primaryTextColor,
      marginTop: 5.5,
      fontWeight: 'bold',
    },
    statsHeadingTextColor: {
      color: theme.primaryTextColor,
      marginTop: 5.5,
      fontWeight: 'bold',
      fontSize: 30,
    },
    border: {
      margin: 10,
    },
  });
