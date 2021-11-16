import { APP_ROUTE, TAB_NAVIGATION_ROOT } from '../config/routes';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';

import AccountScreen from '../../screen/account/AccountScreen';
import BottomTab from '../component/BottomTab';
import CartScreen from '../../screen/cart/CartScreen';
import ExploreScreen from '../../screen/explore/ExploreScreen';
import FlashSaleScreen from '../../screen/home/FlashSaleScreen';
import HomeScreen from '../../screen/home/HomeScreen';
import Images from '../../assets/images';
import OfferScreen from '../../screen/offer/OfferScreen';
import ProfileScreen from '../../screen/account/ProfileScreen';
import SearchResultScreen from '../../screen/explore/SearchResultScreen';
import ShippingAddress from '../../screen/cart/ShippingAddress';
import { createStackNavigator } from '@react-navigation/stack';
import navigationConfigs from '../config/options';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs} >
        <Stack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME} component={HomeScreen} />
    </Stack.Navigator>
);
const ExploreStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs} >
        <Stack.Screen name={TAB_NAVIGATION_ROOT.EXPLORE_ROUTE.EXPLORE} component={ExploreScreen} />
    </Stack.Navigator>
);

const CartStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs} >
        <Stack.Screen name={TAB_NAVIGATION_ROOT.CART_ROUTE.CART} component={CartScreen} />
    </Stack.Navigator>
);

const OfferStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs} >
        <Stack.Screen name={TAB_NAVIGATION_ROOT.OFFER_ROUTE.OFFER} component={OfferScreen} />
    </Stack.Navigator>
)

const AccountStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs} >
        <Stack.Screen name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ACCOUNT} component={AccountScreen} />
    </Stack.Navigator>
)

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
        icon: Images.icon.explore
    },
    {
        name: TAB_NAVIGATION_ROOT.CART_ROUTE.ROOT,
        title: 'Cart',
        component: CartStack,
        icon: Images.icon.cart
    },
    {
        name: TAB_NAVIGATION_ROOT.OFFER_ROUTE.ROOT,
        title: 'Offer',
        component: OfferStack,
        icon: Images.icon.offer
    },
    {
        name: TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ROOT,
        title: 'Account',
        component: AccountStack,
        icon: Images.icon.account
    },
];


const AppTab = () => {
    return (
        <Tab.Navigator tabBar={(props: BottomTabBarProps) => <BottomTab {...props} />} initialRouteName='Cart'>
            {ArrayTabs.map((item, index) => (
                <Tab.Screen key={`${index}`} options={{ ...item }} {...item} />
            ))}
        </Tab.Navigator>

    );
}

const AppStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
        <Stack.Screen name={APP_ROUTE.MAIN_TAB} component={AppTab} />
        <Stack.Screen name={APP_ROUTE.FLASH_SALE} component={FlashSaleScreen} />
        <Stack.Screen name={APP_ROUTE.SHIPPING_ADDRESS} component={ShippingAddress} />
        <Stack.Screen name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.PROFILE} component={ProfileScreen} />
        <Stack.Screen name={APP_ROUTE.SEARCH_RESULT} component={SearchResultScreen} />
    </Stack.Navigator>
);

export default AppStack;