import * as React from 'react';
import { Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { Themes } from '../../assets/themes';
import { ScaledSheet } from 'react-native-size-matters';

interface ButtonDefaultProps {
  title: string;
  onPress: () => void;
  customStyles?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const ButtonDefault = (props: ButtonDefaultProps) => {
  const { title, onPress, customStyles, disabled } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, customStyles]}
      onPress={onPress}>
      <Text style={styles.tittle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonDefault;

const styles = ScaledSheet.create({
  container: {
    height: '55@vs',
    backgroundColor: Themes.PrimaryColor.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  tittle: {
    color: Themes.BackgroundColor.white,
    fontSize: '14@vs',
    fontWeight: '700',
  },
});
