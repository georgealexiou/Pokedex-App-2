import { StyleSheet } from 'react-native';
import { Theme } from '../../../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderRadius: 12,
      backgroundColor: theme.primaryBackgroundColor,
      shadowColor: theme.primaryShadowColor,
      elevation: 3,
      shadowRadius: 8,
      shadowOpacity: 0.2,
      shadowOffset: { width: -5, height: 5 },
    },
    containerNoShadow: {
      borderRadius: 12,
    },
  });
