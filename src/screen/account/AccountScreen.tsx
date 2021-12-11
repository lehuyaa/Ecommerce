import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../component/header/Header';
import { ScaledSheet } from 'react-native-size-matters';
import { Themes } from '../../assets/themes';
import ItemServiceAccount from './component/ItemServiceAccount';
import Images from '../../assets/images';
import { TAB_NAVIGATION_ROOT } from '../../navigation/config/routes';
import { useDispatch } from 'react-redux';
import { store } from '../../app-redux/store';
import { userInfoActions } from '../../app-redux/slices/userInfoSlice';
import { removeAllCart } from '../../app-redux/slices/cartSlice';

const listService = [
  {
    id: 1,
    title: 'Profile',
    icon: Images.icon.profile,
    navigateName: TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.PROFILE,
  },
  {
    id: 2,
    title: 'Order',
    icon: Images.icon.order,
    navigateName: TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.LIST_ORDER,
  },
  {
    id: 3,
    title: 'Address',
    icon: Images.icon.address,
    navigateName: TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ADDRESS,
  },
  // {
  //   id: 4,
  //   title: 'Payment',
  //   icon: Images.icon.payment,
  //   navigateName: TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.PROFILE,
  // },
];

const AccountScreen = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    store.dispatch(userInfoActions.logOut());
    dispatch(removeAllCart());

  };
  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.textHeader}>Account</Text>
      </Header>
      {listService.map((item, index) => (
        <ItemServiceAccount
          key={`${index}`}
          icon={item.icon}
          title={item.title}
          navigateName={item.navigateName}
        />
      ))}
      <TouchableOpacity onPress={() => logOut()} style={styles.item}>
        <Image style={styles.icon} source={Images.icon.back} />
        <Text style={styles.title}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
  },
  textHeader: {
    fontSize: '16@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
  item: {
    width: '100%',
    height: '56@vs',
    flexDirection: 'row',
    paddingLeft: '18@s',
    alignItems: 'center',
  },
  icon: {
    width: '20@s',
    height: '20@vs',
    resizeMode: 'contain',
    marginRight: '18@s',
  },
  title: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
});
export default AccountScreen;
