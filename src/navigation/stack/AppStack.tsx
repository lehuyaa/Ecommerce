import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationConfigs from '../config/options';
import { APP_ROUTE, TAB_NAVIGATION_ROOT } from '../config/routes';
import HomeScreen from '../../screen/home/HomeScreen';
import ExploreScreen from '../../screen/explore/ExploreScreen';
import CartScreen from '../../screen/cart/CartScreen';
import OfferScreen from '../../screen/offer/OfferScreen';
import AccountScreen from '../../screen/account/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs} >
        <Stack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT} component={HomeScreen} />
    </Stack.Navigator>
);
const ExploreStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs} >
        <Stack.Screen name={TAB_NAVIGATION_ROOT.EXPLORE_ROUTE.ROOT} component={ExploreScreen} />
    </Stack.Navigator>
);

const CartStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs} >
        <Stack.Screen name={TAB_NAVIGATION_ROOT.CART_ROUTE.ROOT} component={CartScreen} />
    </Stack.Navigator>
);

const OfferStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs} >
        <Stack.Screen name={TAB_NAVIGATION_ROOT.OFFER_ROUTE.ROOT} component={OfferScreen} />
    </Stack.Navigator>
)

const AccountStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs} >
        <Stack.Screen name={TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ROOT} component={AccountScreen} />
    </Stack.Navigator>
)

const AppTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Explore" component={ExploreStack} />
            <Tab.Screen name="Cart" component={CartStack} />
            <Tab.Screen name="Offer" component={OfferStack} />
            <Tab.Screen name="Account" component={AccountStack} />
        </Tab.Navigator>

    );
}

const AppStack = () => (
    <Stack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
        <Stack.Screen name={APP_ROUTE.MAIN_TAB} component={AppTab} />
    </Stack.Navigator>
);

export default AppStack;