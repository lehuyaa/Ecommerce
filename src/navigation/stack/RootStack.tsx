import React from 'react'
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { RootState } from '../../redux/reducer';

const RootStack = () => {
    const { currentUser } = useSelector((state: RootState) => state);

    if (currentUser.loggedIn) {
        return <AppStack />;
    }
    return <AuthStack />;
}

export default RootStack
