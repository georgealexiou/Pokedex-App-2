import React, { FunctionComponent } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { useTheme } from '../../../themes/use-theme';

type ScreenAreaProps = {
  name: string;
  onBackButtonPress?: any;
  children?: React.ReactNode | React.ReactNode[];
  safeAreaRequired?: boolean;
  bottomSafeArea?: boolean;
  topSafeArea?: boolean;
  hasNoPadding?: boolean;
  backgroundColor?: string;
  whiteText?: boolean;
};

export const Screen: FunctionComponent<ScreenAreaProps> = ({
  name,
  onBackButtonPress,
  children,
  safeAreaRequired,
  bottomSafeArea = false,
  topSafeArea,
  backgroundColor,
  whiteText,
}) => {
  const getSafeAreaViewEdges = (): Edge[] => {
    if (safeAreaRequired) {
      return ['top', 'bottom', 'left', 'right'];
    } else if (bottomSafeArea) {
      return ['bottom', 'left', 'right'];
    } else if (topSafeArea) {
      return ['top', 'left', 'right'];
    }
    return ['left', 'right'];
  };

  const theme = useTheme();
  return (
    <SafeAreaView
      style={{ ...styles.styledWhiteView, backgroundColor: backgroundColor || theme.primaryBackgroundColor }}
      testID="safeAreaView"
      edges={getSafeAreaViewEdges()}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: whiteText ? theme.secondaryTextColor : theme.primaryTextColor,
          alignSelf: 'center',
          position: 'absolute',
          top: 50,
        }}>
        {name}
      </Text>

      <View
        style={{
          width: '100%',
          height: 90,
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}>
        <Pressable style={{ width: '37%', justifyContent: 'flex-end', top: -5 }} onPress={onBackButtonPress}>
          <Icon name="chevron-left" color={theme.primaryTextColor} size={25} />
        </Pressable>
        <View
          style={{
            width: '60%',
            justifyContent: 'flex-end',
          }}></View>
      </View>
      <View style={{ ...styles.styledWhiteView }}>{children}</View>
    </SafeAreaView>
  );
};
