import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Themes } from '../../assets/themes';
import Images from '../../assets/images';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import ButtonDefault from '../../component/button/ButtonDefault';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { AUTHENTICATE_ROUTE } from '../../navigation/config/routes';
import * as yup from 'yup';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import IconLeftInputForm from '../../component/form/IconLeftInputForm';

const RegisterScreen = () => {
    const navigation = useNavigation();

    const loginSchema = yup.object().shape({
        fullname: yup.string().required('FullName field is required'),
        email: yup.string().required("Email field is required").email('Email is not correct'),
        password: yup
            .string()
            .required('Password field is required').test('len', 'Must be exactly 6 characters', val => val.length === 6),
        passwordAgain: yup.string().required('Password Again field is required').oneOf([yup.ref('password'), null], 'Password do not match'),

    });


    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginSchema),

    });
    const { handleSubmit, formState: { errors } } = form;
    const register = (data) => {
        console.log('data', data)
    }

    const goLoginScreen = () => {
        navigation.navigate(AUTHENTICATE_ROUTE.LOGIN);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Image source={Images.logo} />
                <Text style={styles.title}>Let’s Get Started</Text>
                <Text style={styles.smallTittle}>Create an new account</Text>
                <View style={styles.viewInput}>
                    <IconLeftInputForm
                        name={'fullname'}
                        form={form}
                        label="Full Name"
                        icon={<Feather name="user" size={25} color={errors.fullname?.message ? Themes.NeutralColors.grey : Themes.PrimaryColor.blue} />}
                        errorMessage={errors.fullname?.message}
                    />
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
                    <IconLeftInputForm
                        name={'passwordAgain'}
                        form={form}
                        label="Password Again"
                        icon={<SimpleLineIcons name="lock" size={25} color={errors.passwordAgain?.message ? Themes.NeutralColors.grey : Themes.PrimaryColor.blue} />}
                        errorMessage={errors.passwordAgain?.message}
                        isPassword={true}
                    />
                </View>
                <View style={styles.viewButton}>
                    <ButtonDefault
                        tittle='Sign Up'
                        onPress={handleSubmit(register)}
                    />
                </View>
                <View style={styles.viewdoLogin}>
                    <Text style={styles.text}>have a account?</Text>
                    <TouchableOpacity onPress={goLoginScreen}>
                        <Text style={styles.colorText}> Sign In</Text>
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
        fontSize: '16@ms0.3',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: '16@vs',
    },
    smallTittle: {
        fontSize: '12@ms0.3',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '8@vs',
    },
    viewInput: {
        width: '100%',
        paddingHorizontal: '16@s',
        marginTop: '28@vs',
    },
    viewButton: {
        marginTop: '16@vs',
        width: '100%',
        paddingHorizontal: '16@s',
    },
    viewdoLogin: {
        flexDirection: 'row',
        marginTop: '50@vs',
    },
    text: {
        fontSize: '14@ms0.3',
        fontWeight: '400',
        color: Themes.NeutralColors.grey,
    },
    colorText: {
        fontSize: '14@ms0.3',
        fontWeight: '700',
        color: Themes.PrimaryColor.blue,
    },
});
export default RegisterScreen;