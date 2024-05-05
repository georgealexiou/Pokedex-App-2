import RootStack from './src/RootStack/RootStack';
import 'expo-dev-menu';
import { ThemeProvider } from './themes/theme-context';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Helvetica: require('./assets/fonts/Helvetica.ttf'),
  });

  useEffect(() => {
    const loadFonts = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }

      loadFonts();
    };
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}
