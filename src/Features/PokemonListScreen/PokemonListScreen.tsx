import React, { useState } from 'react';
import { View } from 'react-native';
import { RootStackParams } from '../../RootStack/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pokeball } from '../../assets/svgs';
import { Screen } from '../../components/Screen/Screen';
import { PokemonList } from '../../components/Organisms/PokemonList/PokemonList';
import { PokemonDetailsModal } from '../../components/Organisms/PokemonDetailsModal/PokemonDetailsModal';
import { useTheme } from '../../../themes/use-theme';

type PokedexProps = {
  navigation: NativeStackScreenProps<RootStackParams, 'PokemonListScreen'>;
  route: any;
};

export const PokemonListScreen: React.FC<PokedexProps> = ({ navigation, route }) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(1);
  const theme = useTheme();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const list = route.params;
  const onPokemonSelect = (id: number) => {
    setSelectedPokemonId(id);
    setVisibleModal(true);
  };

  return (
    <Screen name={'Region'}>
      <View style={{ position: 'absolute', zIndex: -1, height: '100%', justifyContent: 'flex-start', right: -100 }}>
        <Pokeball color={theme.contrastIconColor} />
      </View>
      <PokemonList pokemonIds={list} onPress={onPokemonSelect} />
      <PokemonDetailsModal visible={visibleModal} setModalVisible={setVisibleModal} pokemonId={selectedPokemonId} />
    </Screen>
  );
};
