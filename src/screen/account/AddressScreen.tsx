import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {getAllAddressById} from '../../api/modules/api-app/address';
import {store} from '../../app-redux/store';
import Images from '../../assets/images';
import {Themes} from '../../assets/themes';
import ButtonDefault from '../../component/button/ButtonDefault';
import Header from '../../component/header/Header';
import LoadingScreen from '../../component/LoadingScreen';
import ItemShipAddress from './component/ItemShipAddress';

const AddressScreen = () => {
  const navigation = useNavigation();
  const [listAddress, setListAddress] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const isFocus = useIsFocused();

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
  return (
    <View style={styles.container}>
      {loading && <LoadingScreen />}
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Images.icon.back} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Address</Text>
      </Header>
      <View style={styles.viewMain}>
        <FlatList
          data={listAddress}
          renderItem={({item}) => <ItemShipAddress item={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.viewButton}>
        <ButtonDefault title={'Add Address'} onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
  },
  textHeader: {
    fontSize: '16@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
  iconHeader: {
    width: '6@s',
    height: '12@vs',
    resizeMode: 'contain',
    marginRight: '21@s',
  },
  viewMain: {
    paddingHorizontal: '16@s',
  },
  viewButton: {
    paddingHorizontal: '16@s',
    position: 'absolute',
    width: '100%',
    bottom: '65@vs',
  },
});

export default AddressScreen;
