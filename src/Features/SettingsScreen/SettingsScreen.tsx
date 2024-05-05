import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { Theme } from '../../../themes';
import { useTheme } from '../../../themes/use-theme';

const Settings = ({ navigation }: any) => {
  const theme = useTheme();
  const styles = useStyleSheet(theme);
  return (
    <View style={styles.container}>
      <ThemeSwitcher />
    </View>
  );
};

const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.primaryBackgroundColor,
      flex: 1,
    },
  });

export default Settings;
