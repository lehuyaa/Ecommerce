import React from 'react'
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useAppSelector } from '../../app-redux/hooks';


const RootStack = () => {

    const { token } = useAppSelector((state) => state.userInfo);
    if (token) {
        return <AppStack />;
    }

    return <AuthStack />;
}

export default RootStack
