import * as yup from 'yup';

import {Controller, FormProvider, useForm} from 'react-hook-form';
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {AUTHENTICATE_ROUTE} from '../../navigation/config/routes';
import ButtonDefault from '../../component/button/ButtonDefault';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import IconLeftInputForm from '../../component/form/IconLeftInputForm';
import Images from '../../assets/images';
import LoadingScreen from '../../component/LoadingScreen';
import {ScaledSheet} from 'react-native-size-matters';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Themes} from '../../assets/themes';
import {register} from '../../api/modules/api-app/authenticate';
import {useNavigation} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const loginSchema = yup.object().shape({
    username: yup.string().required('UserName field is required'),
    email: yup
      .string()
      .required('Email field is required')
      .email('Email is not correct'),
    password: yup
      .string()
      .required('Password field is required')
      .test('len', 'Must be exactly 6 characters', val => val.length === 6),
    passwordAgain: yup
      .string()
      .required('Password Again field is required')
      .oneOf([yup.ref('password'), null], 'Password do not match'),
  });

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });
  const {
    handleSubmit,
    formState: {errors},
  } = form;
  const registerFunc = async data => {
    const param = {
      username: data.username,
      email: data.email,
      password: data.password,
      role: ['user'],
    };
    console.log('data', data);
    setLoading(true);

    try {
      const response = await register(param);
      setLoading(false);
      navigation.navigate(AUTHENTICATE_ROUTE.LOGIN);
      console.log('response', response);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  const goLoginScreen = () => {
    navigation.navigate(AUTHENTICATE_ROUTE.LOGIN);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {loading && <LoadingScreen />}
        <Image source={Images.logo} />
        <Text style={styles.title}>Let’s Get Started</Text>
        <Text style={styles.smallTittle}>Create an new account</Text>
        <View style={styles.viewInput}>
          <ScrollView>
            <IconLeftInputForm
              name={'username'}
              form={form}
              label="UserName"
              icon={
                <Feather
                  name="user"
                  size={25}
                  color={
                    errors.fullname?.message
                      ? Themes.NeutralColors.grey
                      : Themes.PrimaryColor.blue
                  }
                />
              }
              errorMessage={errors.fullname?.message}
            />
            <IconLeftInputForm
              name={'email'}
              form={form}
              label="Your Email"
              icon={
                <Fontisto
                  name="email"
                  size={25}
                  color={
                    errors.email?.message
                      ? Themes.NeutralColors.grey
                      : Themes.PrimaryColor.blue
                  }
                />
              }
              errorMessage={errors.email?.message}
            />
            <IconLeftInputForm
              name={'password'}
              form={form}
              label="Password"
              icon={
                <SimpleLineIcons
                  name="lock"
                  size={25}
                  color={
                    errors.password?.message
                      ? Themes.NeutralColors.grey
                      : Themes.PrimaryColor.blue
                  }
                />
              }
              errorMessage={errors.password?.message}
              isPassword={true}
            />
            <IconLeftInputForm
              name={'passwordAgain'}
              form={form}
              label="Password Again"
              icon={
                <SimpleLineIcons
                  name="lock"
                  size={25}
                  color={
                    errors.passwordAgain?.message
                      ? Themes.NeutralColors.grey
                      : Themes.PrimaryColor.blue
                  }
                />
              }
              errorMessage={errors.passwordAgain?.message}
              isPassword={true}
            />
          </ScrollView>
        </View>
        <View style={styles.viewButton}>
          <ButtonDefault title="Sign Up" onPress={handleSubmit(registerFunc)} />
        </View>
        <View style={styles.viewdoLogin}>
          <Text style={styles.text}>have a account?</Text>
          <TouchableOpacity onPress={goLoginScreen}>
            <Text style={styles.colorText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

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
