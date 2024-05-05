import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useStyleSheet } from './styles';
import React from 'react';
import { useTheme } from '../../../themes/use-theme';

type TabOptionProps = {
  focused?: boolean;
  isSearch?: boolean;
  icon: string;
};

export const TabOption: React.FC<TabOptionProps> = ({ focused, isSearch = false, icon }) => {
  const theme = useTheme();
  const styles = useStyleSheet(theme);
  return (
    <>
      {isSearch ? (
        <View style={styles.tabBarOptionSearch}>
          <Icon name={icon} color={theme.contrastIconColor} size={25} />
        </View>
      ) : (
        <View style={focused ? styles.tabBarOptionSelected : styles.tabBarOptionNotSelected}>
          <Icon name={icon} color={theme.contrastIconColor} size={25} />
        </View>
      )}
    </>
  );
};
