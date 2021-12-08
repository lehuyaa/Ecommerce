import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import ButtonDefault from '../../component/button/ButtonDefault';
import Header from '../../component/header/Header';
import Images from '../../assets/images';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {ScrollView} from 'react-native-gesture-handler';
import {Themes} from '../../assets/themes';
import {starImage} from '../../utilities/staticData';
import {windowHeight} from '../../utilities/size';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../app-redux/slices/cartSlice';
import Toast from 'react-native-toast-message';
import {store} from '../../app-redux/store';
import { convertRate } from '../../utilities/format';

type ParamList = {
  ProductDetailsScreen: {
    item?: any;
  };
};
const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<ParamList, 'ProductDetailsScreen'>>();
  const {item} = route.params || {};
  const {productName, productImage, productPrice, quantity} = item;
  const {userInfo} = store.getState();
  
  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Add Product to Cart Success',
    });
  };
  const showFailureToast = () => {
    Toast.show({
      type: 'error',
      text1: `You Can't Buy Your Product`,
    });
  };
  const addToCartFunc = () => {
    if (item?.user?.id === userInfo?.user?.id) {
      showFailureToast();
    } else {
      const payload = {
        ...item,
        idUser: userInfo?.user?.id,
      };
      dispatch(addToCart(payload));
      showSuccessToast();
    }
  };
  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Images.icon.back} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.textHeader}>
          {productName}
        </Text>
      </Header>
      <ScrollView style={styles.viewMain}>
        <View style={styles.viewImage}>
          <Image
            style={styles.imageProduct}
            source={{
              uri: productImage,
            }}
          />
        </View>

        <View style={styles.viewInfo}>
          <Text style={styles.textProductName}>{productName}</Text>
          <Image style={styles.star} source={starImage[convertRate(item?.rate)-1]} />
          <Text style={styles.textProductPrice}>{productPrice}</Text>
          <Text style={[styles.textProductName, {marginTop: verticalScale(5)}]}>Quantity: {quantity}</Text>

        </View>
      </ScrollView>
      <View style={styles.viewButton}>
        <ButtonDefault title={'Add To Cart'} onPress={() => addToCartFunc()} />
      </View>
      <Toast />
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
    width: '100%',
    height: '100%',
  },
  imageProduct: {
    width: '100%',
    height: windowHeight * 0.4,
    resizeMode: 'contain',
  },
  textProductName: {
    fontSize: '20@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
    marginTop: '20@vs',
  },
  textProductPrice: {
    fontSize: '20@ms0.3',
    fontWeight: '700',
    color: Themes.PrimaryColor.blue,
    marginTop: '15@vs',
  },
  viewInfo: {
    paddingHorizontal: '16@s',
  },
  star: {
    resizeMode: 'contain',
    width: '100@s',
    height: '16@vs',
    marginTop: '10@vs',
  },
  viewButton: {
    paddingHorizontal: '16@s',
    position: 'absolute',
    width: '100%',
    bottom: '30@vs',
  },
  viewImage: {
    borderBottomColor: Themes.NeutralColors.light,
    borderBottomWidth: 1,
    borderTopColor: Themes.NeutralColors.light,
    borderTopWidth: 1,
  },
});

export default ProductDetailsScreen;
