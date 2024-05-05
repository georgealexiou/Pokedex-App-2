import React from 'react';
import { View, FlatList } from 'react-native';
import { Pokeball } from '../../assets/svgs';
import { default as regions } from '../../assets/json/regions.json';
import { Generation } from '../../global/types';
import { styles } from './styles';
import { useGenerationsScreen } from './useGenerationsScreen';
import { Screen } from '../../components/Screen/Screen';
import { useTheme } from '../../../themes/use-theme';

type RenderItemProps = {
  item: Generation;
};

type GenerationScreenProps = {
  navigation: any;
};

export const GenerationsScreen: React.FC<GenerationScreenProps> = ({ navigation }) => {
  const theme = useTheme();
  const { renderItem } = useGenerationsScreen({ navigation, theme });
  return (
    <Screen name={'Generations'} safeAreaRequired={false}>
      <View style={styles.flatList}>
        <FlatList data={regions} renderItem={renderItem} />
      </View>
      <View style={styles.backgroundPokeball}>
        <Pokeball color={theme.contrastIconColor} />
      </View>
    </Screen>
  );
};
