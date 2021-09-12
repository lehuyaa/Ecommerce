import * as React from 'react';
import { Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { Themes } from '../../assets/themes';
import { ScaledSheet } from 'react-native-size-matters';

interface ButtonDefaultProps {
  tittle: string;
  onPress: () => void;
  customStyles?: StyleProp<ViewStyle>;
}

const ButtonDefault = (props: ButtonDefaultProps) => {
  const { tittle, onPress, customStyles } = props;
  return (
    <TouchableOpacity style={[styles.container, customStyles]} onPress={onPress}>
        <Text style={styles.tittle}>{tittle}</Text>
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
