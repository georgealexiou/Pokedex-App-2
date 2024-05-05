import { StyleSheet } from 'react-native';
import { Theme } from '../../../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    pressableStyle: {
      backgroundColor: theme.secondaryBackgroundColor,
      borderRadius: 12,
      height: 120,
      shadowOpacity: 0.5,
      width: 170,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 7 },
      margin: 5,
      padding: 10,
    },
    numberStyle: {
      fontSize: 57,
      color: theme.secondaryTextColor,
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      opacity: 0.3,
      left: 5,
      width: 160,
    },
    imageStyle: { height: 80, width: 80, resizeMode: 'contain' },
    imageContainer: { justifyContent: 'center', alignItems: 'center', width: '60%' },
    numberContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      top: 60,
    },
  });
