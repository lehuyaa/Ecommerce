import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Images from '../../assets/images';
import {Themes} from '../../assets/themes';
import ButtonDefault from '../../component/button/ButtonDefault';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';

const OrderSuccessScreen = (props: any) => {
  const navigation = useNavigation();

  const backToOrderFunc = () => {
    navigation.navigate(TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.LIST_ORDER);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={Images.icon.successIcon} />
      <Text style={styles.successText}>Success</Text>
      <Text style={styles.thankText}>thank you for shopping</Text>
      <View style={styles.viewButton}>
        <ButtonDefault
          title={'Back To Order'}
          onPress={() => backToOrderFunc()}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: '100@s',
    height: '100@vs',
  },
  successText: {
    fontSize: '24@ms0.3',
    fontWeight: 'bold',
    color: Themes.NeutralColors.Dark,
  },
  thankText: {
    fontSize: '12@vs',
    fontWeight: '400',
    marginTop: '8@vs',
    color: Themes.NeutralColors.Dark,
  },
  viewButton: {
    width: '100%',
    paddingHorizontal: '16@s',
    marginVertical: '16@vs',
  },
});

export default OrderSuccessScreen;
