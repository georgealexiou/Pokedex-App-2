import React, { ReactNode, createContext, useState } from 'react';
import { Theme } from '.';
import { lightTheme } from './light-theme';
import { Appearance } from 'react-native';
import { darkTheme } from './dark-theme';

let basetheme = lightTheme;
const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  basetheme = darkTheme;
}
export const ThemeContext = createContext<{ theme: Theme; setTheme: React.Dispatch<Theme> }>({
  theme: basetheme,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(basetheme);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
