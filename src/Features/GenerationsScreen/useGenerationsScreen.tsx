import React from 'react';
import { View, Text } from 'react-native';
import { PokemonImage } from '../../components/Atoms/PokemonImage/PokemonImage';
import { SimplePressable } from '../../components/Atoms/SimplePressable/SimplePressable';
import { textStyle } from '../../../themes/textStyle';
import { Generation } from '../../global/types';
import { styles } from './styles';
import { Theme } from '../../../themes';

type GenerationsScreenHookProps = {
  navigation: any;
  theme: Theme;
};

type RenderItemProps = {
  item: Generation;
};

export const useGenerationsScreen = ({ navigation, theme }: GenerationsScreenHookProps) => {
  const getStarterPokemon = ({ item }: { item: Generation }) => {
    const starterPokemon: number[] = [];
    if (item.id === 5) {
      starterPokemon.push(item.firstPokemonId + 1);
      starterPokemon.push(item.firstPokemonId + 4);
      starterPokemon.push(item.firstPokemonId + 7);
    } else {
      starterPokemon.push(item.firstPokemonId);
      starterPokemon.push(item.firstPokemonId + 3);
      starterPokemon.push(item.firstPokemonId + 6);
    }

    return starterPokemon;
  };

  const generateList = ({ item }: RenderItemProps) => {
    const list = [];
    for (let i = item.firstPokemonId; i <= item.lastPokemonId; i++) {
      list.push(i);
    }
    return list;
  };

  const onPress = (arg: RenderItemProps) => () => {
    navigation.navigate('PokemonListScreen', generateList(arg));
  };

  const renderItem: React.FC<RenderItemProps> = ({ item }) => {
    const starterPokemon = getStarterPokemon({ item });
    return (
      <View style={styles.container}>
        <SimplePressable onPress={onPress({ item })} style={styles.simplePressable}>
          <View style={styles.insideContainer}>
            <View>
              <Text style={{ ...textStyle.caption, color: theme.primaryTextColor }}>{`Generation ${item.id}`}</Text>
              <Text style={{ ...textStyle.h1, color: theme.primaryTextColor }}>{item.region}</Text>
            </View>
            <View style={styles.imageContainer}>
              <PokemonImage id={starterPokemon[0]} style={styles.image} />
              <PokemonImage id={starterPokemon[1]} style={styles.image} />
              <PokemonImage id={starterPokemon[2]} style={styles.image} />
            </View>
          </View>
        </SimplePressable>
      </View>
    );
  };

  return { renderItem };
};
