import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Themes } from '../../assets/themes';

interface ButtonDefaultProps {
    tittle: string;
    onPress: () => void;
}

const ButtonDefault = (props: ButtonDefaultProps) => {
    const {tittle,onPress} = props;
  return (
      <TouchableOpacity onPress={onPress}>
          <View style={styles.container}>
            <Text style={styles.tittle}>{tittle}</Text>
         </View>
    </TouchableOpacity>
    
  );
};

export default ButtonDefault;

const styles = StyleSheet.create({
  container: {
      height: 60,
      backgroundColor: Themes.PrimaryColor.blue,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
  },
  tittle: {
      color: Themes.BackgroundColor.white,
      fontSize: 14,
      fontWeight: '700',
  },
});
