import { View } from 'react-native';
import { useStyleSheet } from './styles';
import { ReactNode } from 'react';
import { theme } from '../../../../themes/theme';
import React from 'react';
import { useTheme } from '../../../../themes/use-theme';

type TypeProps = {
  children: ReactNode | ReactNode[] | undefined;
  style: {
    width?: number | string;
    height?: number | string;
  };
  backgroundColor?: string;
  shadow?: boolean;
};

export const SimpleContainer: React.FC<TypeProps> = ({
  children,
  style,
  backgroundColor = theme.palette.white,
  shadow = true,
}) => {
  const theme = useTheme();
  const styles = useStyleSheet(theme);
  return (
    <>
      <View style={{ ...(shadow ? styles.container : styles.containerNoShadow), backgroundColor, ...style }}>
        {children}
      </View>
    </>
  );
};
