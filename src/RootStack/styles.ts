import { StyleSheet } from 'react-native';
import { Theme } from '../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    shadow: {
      position: 'absolute',
      bottom: 25,
      left: 90,
      right: 90,
      backgroundColor: theme.secondaryBackgroundColor,
      borderRadius: 200,
      height: 50,
      shadowOffset: { width: -5, height: 5 },
      shadowColor: theme.primaryShadowColor,
      shadowRadius: 6,
      shadowOpacity: 0.4,
      opacity: 0.9,
      elevation: 5,
    },
  });
