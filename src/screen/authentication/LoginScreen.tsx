import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Themes } from '../../assets/themes';
import Images from '../../assets/images';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ButtonDefault from '../../component/button/ButtonDefault';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { AUTHENTICATE_ROUTE } from '../../navigation/config/routes';
import * as yup from 'yup';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import IconLeftInputForm from '../../component/form/IconLeftInputForm';
import { APP_ROUTE, TAB_NAVIGATION_ROOT } from '../../navigation/config/routes';


const LoginScreen = () => {
    const navigation = useNavigation();

    const loginSchema = yup.object().shape({
        email: yup.string().required("Email field is required").email('Email is not correct'),
        password: yup
            .string()
            .required('Password field is required').test('len', 'Must be exactly 6 characters', val => val.length >= 6)
    });


    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginSchema),

    });
    const { handleSubmit, formState: { errors } } = form;

    const login = (data) => {
        console.log('data', data)
        navigation.navigate(APP_ROUTE.MAIN_TAB);
    }

    const goRegisterScreen = () => {
        navigation.navigate(AUTHENTICATE_ROUTE.REGISTER);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={styles.container}>
                <Image source={Images.logo} />
                <Text style={styles.title}>Welcome to Lafyuu</Text>
                <Text style={styles.smallTittle}>Sign in to continue</Text>
                <View style={styles.viewInput}>
                    <IconLeftInputForm
                        name={'email'}
                        form={form}
                        label="Your Email"
                        icon={<Fontisto name="email" size={25} color={errors.email?.message ? Themes.NeutralColors.grey : Themes.PrimaryColor.blue} />}
                        errorMessage={errors.email?.message}
                    />
                    <IconLeftInputForm
                        name={'password'}
                        form={form}
                        label="Password"
                        icon={<SimpleLineIcons name="lock" size={25} color={errors.password?.message ? Themes.NeutralColors.grey : Themes.PrimaryColor.blue} />}
                        errorMessage={errors.password?.message}
                        isPassword={true}
                    />
                </View>
                <View style={styles.viewButton}>
                    <ButtonDefault
                        tittle='Sign In'
                        onPress={handleSubmit(login)}
                    />
                </View>
                <View style={styles.viewdoRegister}>
                    <Text style={styles.text}>Don’t have a account?</Text>
                    <TouchableOpacity onPress={goRegisterScreen}>
                        <Text style={styles.colorText}> Register</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = ScaledSheet.create({
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
    },
    viewInput: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 28,
    },
    viewButton: {
        marginTop: 16,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
    },
    viewdoRegister: {
        flexDirection: 'row',
        marginTop: '50@vs',
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: Themes.NeutralColors.grey,
    },
    colorText: {
        fontSize: 14,
        fontWeight: '700',
        color: Themes.PrimaryColor.blue,
    },
});

export default LoginScreen;