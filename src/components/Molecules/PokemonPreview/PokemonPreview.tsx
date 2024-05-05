import { View, Text, Pressable } from 'react-native';
import { theme as oldTheme } from '../../../../themes/theme';
import { capitalizeFirstLetter, formatNumberForList } from '../../../global/helper';
import { PokemonImage } from '../../Atoms/PokemonImage/PokemonImage';
import { textStyle } from '../../../../themes/textStyle';
import React, { useEffect, useState } from 'react';
import { Spacer } from '../../Atoms/Spacer.tsx/Spacer';
import { useStyleSheet } from './styles';
import { default as pokemonList } from '../../../assets/json/pokemon.json';
import { useTheme } from '../../../../themes/use-theme';

type PokemonPreviewProps = {
  id: number;
  onPress?: () => void;
};

export const PokemonPreview: React.FC<PokemonPreviewProps> = ({ id, onPress }) => {
  const [pokemon, setPokemon] = useState<any>();
  useEffect(() => {
    setPokemon(pokemonList[id - 1]);
  });
  const theme = useTheme();
  const styles = useStyleSheet(theme);
  return (
    <>
      {pokemon && (
        <>
          <Pressable
            style={{
              ...styles.pressableStyle,
              shadowColor: oldTheme.getBackgroundTypeColor(pokemon.types[0]),
              backgroundColor: oldTheme.getBackgroundTypeColor(pokemon.types[0]),
            }}
            onPress={onPress}>
            <View style={styles.numberContainer}>
              <Text style={styles.numberStyle}>{`#${formatNumberForList(pokemon.id)}`}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ ...textStyle.h1, color: oldTheme.palette.white }}>
                {capitalizeFirstLetter(pokemon.name)}
              </Text>
              <Spacer.Column numberOfSpaces={1} />
              <View style={styles.imageContainer}>
                <PokemonImage style={styles.imageStyle} id={pokemon.id} />
              </View>
            </View>
          </Pressable>
        </>
      )}
    </>
  );
};
