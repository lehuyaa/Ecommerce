import React, {Component, useEffect, useState} from 'react';
import {
  FlatList,
  Image as DefaultImage,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import ButtonDefault from '../../component/button/ButtonDefault';
import Header from '../../component/header/Header';
import Images from '../../assets/images';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {ScrollView} from 'react-native-gesture-handler';
import {Themes} from '../../assets/themes';
import {starImage} from '../../utilities/staticData';
import {windowHeight} from '../../utilities/size';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../app-redux/slices/cartSlice';
import Toast from 'react-native-toast-message';
import {store} from '../../app-redux/store';
import {convertRate} from '../../utilities/format';
import Review from './component/Review';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import LoadingScreen from '../../component/LoadingScreen';
import {getReviewProduct} from '../../api/modules/api-app/product';
import ItemProduct from '../../component/item/ItemProduct';

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
  const {productName, productImage, productPrice, quantity, id} = item;
  const {userInfo} = store.getState();
  const {cart} = useSelector((state: any) => state);
  const [loading, setLoading] = useState<boolean>(false);
  const [listReview, setListReview] = useState<any>([]);
  const isFocus = useIsFocused();
  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Add Product to Cart Success',
    });
  };
  const showFailureNotEnoughtToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Not Enought Product',
    });
  };
  const showFailureToast = () => {
    Toast.show({
      type: 'error',
      text1: `You Can't Buy Your Product`,
    });
  };
  const getListReview = async () => {
    setLoading(true);

    try {
      const response: any = await getReviewProduct(id);
      setLoading(false);
      setListReview(response?.data);
      console.log('response?.data', response?.data);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isFocus) {
      getListReview();
    }
  }, [isFocus]);
  const addToCartFunc = () => {
    if (
      quantity - cart?.listProduct?.filter(x => x.id === id)[0]?.quantity <
      1
    ) {
      showFailureNotEnoughtToast();
      return;
    }
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

  const navigateToReview = () => {
    navigation.navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.RATING, {
      listReview,
      item,
    });
  };

  return (
    <View style={styles.container}>
      {loading && <LoadingScreen />}
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <DefaultImage style={styles.iconHeader} source={Images.icon.back} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.textHeader}>
          {productName}
        </Text>
      </Header>
      <ScrollView style={styles.viewMain}>
        <View style={styles.viewImage}>
          <DefaultImage
            style={styles.imageProduct}
            source={{
              uri: productImage,
            }}
          />
        </View>

        <View style={styles.viewInfo}>
          <Text style={styles.textProductName}>{productName}</Text>
          <Text style={styles.textProductPrice}>{productPrice}</Text>
          <Text style={[styles.textProductName, {marginTop: verticalScale(5)}]}>
            Quantity: {quantity}
          </Text>
        </View>

        <View>
          <View style={styles.reviewProduct}>
            <Text style={styles.textReview}>Review Product</Text>
            <TouchableOpacity onPress={navigateToReview}>
              <Text style={styles.textSeeMore}>See More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingView}>
            <DefaultImage
              style={[styles.star, {marginTop: 0, marginRight: 8}]}
              source={starImage[convertRate(item?.rate) - 1]}
            />
            <Text style={styles.textStar}>{convertRate(item?.rate)}</Text>
            <Text style={styles.reviewQuantity}>
              {listReview.length} reviews
            </Text>
          </View>
          {listReview.length > 0 ? (
            <Review item={item} itemReview={listReview[0]} />
          ) : null}
        </View>

        <View>
          <View style={styles.suggestProduct}>
            <Text style={styles.textReview}>You Might Also Like</Text>
          </View>

          <FlatList
            horizontal
            //fake data
            data={[1, 2, 3, 4, 5]}
            showsHorizontalScrollIndicator={false}
            style={styles.listView}
            renderItem={item => <ItemProduct />}
          />
        </View>
      </ScrollView>
      <View style={styles.viewButton}>
        <ButtonDefault
          title={quantity === 0 ? 'Sold out' : 'Add To Cart'}
          onPress={() => addToCartFunc()}
        />
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
    flex: 1,
    marginBottom: '100@vs',
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
    paddingTop: '16@vs',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: Themes.BackgroundColor.white,
    height: '100@vs',
  },
  viewImage: {
    borderBottomColor: Themes.NeutralColors.light,
    borderBottomWidth: 1,
    borderTopColor: Themes.NeutralColors.light,
    borderTopWidth: 1,
  },
  reviewProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '16@s',
    marginTop: '16@vs',
  },
  textReview: {
    fontSize: '14@vs',
    lineHeight: '21@vs',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
  textSeeMore: {
    fontSize: '14@vs',
    lineHeight: '21@vs',
    color: Themes.PrimaryColor.blue,
    fontWeight: '700',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '16@vs',
    paddingLeft: '16@s',
  },
  textStar: {
    fontSize: '14@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.grey,
    marginRight: '8@s',
  },
  reviewQuantity: {
    fontSize: '14@ms0.3',
    color: Themes.NeutralColors.grey,
  },
  suggestProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '16@s',
    marginTop: '32@s',
  },
  listView: {marginHorizontal: '16@s'},
});

export default ProductDetailsScreen;
