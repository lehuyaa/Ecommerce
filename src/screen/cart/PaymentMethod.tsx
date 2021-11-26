import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import IconAdd from '../../assets/icons/IconAdd';
import IconBack from '../../assets/icons/IconBack';
import {Themes} from '../../assets/themes';
import ButtonIcon from '../../component/button/ButtonIcon';
import Header from '../../component/header/Header';
import {formatCurrencyVND} from '../../utilities/format';
import ItemPaymentMethod from './component/ItemPaymentMethod';
import Entypo from 'react-native-vector-icons/Entypo';

const PaymentMethod = () => {
  const navigation = useNavigation();

  const listPaymentMethod = [
    {
      id: 1,
      name: 'Payment At Home',
      icon: <Entypo name="home" size={30} color={Themes.PrimaryColor.blue} />,
    },
  ];
  return (
    <View style={styles.container}>
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
      <View style={styles.viewMain}>
        {listPaymentMethod.map(item => (
          <ItemPaymentMethod key={item.id} item={item} />
        ))}
      </View>
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
});

export default PaymentMethod;
