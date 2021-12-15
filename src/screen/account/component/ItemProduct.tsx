import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Themes} from '../../../assets/themes';
import ButtonDefault from '../../../component/button/ButtonDefault';
import {TAB_NAVIGATION_ROOT} from '../../../navigation/config/routes';
import {formatCurrencyVND} from '../../../utilities/format';

const ItemProduct = props => {
  const navigation = useNavigation();

  const {item, isReview} = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item?.productImage,
        }}
        style={styles.imageCart}
      />
      <View style={styles.viewInfo}>
        <Text numberOfLines={2} style={styles.textName}>
          {item?.productName}
        </Text>
        <Text style={styles.textPrice}>
          Price: {formatCurrencyVND(Number(item?.productPrice))}
        </Text>
        <Text style={styles.textPrice}>Quantity: {item?.productQuantity}</Text>
        <Text style={[styles.textPrice, {color: Themes.PrimaryColor.red}]}>
          Total: {formatCurrencyVND(item?.total)}
        </Text>
        {isReview ? (
          <ButtonDefault
            customStyles={styles.viewButton}
            title={'Review'}
            onPress={() => {
              navigation.navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.NEW_REVIEW, {
                idProduct: item.productId,
              });
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '140@vs',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Themes.NeutralColors.light,
    marginTop: '10@vs',
    flexDirection: 'row',
    paddingVertical: '16@vs',
    paddingHorizontal: '16@s',
  },
  imageCart: {
    width: '80@vs',
    height: '80@vs',
    resizeMode: 'contain',
  },
  viewInfo: {
    justifyContent: 'space-between',
    marginLeft: '12@s',
  },
  textName: {
    width: '25%',
    fontWeight: '700',
    fontSize: '12@ms0.3',
    color: Themes.NeutralColors.Dark,
  },
  textPrice: {
    fontWeight: '700',
    fontSize: '12@ms0.3',
    color: Themes.PrimaryColor.blue,
  },
  viewButton: {
    width: '120@s',
    height: '30@s',
    marginTop: '10@vs',
  },
});
export default ItemProduct;
