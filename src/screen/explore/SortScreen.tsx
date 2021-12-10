import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Images from '../../assets/images';
import {Themes} from '../../assets/themes';
import Header from '../../component/header/Header';
import {APP_ROUTE} from '../../navigation/config/routes';
import {formatStringCurrency} from '../../utilities/format';

interface SortScreenProps {}

type ParamList = {
  SortScreen: {
    setListProduct?: any;
    listProduct?: any;
  };
};
const SortScreen = (props: SortScreenProps) => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'SortScreen'>>();
  const {setListProduct, listProduct} = route.params || {};

  const ListSort = [
    {id: 1, name: 'Price: lowest first'},
    {id: 2, name: 'Price: highest first'},
  ];
  const ItemSort = (props: any) => {
    const {item, onPress} = props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.itemSort}>
        <Text style={styles.title}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };
  const onPress = (id: number) => {
    if (id === 1) {
      const newList = listProduct.sort(
        (a, b) =>
          formatStringCurrency(a.productPrice) -
          formatStringCurrency(b.productPrice),
      );
      navigation.navigate(APP_ROUTE.SEARCH_RESULT, {
        searchResult: newList,
        isSort: true,
      });
    } else if (id === 2) {
      const newList = listProduct.sort(
        (a, b) =>
          formatStringCurrency(b.productPrice) -
          formatStringCurrency(a.productPrice),
      );
      navigation.navigate(APP_ROUTE.SEARCH_RESULT, {
        searchResult: newList,
        isSort: true,
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Images.icon.back} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Sort By</Text>
      </Header>
      <View style={styles.viewMain}>
        {ListSort.map((item, index) => (
          <ItemSort
            key={`${index}`}
            item={item}
            onPress={() => onPress(item.id)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
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
  viewMain: {
    flex: 1,
  },
  itemSort: {
    height: '54@vs',
    justifyContent: 'center',
    paddingLeft: '16@s',
  },
  title: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
});

export default SortScreen;
