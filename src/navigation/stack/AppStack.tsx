import {APP_ROUTE, TAB_NAVIGATION_ROOT} from '../config/routes';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';

import AccountScreen from '../../screen/account/AccountScreen';
import BottomTab from '../component/BottomTab';
import CartScreen from '../../screen/cart/CartScreen';
import ExploreScreen from '../../screen/explore/ExploreScreen';
import FlashSaleScreen from '../../screen/home/FlashSaleScreen';
import HomeScreen from '../../screen/home/HomeScreen';
import AddressScreen from '../../screen/account/AddressScreen';
import AddAddressScreen from '../../screen/account/AddAddressScreen';
import Images from '../../assets/images';
import OfferScreen from '../../screen/offer/OfferScreen';
import ProductDetailsScreen from '../../screen/home/ProductDetailsScreen';
import ProfileScreen from '../../screen/account/ProfileScreen';
import SearchResultScreen from '../../screen/explore/SearchResultScreen';
import ShippingAddress from '../../screen/cart/ShippingAddress';
import {createStackNavigator} from '@react-navigation/stack';
import navigationConfigs from '../config/options';
import PaymentMethod from '../../screen/cart/PaymentMethod';
import OrderSuccessScreen from '../../screen/cart/OrderSuccessScreen';
import OrderDetails from '../../screen/account/OrderDetails';
import SortScreen from '../../screen/explore/SortScreen';
import ShopSellerScreen from '../../screen/account/ShopSellerScreen';
import ListOrderScreen from '../../screen/account/ListOrderScreen';
import Rating from '../../screen/home/Rating';
import NewReview from '../../screen/home/NewReview';
import Notification from '../../screen/home/Notification';
import Offer from '../../screen/home/Offer';
import Feed from '../../screen/home/Feed';
import Activity from '../../screen/home/Activity';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import InforOrder from '../../screen/cart/InforOrder';
const HomeStack = () => (
  <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME}
      component={HomeScreen}
    />
  </Stack.Navigator>
);
const ExploreStack = () => (
  <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.EXPLORE_ROUTE.EXPLORE}
      component={ExploreScreen}
    />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.CART_ROUTE.CART}
      component={CartScreen}
    />
  </Stack.Navigator>
);

const OfferStack = () => (
  <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.OFFER_ROUTE.OFFER}
      component={OfferScreen}
    />
  </Stack.Navigator>
);

const AccountStack = () => (
  <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ACCOUNT}
      component={AccountScreen}
    />
  </Stack.Navigator>
);

const ArrayTabs = [
  {
    name: TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT,
    title: 'Home',
    component: HomeStack,
    icon: Images.icon.home,
  },
  {
    name: TAB_NAVIGATION_ROOT.EXPLORE_ROUTE.ROOT,
    title: 'Explore',
    component: ExploreStack,
    icon: Images.icon.explore,
  },
  {
    name: TAB_NAVIGATION_ROOT.CART_ROUTE.ROOT,
    title: 'Cart',
    component: CartStack,
    icon: Images.icon.cart,
  },
  // {
  //   name: TAB_NAVIGATION_ROOT.OFFER_ROUTE.ROOT,
  //   title: 'Offer',
  //   component: OfferStack,
  //   icon: Images.icon.offer,
  // },
  {
    name: TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ROOT,
    title: 'Account',
    component: AccountStack,
    icon: Images.icon.account,
  },
];

const AppTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <BottomTab {...props} />}
      initialRouteName="Cart">
      {ArrayTabs.map((item, index) => (
        <Tab.Screen key={`${index}`} options={{...item}} {...item} />
      ))}
    </Tab.Navigator>
  );
};

const AppStack = () => (
  <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
    <Stack.Screen name={APP_ROUTE.MAIN_TAB} component={AppTab} />
    <Stack.Screen name={APP_ROUTE.FLASH_SALE} component={FlashSaleScreen} />
    <Stack.Screen
      name={APP_ROUTE.SHIPPING_ADDRESS}
      component={ShippingAddress}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.PROFILE}
      component={ProfileScreen}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.LIST_ORDER}
      component={ListOrderScreen}
    />
    <Stack.Screen
      name={APP_ROUTE.SEARCH_RESULT}
      component={SearchResultScreen}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.PRODUCT_DETAILS}
      component={ProductDetailsScreen}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.RATING}
      component={Rating}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.NEW_REVIEW}
      component={NewReview}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.NOTIFICATION}
      component={Notification}
    />

    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.OFFER}
      component={Offer}
    />
    <Stack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.FEED} component={Feed} />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.ACTIVITY}
      component={Activity}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ADDRESS}
      component={AddressScreen}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ADDADDRESS}
      component={AddAddressScreen}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.CART_ROUTE.PAYMENT_METHOD}
      component={PaymentMethod}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.CART_ROUTE.ORDER_SUCCESS}
      component={OrderSuccessScreen}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ORDER_DETAILS}
      component={OrderDetails}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.EXPLORE_ROUTE.SORT_SCREEN}
      component={SortScreen}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.SHOP_SELLER}
      component={ShopSellerScreen}
    />
    <Stack.Screen
      name={TAB_NAVIGATION_ROOT.CART_ROUTE.INFO_ORDER}
      component={InforOrder}
    />
  </Stack.Navigator>
);

export default AppStack;
