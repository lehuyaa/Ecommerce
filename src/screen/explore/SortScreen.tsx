import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import Header from '../../component/header/Header';

interface SortScreenProps {}

const SortScreen = (props: SortScreenProps) => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
<Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Images.icon.back} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>
            Sort By
        </Text>
      </Header>    </View>
  );
};


const styles = ScaledSheet.create({
  container: {
      flex: 1,
  },
  iconHeader: {
    width: '6@s',
    height: '12@vs',
    resizeMode: 'contain',
    marginRight: '21@s',
  },
  textHeader: {
    fontSize: '16@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
    marginRight: '20@s',
  },
});

export default SortScreen;
