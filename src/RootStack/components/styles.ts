import { StyleSheet } from 'react-native';
import { theme as OldTheme } from '../../../themes/theme';
import { Theme } from '../../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    tabBarOptionSelected: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.tertiaryBackgroundColor,
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
      backgroundColor: OldTheme.palette.cadet,
      borderRadius: 100,
      zIndex: 10,
    },
  });