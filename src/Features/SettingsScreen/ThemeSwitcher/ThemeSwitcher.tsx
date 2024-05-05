import { StyleSheet, Switch, Text } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../../themes/use-theme';
import { Theme } from '../../../../themes';
import { lightTheme } from '../../../../themes/light-theme';
import { darkTheme } from '../../../../themes/dark-theme';
import { ThemeContext } from '../../../../themes/theme-context';

import { ButtonGroup } from 'react-native-elements';

export const ThemeSwitcher = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateIndex = (index: number) => {
    setSelectedIndex(index);
  };
  const setTheme = useContext(ThemeContext).setTheme;

  useEffect(() => {
    let theme = lightTheme;
    switch (selectedIndex) {
      case 0:
        break;
      case 1:
        theme = darkTheme;
        break;
      case 2:
        theme = lightTheme;
    }
    setTheme(theme);
  }, [selectedIndex]);

  const theme = useTheme();
  const styles = useStyleSheet(theme);
  const buttons = ['Automatic', 'Dark Mode', 'Light Mode'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Theme</Text>
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        buttonStyle={{
          backgroundColor: theme.primaryBackgroundColor,
        }}
        textStyle={{
          color: theme.primaryTextColor,
        }}
        selectedButtonStyle={{
          backgroundColor: theme.tertiaryBackgroundColor,
        }}
        containerStyle={{ height: 100, borderRadius: 10 }}
        vertical
      />
    </SafeAreaView>
  );
};

const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 6,
    },
    text: { color: theme.primaryTextColor, marginVertical: 5, marginHorizontal: 10 },
  });
