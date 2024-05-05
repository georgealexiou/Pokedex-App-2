import * as React from 'react';
import { View } from 'react-native';
import { Pokeball } from '../../assets/svgs';
import { useStyleSheet } from './styles';
import { SearchBar } from './components/SearchBar/SearchBar';
import { useTheme } from '../../../themes/use-theme';

export const SearchScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useStyleSheet(theme);
  return (
    <View style={styles.screen}>
      <SearchBar />
      <View style={styles.background}>
        <Pokeball color={theme.contrastIconColor} />
      </View>
    </View>
  );
};
