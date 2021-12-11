import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import IconBack from '../../assets/icons/IconBack';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import ButtonIcon from '../../component/button/ButtonIcon';
import Header from '../../component/header/Header';
import { formatCurrencyVND } from '../../utilities/format';
import ItemProduct from './component/ItemProduct';


const ItemStatus = (props: any) => {
  const { title, isDone, isLeft, isRight } = props;
  return (
    <View style={styles.viewItemStatus}>
      <View style={styles.viewImage}>
        <View
          style={[
            styles.line,
            {
              width: title === 'Packing' ? 0 : scale(45),
              backgroundColor: isLeft
                ? Themes.PrimaryColor.blue
                : Themes.NeutralColors.light,
            },
          ]}
        />
        <Image
          style={styles.image}
          source={isDone ? Images.icon.iconDone : Images.icon.iconUnDone}
        />
        <View
          style={[
            styles.line,
            {
              width: title === 'Success' ? 0 : scale(45),
              backgroundColor: isRight
                ? Themes.PrimaryColor.blue
                : Themes.NeutralColors.light,
            },
          ]}
        />
      </View>
    </View>
  );
};
const ItemInfo = (props: any) => {
  const { title, content } = props;
  return (
    <View style={styles.itemInfo}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textContent}>{content}</Text>
    </View>
  );
};
const listStatus = [
  { title: 'Packing' },
  { title: 'Shipping' },
  { title: 'Success' },
];
type ParamList = {
  OrderDetails: {
    item?: any;
  };
};
const OrderDetails = () => {
  const route = useRoute<RouteProp<ParamList, 'OrderDetails'>>();
  const navigation = useNavigation();

  const { item } = route.params || {};
  console.log(item);
  const calculatorTotalProduct = (list: any) => {
    const totalPrice = list.reduce((total, item) => {
      return total + item?.total;
    }, 0);
    return totalPrice;
  };
  const listInfo = [
    { title: 'Name Receiver', content: item?.shipAddress?.nameReceiver },
    {
      title: 'Phone Number',
      content: item?.shipAddress?.phoneNumber,
    },
    {
      title: 'Street Address',
      content: item?.shipAddress?.streetAddress,
    },
    {
      title: 'City',
      content: item?.shipAddress?.city,
    },
  ];
  const listInfoPayment = [
    {
      title: `Items (${item?.orderDetails?.length})`,
      content: calculatorTotalProduct(item?.orderDetails),
    },
    {
      title: 'Shipping',
      content: calculatorTotalProduct(item?.orderDetails) * 0.01,
    },
    {
      title: 'Import charges',
      content: calculatorTotalProduct(item?.orderDetails) * 0.1,
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
          <Text style={styles.textHeader}>Order Details</Text>
        </View>
      </Header>
      <ScrollView
        style={styles.viewMain}
        contentContainerStyle={styles.contentScroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.viewStatus}>
          <ItemStatus
            isDone={item?.statusOrder?.id === 1}
            isRight={item?.statusOrder?.id === 2}
            title={'Packing'}
          />
          <ItemStatus
            isLeft={item?.statusOrder?.id === 2}
            isRight={item?.statusOrder?.id === 3}
            isDone={item?.statusOrder?.id === 2}
            title={'Shipping'}
          />
          <ItemStatus
            isLeft={item?.statusOrder?.id === 3}
            isDone={item?.statusOrder?.id === 3}
            title={'Success'}
          />
        </View>
        <View style={styles.viewStatusText}>
          {listStatus.map(item => (
            <Text style={styles.textTitle} key={item.title}>
              {item.title}
            </Text>
          ))}
        </View>
        <View style={styles.viewListProduct}>
          <Text style={[styles.title, { marginBottom: verticalScale(10) }]}>
            Product
          </Text>
          {item?.orderDetails.map(item => (
            <ItemProduct key={item.id} item={item} />
          ))}
        </View>
        <Text
          style={[
            styles.title,
            {
              marginLeft: scale(16),
              marginTop: verticalScale(24),
            },
          ]}>
          Shipping Details
        </Text>
        <View style={styles.viewAddress}>
          {listInfo.map(item => (
            <ItemInfo title={item.title} content={item.content} />
          ))}
        </View>
        <Text
          style={[
            styles.title,
            {
              marginLeft: scale(16),
              marginTop: verticalScale(24),
            },
          ]}>
          Payment Details
        </Text>
        <View style={styles.viewAddress}>
          {listInfoPayment.map(item => (
            <ItemInfo
              title={item.title}
              content={formatCurrencyVND(item.content)}
            />
          ))}
          <View style={styles.itemInfo}>
            <Text style={styles.textTitleTotal}>Total Price</Text>
            <Text style={styles.textContentTotalPrice}>
              {formatCurrencyVND(
                calculatorTotalProduct(item?.orderDetails) * 1.11,
              )}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
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
    paddingTop: '16@vs',
  },
  viewStatus: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  image: {
    width: '24@vs',
    height: '24@vs',
  },
  textTitle: {
    fontSize: '12@ms0.3',
    fontWeight: '400',
    color: Themes.NeutralColors.grey,
  },
  viewItemStatus: {
    alignItems: 'center',
  },
  viewStatusText: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: '12@vs',
  },
  line: {
    height: 1,
    width: '40@s',
    marginTop: '12@vs',
  },
  viewImage: {
    flexDirection: 'row',
  },
  viewListProduct: {
    paddingHorizontal: '16@s',
    paddingTop: '24@vs',
  },
  title: {
    fontSize: '14@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
  viewAddress: {
    marginHorizontal: '16@s',
    marginTop: '24@vs',
    borderWidth: 1,
    borderColor: Themes.NeutralColors.light,
    borderRadius: 5,
    paddingBottom: '16@vs',
  },
  itemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '12@vs',
    marginHorizontal: '16@s',
  },
  textContent: {
    fontSize: '12@ms0.3',
    fontWeight: '400',
    color: Themes.NeutralColors.Dark,
  },
  textTitleTotal: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
  textContentTotalPrice: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.PrimaryColor.blue,
  },
  contentScroll: {
    paddingBottom: verticalScale(100),
  },
});

export default OrderDetails;
