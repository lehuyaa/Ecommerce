import React, { ComponentProps, useMemo, ReactNode } from 'react';
import { StyleSheet, StyleProp, TextStyle, Platform, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters'


type TextProps = {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
  color?: string;
  bold?: boolean;
} & Omit<ComponentProps<typeof Text>, 'style'>;

const getColor = (color?: string): StyleProp<TextStyle> => {
  return {
    color: color ? color : '#000000',
  };
};

const getBold = (bold?: boolean): StyleProp<TextStyle> => {
    return {
        fontWeight: bold ? 'bold' : 'normal'
    };
  };

export const H1 = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.H1, getColor(color), getBold(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const H2 = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.H2, getColor(color),getBold(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const H3 = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.H3, getColor(color),getBold(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const H4 = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.H4, getColor(color),getBold(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const P = ({ style, color, bold, ...props }: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.P, getColor(color), getBold(bold), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const SmallText = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.SmallText, getColor(color), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

export const TinyText = ({
  style,
  color,
  bold,
  ...props
}: TextProps): JSX.Element => {
  const customStyle = useMemo<StyleProp<TextStyle>>(() => {
    return [styles.TinyText, getColor(color), style];
  }, [style, color, bold]);

  return <Text style={customStyle} {...props} />;
};

const styles = ScaledSheet.create({
  H1: {
    fontSize: '26@vs',
    lineHeight: '33.8@vs',
  },
  H2: {
    fontSize: '24@vs',
    lineHeight: '31.2@vs',
  },
  H3: {
    fontSize: '20@vs',
    lineHeight: '26@vs',
  },
  H4: {
    fontSize: '18@vs',
    lineHeight: '23.4@vs',
  },
  P: {
    fontSize: '16@vs',
    lineHeight: '22@vs',
  },
  SmallText: {
    fontSize: '14@vs',
    lineHeight: '20@vs',
  },
  TinyText: {
    fontSize: '10@vs',
    lineHeight: '12@vs',
  },
});
