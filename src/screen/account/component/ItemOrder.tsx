import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {Themes} from '../../../assets/themes';
import {TAB_NAVIGATION_ROOT} from '../../../navigation/config/routes';
import {formatCurrencyVND} from '../../../utilities/format';

interface ItemOrderProps {
  item?: any;
}

const ItemInfo = (props: any) => {
  const {title, content} = props;
  return (
    <View style={styles.itemInfo}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={title === 'Total' ? styles.textPrice : styles.textContent}>
        {content}
      </Text>
    </View>
  );
};

const ItemOrder = (props: ItemOrderProps) => {
  const navigation = useNavigation();

  const {item} = props || {};
  const locationShop = item?.orderDetails[0].location;
  const locationUser = item?.shipAddress.location;
  const {id, orderDetails, timeCreated} = item || {};
  const calculatorTotal = (list: any) => {
    const totalPrice = list.reduce((total: number, item: any) => {
      return total + item?.total;
    }, 0);
    return totalPrice;
  };
  const listInfo = [
    {title: 'Order Status', content: item?.statusOrder?.name},
    {title: 'Items', content: `${item?.orderDetails.length} Items purchased`},
    {
      title: 'Total',
      content: formatCurrencyVND(
        calculatorTotal(orderDetails) * 1.1 +
          Math.abs(locationShop - locationUser) * 1400 +
          2000,
      ),
    },
  ];
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() =>
        navigation.navigate(TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ORDER_DETAILS, {
          item,
        })
      }>
      <Text style={styles.title}>Order Id: {id}</Text>
      <Text
        style={[
          styles.textTitle,
          {marginTop: verticalScale(12), marginBottom: verticalScale(24)},
        ]}>
        Time Created: {timeCreated}
      </Text>

      {listInfo.map(item => (
        <ItemInfo title={item.title} content={item.content} />
      ))}
      <ItemInfo />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '180@vs',
    borderWidth: 1,
    borderColor: Themes.NeutralColors.light,
    borderRadius: 5,
    marginBottom: '16@vs',
    paddingTop: '16@vs',
    paddingHorizontal: '16@s',
  },
  title: {
    fontSize: '14@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
  itemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '12@vs',
  },
  textTitle: {
    fontSize: '12@ms0.3',
    fontWeight: '400',
    color: Themes.NeutralColors.grey,
  },
  textContent: {
    fontSize: '12@ms0.3',
    fontWeight: '400',
    color: Themes.NeutralColors.Dark,
  },
  textPrice: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.PrimaryColor.blue,
  },
});

export default ItemOrder;
