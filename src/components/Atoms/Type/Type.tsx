import { View, Text } from 'react-native';
import { useStyleSheet } from './styles';
import { theme as oldTheme } from '../../../../themes/theme';
import { PokemonTypes } from '../../../global/types';
import React from 'react';
import {
  BugUnselected,
  DarkUnselected,
  DragonUnselected,
  ElectricUnselected,
  FairyUnselected,
  FightingUnselected,
  FireUnselected,
  FlyingUnselected,
  GhostUnselected,
  GrassUnselected,
  GroundUnselected,
  IceUnselected,
  NormalUnselected,
  PoisonUnselected,
  PsychicUnselected,
  RockUnselected,
  SteelUnselected,
  WaterUnselected,
} from '../../../assets/svgs';
import { useTheme } from '../../../../themes/use-theme';

type TypeProps = {
  type?: PokemonTypes;
  small?: boolean;
};

export const Type: React.FC<TypeProps> = ({ type, small = false }) => {
  const theme = useTheme();
  const styles = useStyleSheet(theme);
  if (!type) return <></>;
  const TypeIcon = () => {
    switch (type) {
      case PokemonTypes.BUG:
        return <BugUnselected />;
      case PokemonTypes.DARK:
        return <DarkUnselected />;
      case PokemonTypes.DRAGON:
        return <DragonUnselected />;
      case PokemonTypes.ELECTRIC:
        return <ElectricUnselected />;
      case PokemonTypes.FAIRY:
        return <FairyUnselected />;
      case PokemonTypes.FIGHTING:
        return <FightingUnselected />;
      case PokemonTypes.FIRE:
        return <FireUnselected />;
      case PokemonTypes.FLYING:
        return <FlyingUnselected />;
      case PokemonTypes.GHOST:
        return <GhostUnselected />;
      case PokemonTypes.GRASS:
        return <GrassUnselected />;
      case PokemonTypes.GROUND:
        return <GroundUnselected />;
      case PokemonTypes.ICE:
        return <IceUnselected />;
      case PokemonTypes.NORMAL:
        return <NormalUnselected />;
      case PokemonTypes.POISON:
        return <PoisonUnselected />;
      case PokemonTypes.PSYCHIC:
        return <PsychicUnselected />;
      case PokemonTypes.ROCK:
        return <RockUnselected />;
      case PokemonTypes.STEEL:
        return <SteelUnselected />;
      case PokemonTypes.WATER:
        return <WaterUnselected />;
    }
  };

  return (
    <>
      {small ? (
        <View
          style={{
            ...styles.smallTypeBox,
            backgroundColor: oldTheme.typePalette.get(type),
          }}>
          <Text style={styles.smallText}>{type}</Text>
        </View>
      ) : (
        <View
          style={{
            ...styles.typeBox,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            backgroundColor: oldTheme.typePalette.get(type),
          }}>
          <TypeIcon />
          <Text style={styles.text}>{type}</Text>
        </View>
      )}
    </>
  );
};
