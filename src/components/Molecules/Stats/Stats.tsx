import { View, Text } from 'react-native';
import { StatBar } from '../../Atoms/StatBar/StatBar';
import { textStyle } from '../../../../themes/textStyle';
import React from 'react';
import { useStyleSheet } from './styles';
import { useTheme } from '../../../../themes/use-theme';

type StatsProps = {
  color?: string;
  hp?: number;
  attack?: number;
  defence?: number;
  spAttack?: number;
  spDefence?: number;
  speed?: number;
};

export const Stats: React.FC<StatsProps> = ({ color, hp, attack, defence, spAttack, spDefence, speed }) => {
  const theme = useTheme();
  const styles = useStyleSheet(theme);
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={[textStyle.h1, styles.statsHeadingTextColor]}>Stats</Text>
      <View style={{ marginBottom: 6 }}>
        <StatBar statName={'HP'} stat={hp} color={color}></StatBar>
        <StatBar statName={'Attack'} stat={attack} color={color}></StatBar>
        <StatBar statName={'Defence'} stat={defence} color={color}></StatBar>
        <StatBar statName={'Special Attack'} stat={spAttack} color={color}></StatBar>
        <StatBar statName={'Special Defence'} stat={spDefence} color={color}></StatBar>
        <StatBar statName={'Speed'} stat={speed} color={color}></StatBar>
      </View>
    </View>
  );
};
