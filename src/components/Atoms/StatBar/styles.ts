import { StyleSheet } from 'react-native';
import { theme as oldtheme } from '../../../../themes/theme';
import { Theme } from '../../../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    textColor: {
      color: theme.primaryTextColor,
    },
    boldTextColor: {
      fontWeight: 'bold',
      color: theme.primaryTextColor,
    },
    statsTextLabel: {
      color: theme.primaryTextColor,
      fontWeight: 'bold',
      fontSize: 17,
    },
    statsTextNumber: {
      color: theme.primaryTextColor,
      fontSize: 17,
    },
    statsHeadingTextColor: {
      color: theme.primaryTextColor,
      fontWeight: 'bold',
      fontSize: 30,
    },
    border: {
      borderColor: oldtheme.palette.carbon,
      borderTopWidth: 3,
    },
  });
