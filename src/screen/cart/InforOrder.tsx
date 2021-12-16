import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {order} from '../../api/modules/api-app/order';
import {removeOrderCart} from '../../app-redux/slices/cartSlice';
import {store} from '../../app-redux/store';
import IconBack from '../../assets/icons/IconBack';
import {Themes} from '../../assets/themes';
import ButtonDefault from '../../component/button/ButtonDefault';
import ButtonIcon from '../../component/button/ButtonIcon';
import Header from '../../component/header/Header';
import LoadingScreen from '../../component/LoadingScreen';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import {caculatorTotalCart, formatCurrencyVND} from '../../utilities/format';

type ParamList = {
  InforOrder: {
    listSeller?: any;
    address?: any;
    paymentMethod?: any;
  };
};
const InforOrder = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState<boolean>(false);
  const route = useRoute<RouteProp<ParamList, 'InforOrder'>>();
  const {userInfo} = store.getState();
  const dispatch = useDispatch();

  const {listSeller, address, paymentMethod} = route.params || {};

  const orderFunc = async () => {
    const params = {
      payment: paymentMethod,
      address,
      listSeller,
      userID: userInfo?.user?.id,
      createTime: new Date(),
    };
    setLoading(true);
    try {
      const response = await order(params);
      setLoading(false);
      navigation.navigate(TAB_NAVIGATION_ROOT.CART_ROUTE.ORDER_SUCCESS);
      dispatch(removeOrderCart());
    } catch (error) {
      setLoading(false);
    }
  };
  const ItemOrder = (item: any) => {
    const locationShop = item?.listProduct[0].location;
    const locationUser = address.location;
    return (
      <View style={styles.itemOrder}>
        <Text style={styles.nameSeller}>
          {item?.listProduct[0]?.nameSeller}
        </Text>
        <View style={styles.bill}>
          <View>
            <View style={styles.eachField}>
              <Text style={styles.textLeftBill}>
                Item({item?.listProduct.length})
              </Text>
              <Text style={styles.textRighBill}>
                {formatCurrencyVND(caculatorTotalCart(item?.listProduct))}
              </Text>
            </View>
            <View style={styles.eachField}>
              <Text style={styles.textLeftBill}>Shipping</Text>
              <Text style={styles.textRighBill}>
                {formatCurrencyVND(
                  Math.abs(locationShop - locationUser) * 1400 + 2000,
                )}
              </Text>
            </View>
            <View style={styles.eachField}>
              <Text style={styles.textLeftBill}>Import charges</Text>
              <Text style={styles.textRighBill}>
                {formatCurrencyVND(caculatorTotalCart(item?.listProduct) * 0.1)}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.eachField}>
            <Text style={styles.textLeftTotalBill}>Total Price</Text>
            <Text style={styles.textRightTotalBill}>
              {formatCurrencyVND(
                caculatorTotalCart(item?.listProduct) * 1.1 +
                  Math.abs(locationShop - locationUser) * 1400 +
                  2000,
              )}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {loading && <LoadingScreen />}
      <Header customStyle={styles.customHeader}>
        <View style={styles.leftHeader}>
          <ButtonIcon
            onPress={() => {
              navigation.goBack();
            }}
            children={
              <IconBack height={verticalScale(24)} width={verticalScale(24)} />
            }
          />
          <Text style={styles.textHeader}>Order Info</Text>
        </View>
      </Header>
      <ScrollView contentContainerStyle={styles.contentScroll}>
        {listSeller.map(item => (
          <ItemOrder listProduct={item?.listProduct} />
        ))}
      </ScrollView>

      <View style={styles.viewButton}>
        <ButtonDefault
          title={'Order'}
          onPress={() => {
            orderFunc();
          }}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
  },
  contentScroll: {
    paddingBottom: '100@vs',
  },
  viewButton: {
    paddingHorizontal: '16@s',
    position: 'absolute',
    width: '100%',
    bottom: '30@vs',
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
  customHeader: {
    justifyContent: 'space-between',
  },
  textHeader: {
    fontWeight: '700',
    fontSize: '16@vs',
    color: Themes.NeutralColors.Dark,
    marginLeft: '12@s',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameSeller: {
    fontSize: '14@ms0.3',
    color: Themes.NeutralColors.Dark,
    fontWeight: '700',
    marginBottom: '15@vs',
  },
  itemOrder: {
    paddingHorizontal: '16@s',
    marginTop: '10@vs',
  },
});

export default InforOrder;
