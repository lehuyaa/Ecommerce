import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Button,
  ScrollView,
} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {getAllAddressById} from '../../api/modules/api-app/address';
import {store} from '../../app-redux/store';
import IconAdd from '../../assets/icons/IconAdd';
import IconBack from '../../assets/icons/IconBack';
import {Themes} from '../../assets/themes';
import ButtonDefault from '../../component/button/ButtonDefault';
import ButtonIcon from '../../component/button/ButtonIcon';
import Header from '../../component/header/Header';
import LoadingScreen from '../../component/LoadingScreen';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import ItemShipAddress from '../account/component/ItemShipAddress';

const ShippingAddress = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const isFocus = useIsFocused();
  const navigation = useNavigation();

  const [listAddress, setListAddress] = useState<any>([]);
  const [address, setAddress] = useState<any>({});
  const {userInfo} = store.getState();
  const getAllAddressFunc = async () => {
    setLoading(true);

    try {
      const response = await getAllAddressById(userInfo?.user?.id);
      setLoading(false);
      setListAddress(response?.data);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isFocus) {
      getAllAddressFunc();
    }
  }, [isFocus]);
  const choiceAddress = item => {
    setAddress(item);
  };
  return (
    <View style={styles.container}>
      {loading && <LoadingScreen />}

      <Header customStyle={styles.customHeader}>
        <View style={styles.leftHeader}>
          <ButtonIcon
            onPress={() => {
              navigation.goBack();
            }}
            children={
              <IconBack height={verticalScale(24)} width={verticalScale(24)} />
            }
          />
          <Text style={styles.textHeader}>Ship To</Text>
        </View>

        <ButtonIcon
          onPress={() =>
            navigation.navigate(TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ADDADDRESS)
          }
          children={
            <IconAdd height={verticalScale(24)} width={verticalScale(24)} />
          }
        />
      </Header>

      <ScrollView
        contentContainerStyle={styles.contentScroll}
        style={styles.viewMain}>
        {listAddress.map(item => (
          <ItemShipAddress
            key={item.id}
            item={item}
            isChoice={item.id === address?.id}
            onPress={() => choiceAddress(item)}
          />
        ))}
      </ScrollView>
      <View style={styles.viewButton}>
        <ButtonDefault
          title={'Next'}
          onPress={() =>
            // navigation.navigate(TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ADDADDRESS)
            console.log('address', address)
          }
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Themes.BackgroundColor.white,
    flex: 1,
  },
  customHeader: {
    justifyContent: 'space-between',
  },
  textHeader: {
    fontWeight: '700',
    fontSize: '16@vs',
    color: Themes.NeutralColors.Dark,
    marginLeft: '12@s',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    marginTop: '20@vs',
    marginHorizontal: '16@s',
    height: '200@vs',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Themes.PrimaryColor.blue,
    paddingHorizontal: '16@s',
    paddingVertical: '16@vs',
    justifyContent: 'space-between',
  },
  containerButton: {
    height: '40@vs',
    flexDirection: 'row',
  },
  editButton: {
    height: '100%',
    width: '80@s',
    backgroundColor: Themes.PrimaryColor.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '12@s',
  },
  editText: {
    fontSize: '14@vs',
    color: Themes.BackgroundColor.white,
    fontWeight: '700',
  },
  deleteButton: {
    height: '100%',
    width: '80@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Themes.NeutralColors.grey,
  },
  name: {
    fontSize: '14@vs',
    color: Themes.NeutralColors.Dark,
    fontWeight: '700',
    lineHeight: '21@vs',
  },
  textDetail: {
    fontSize: '12@vs',
    color: Themes.NeutralColors.grey,
    lineHeight: '21@vs',
  },
  viewMain: {
    paddingHorizontal: '16@s',
    flex: 1,
  },
  contentScroll: {
    paddingBottom: '100@vs',
  },
  viewButton: {
    paddingHorizontal: '16@s',
    position: 'absolute',
    width: '100%',
    bottom: '30@vs',
  },
});
export default ShippingAddress;
