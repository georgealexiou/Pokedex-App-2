import { StyleSheet, Switch, Text } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../../themes/use-theme';
import { Theme } from '../../../../themes';
import { lightTheme } from '../../../../themes/light-theme';
import { darkTheme } from '../../../../themes/dark-theme';
import { ThemeContext } from '../../../../themes/theme-context';

export const ThemeSwitcher = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const setTheme = useContext(ThemeContext).setTheme;

  useEffect(() => {
    setTheme(isEnabled ? darkTheme : lightTheme);
  }, [isEnabled]);

  const theme = useTheme();
  const styles = useStyleSheet(theme);
  return (
    <SafeAreaView style={styles.container}>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
      <Text style={styles.text}>Dark Mode</Text>
    </SafeAreaView>
  );
};

const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    text: { color: theme.primaryTextColor },
  });
