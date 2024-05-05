import { Pressable } from 'react-native';
import { ReactNode } from 'react';
import { SimpleContainer } from '../SimpleContainer/SimpleContainer';
import React from 'react';
import { useTheme } from '../../../../themes/use-theme';

type TypeProps = {
  children: ReactNode | ReactNode[] | undefined;
  style: {
    width?: number | string;
    height?: number | string;
  };
  onPress?: () => void;
  backgroundColor?: string;
  shadow?: boolean;
};

export const SimplePressable: React.FC<TypeProps> = ({ children, style, onPress, backgroundColor, shadow = true }) => {
  const theme = useTheme();

  return (
    <Pressable onPress={onPress} style={style}>
      <SimpleContainer
        style={{ width: '100%', height: '100%' }}
        backgroundColor={backgroundColor || theme.primaryBackgroundColor}
        shadow={shadow}>
        {children}
      </SimpleContainer>
    </Pressable>
  );
};
