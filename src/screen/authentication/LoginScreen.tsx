import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Themes } from '../../assets/themes';
import Images from '../../assets/images';
const LoginScreen = () => {

    return (
        <View style={styles.container}>
            <Image source={Images.logo} />
            <Text style={styles.title}>Welcome to Lafyuu</Text>
            <Text style={styles.smallTittle}>Sign in to continue</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.BackgroundColor.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 16,
    },
    smallTittle: {
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 8
    }
});

export default LoginScreen;