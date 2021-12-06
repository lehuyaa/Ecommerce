import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, { useState } from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import IconAdd from '../../assets/icons/IconAdd';
import IconBack from '../../assets/icons/IconBack';
import {Themes} from '../../assets/themes';
import ButtonIcon from '../../component/button/ButtonIcon';
import Header from '../../component/header/Header';
import {formatCurrencyVND} from '../../utilities/format';
import ItemPaymentMethod from './component/ItemPaymentMethod';
import Entypo from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-toast-message';
import ButtonDefault from '../../component/button/ButtonDefault';
import { store } from '../../app-redux/store';
import { order } from '../../api/modules/api-app/order';
import LoadingScreen from '../../component/LoadingScreen';
import { TAB_NAVIGATION_ROOT } from '../../navigation/config/routes';
import { useDispatch } from 'react-redux';
import { removeAllCart } from '../../app-redux/slices/cartSlice';

type ParamList = {
  PaymentMethod: {
    listSeller?: any;
    address?: any;
  };
};
const PaymentMethod = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const route = useRoute<RouteProp<ParamList, 'PaymentMethod'>>();
  const {listSeller, address} = route.params || {};
  const listPaymentMethod = [
    {
      id: 1,
      name: 'Payment At Home',
      icon: <Entypo name="home" size={30} color={Themes.PrimaryColor.blue} />,
    },
  ];
  const [paymentMethod, setPaymentMethod] = useState<any>(null)

  const showFailureToast = () => {
    Toast.show({
      type: 'error',
      text1: `Please Choice Payment Method`,
    });
  };

  const choicePayment = item => {
    const payment = {
      id : item?.id,
      name: item?.name,
    };
    setPaymentMethod(payment);
  };
  const {userInfo} = store.getState();
  const [loading, setLoading] = useState<boolean>(false);

  const orderFunc = async () => {
      const params = {
        payment: paymentMethod,
        address,
        listSeller,
        userID:  userInfo?.user?.id
      }
      try {
        const response = await order(params);
        setLoading(false);
        navigation.navigate(TAB_NAVIGATION_ROOT.CART_ROUTE.ORDER_SUCCESS);
        dispatch(removeAllCart());
      } catch (error) {
        setLoading(false);
      }
  }
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
          <Text style={styles.textHeader}>Payment</Text>
        </View>
      </Header>
      <ScrollView style={styles.viewMain}>
        {listPaymentMethod.map(item => (
          <ItemPaymentMethod key={item.id} item={item}                 isChoice={item.id === paymentMethod?.id}
          onPress={() => choicePayment(item)}
          />
        ))}
      </ScrollView>
      <View style={styles.viewButton}>
        <ButtonDefault
          title={'Next'}
          onPress={() => {
            if (paymentMethod) {
              orderFunc();
            } else {
              showFailureToast();
            }
          }}
        />
      </View>
      <Toast />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
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
  viewMain: {
    backgroundColor: Themes.BackgroundColor.white,
    flex: 1,
    height: '100%',
  },
  viewButton: {
    paddingHorizontal: '16@s',
    position: 'absolute',
    width: '100%',
    bottom: '30@vs',
  },
});

export default PaymentMethod;


