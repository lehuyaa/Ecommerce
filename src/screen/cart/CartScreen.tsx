import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import ButtonDefault from '../../component/button/ButtonDefault';
import Header from '../../component/header/Header';
import Images from '../../assets/images';
import ItemCart from '../../component/item/ItemCart';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {Themes} from '../../assets/themes';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {caculatorTotalCart, formatCurrencyVND} from '../../utilities/format';
import _, {groupBy} from 'lodash';
import ItemShopCart from './component/ItemShopCart';

const CartScreen = () => {
  const navigation = useNavigation();
  const {cart} = useSelector((state: any) => state);
  const groupCart = listProduct => {
    return _.chain(listProduct)
      .groupBy('idSeller')
      .map((value, key) => ({
        idSeller: Number(key),
        listProduct: value,
      }))
      .value();
  };
  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.headerText}>Your Cart</Text>
      </Header>
      <View style={styles.contentCart}>
        <FlatList
          data={groupCart(cart?.listProduct)}
          renderItem={({item}) => <ItemShopCart item={item} />}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{marginTop: 16}}>
              <ButtonDefault
                disabled={
                  cart?.isNotEnought ||
                  cart?.listProduct.length === 0 ||
                  cart?.listProduct.filter(item => item.isCheck === true)
                    .length === 0
                }
                title={'Check Out'}
                onPress={() => {
                  const newCart = cart?.listProduct.filter(
                    e => e.isCheck === true,
                  );
                  navigation.navigate('SHIPPING_ADDRESS', {
                    listSeller: groupCart(newCart),
                  });
                }}
              />
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Themes.BackgroundColor.white,
    flex: 1,
  },
  headerText: {
    color: Themes.NeutralColors.Dark,
    fontSize: '12@vs',
    fontWeight: '700',
  },
  contentCart: {
    flex: 1,
    paddingVertical: '16@vs',
    paddingHorizontal: '16@s',
  },
  listCart: {height: '240@vs'},
  buttonVoucher: {
    height: '55@s',
    width: '100%',
    flexDirection: 'row',
  },
  buttonInput: {
    flex: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: Themes.NeutralColors.light,
    borderTopLeftRadius: '5@s',
    borderBottomLeftRadius: '5@s',
    fontSize: '14@vs',
    color: Themes.NeutralColors.Dark,
    paddingLeft: '16@s',
  },
  buttonApply: {
    flex: 2,
    backgroundColor: Themes.PrimaryColor.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  textApply: {
    fontSize: '12@vs',
    color: Themes.BackgroundColor.white,
    fontWeight: '700',
  },
  bill: {
    height: '144@vs',
    marginVertical: '16@vs',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Themes.NeutralColors.light,
    paddingVertical: '16@vs',
    paddingHorizontal: '16@s',
    justifyContent: 'space-between',
  },
  eachField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLeftBill: {
    fontSize: '12@vs',
    color: Themes.NeutralColors.grey,
    lineHeight: '21.6@vs',
  },
  textRighBill: {
    fontSize: '12@vs',
    color: Themes.NeutralColors.Dark,
    lineHeight: '21.6@vs',
  },
  textLeftTotalBill: {
    fontSize: '12@vs',
    color: Themes.NeutralColors.Dark,
    lineHeight: '18@vs',
    fontWeight: '700',
  },
  textRightTotalBill: {
    fontSize: '12@vs',
    color: Themes.PrimaryColor.blue,
    lineHeight: '18@vs',
    fontWeight: '700',
  },
  divider: {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: Themes.PrimaryColor.blue,
  },
});

export default CartScreen;
