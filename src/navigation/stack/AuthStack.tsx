import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationConfigs from '../config/options';
import { AUTHENTICATE_ROUTE } from '../config/routes';
import LoginScreen from '../../screen/authentication/LoginScreen';
import RegisterScreen from '../../screen/authentication/RegisterScreen';


const MainStack = createStackNavigator();

const AuthStack = () => (
    <MainStack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
        <MainStack.Screen name={AUTHENTICATE_ROUTE.LOGIN} component={LoginScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.REGISTER} component={RegisterScreen} />
    </MainStack.Navigator>
);

export default AuthStack;
