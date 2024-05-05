import React from 'react';
import { View, Text } from 'react-native';
import { textStyle } from '../../../../themes/textStyle';
import { useStyleSheet } from './styles';
import { useTheme } from '../../../../themes/use-theme';

type StatBarProps = {
  statName: string;
  stat?: number;
  color?: string;
};

export const StatBar: React.FC<StatBarProps> = ({ statName, stat = 0, color }) => {
  const percent = stat / 255;
  const width = 340;
  const theme = useTheme();
  const styles = useStyleSheet(theme);

  return (
    <View style={{ flexDirection: 'row', width: '100%', marginTop: 4 }}>
      <View style={{ width: '43%' }}>
        <Text style={[textStyle.caption, styles.textColor]}>{statName}</Text>
      </View>
      <View style={{ width: '47%', justifyContent: 'center' }}>
        <View
          style={{
            borderRadius: 5,
            width: (width / 2) * percent,
            height: 5,
            backgroundColor: color,
            marginTop: 6,
          }}
        />
      </View>
      <View style={{ width: '10%' }}>
        <Text style={[textStyle.caption, styles.textColor]}>{stat}</Text>
      </View>
    </View>
  );
};
