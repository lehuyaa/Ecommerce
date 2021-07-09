import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Themes } from '../../assets/themes';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { TextInput } from 'react-native';


interface IconleftInputProps {
  icon?: any;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: any;
}

const IconleftInput = (props: IconleftInputProps) => {
  const {icon,placeholder,onChangeText,value,...inputProps} = props;
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {icon}
      </View>
      <TextInput style={styles.textInput} placeholder={placeholder} onChangeText={onChangeText}  value={value} {...inputProps}/>
    </View>
  );
};

export default IconleftInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderColor: Themes.NeutralColors.light,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 18,
  },
  textInput: {
    marginLeft: 15,
  },
});
