import { StyleSheet } from 'react-native';
import { textStyle } from '../../../../../themes/textStyle';
import { Theme } from '../../../../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 50,
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      padding: 10,
      backgroundColor: theme.primaryBackgroundColor,
      color: theme.primaryTextColor,
    },
    textField: {
      flex: 1,
      backgroundColor: theme.primaryBackgroundColor,
      color: theme.primaryTextColor,
    },
    text: {
      alignSelf: 'center',
      justifyContent: 'center',
      color: theme.primaryTextColor,
      ...textStyle.caption,
    },
  });
