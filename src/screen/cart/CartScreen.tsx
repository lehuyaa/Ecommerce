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
import { ScaledSheet } from 'react-native-size-matters';
import { Themes } from '../../assets/themes';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { caculatorTotalCart, formatCurrencyVND } from '../../utilities/format';
import _, { groupBy } from 'lodash';
import ItemShopCart from './component/ItemShopCart';

const CartScreen = () => {
  const navigation = useNavigation();
  const { cart } = useSelector((state: any) => state);
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
          renderItem={({ item }) => <ItemShopCart item={item} />}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ marginTop: 16 }}>
              {/* <View style={styles.buttonVoucher}>
                <TextInput
                  placeholder={'Enter Cupon Code'}
                  style={styles.buttonInput}
                />
                <TouchableOpacity style={styles.buttonApply}>
                  <Text style={styles.textApply}>Apply</Text>
                </TouchableOpacity>
              </View> */}

              <View style={styles.bill}>
                <View>
                  <View style={styles.eachField}>
                    <Text style={styles.textLeftBill}>
                      Item({cart?.numberCart})
                    </Text>
                    <Text style={styles.textRighBill}>
                      {formatCurrencyVND(caculatorTotalCart(cart?.listProduct))}
                    </Text>
                  </View>
                  <View style={styles.eachField}>
                    <Text style={styles.textLeftBill}>Shipping</Text>
                    <Text style={styles.textRighBill}>
                      {formatCurrencyVND(
                        caculatorTotalCart(cart?.listProduct) * 0.01,
                      )}
                    </Text>
                  </View>
                  <View style={styles.eachField}>
                    <Text style={styles.textLeftBill}>Import charges</Text>
                    <Text style={styles.textRighBill}>
                      {formatCurrencyVND(
                        caculatorTotalCart(cart?.listProduct) * 0.1,
                      )}
                    </Text>
                  </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.eachField}>
                  <Text style={styles.textLeftTotalBill}>Total Price</Text>
                  <Text style={styles.textRightTotalBill}>
                    {formatCurrencyVND(
                      caculatorTotalCart(cart?.listProduct) * 1.11,
                    )}
                  </Text>
                </View>
              </View>

              <ButtonDefault
                disabled={cart?.isNotEnought}
                title={'Check Out'}
                onPress={() => {
                  navigation.navigate('SHIPPING_ADDRESS', {
                    listSeller: groupCart(cart?.listProduct),
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
  listCart: { height: '240@vs' },
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
