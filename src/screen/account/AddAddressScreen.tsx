import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import Header from '../../component/header/Header';
import { windowWidth } from '../../utilities/size';
import DropDown from './component/DropDown';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputForm from '../../component/form/InputForm';
import ButtonDefault from '../../component/button/ButtonDefault';
import LoadingScreen from '../../component/LoadingScreen';
import { addAddress } from '../../api/modules/api-app/address';
import { store } from '../../app-redux/store';

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const dataCity = require('./../../assets/VietNamData.json');
  const [selectedItem, setSelectedItem] = useState<any>(dataCity[0]);
  const [district, setDistrict] = useState<any>(
    Object.values(selectedItem.value)[0],
  );
  const [loading, setLoading] = useState<boolean>(false);
  const { userInfo } = store.getState();

  const addAddressModel = yup.object().shape({
    nameReceiver: yup.string().required('Name Receiver field is required'),
    streetAddress: yup.string().required('Street Address field is required'),
    phoneNumber: yup.string().required('Phone Number field is required'),
  });
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(addAddressModel),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;
  const [hideDropDownCity, setHideDropDownCity] = useState<boolean>(false);
  const [hideDropDownDistrict, setHideDropDownDistrict] =
    useState<boolean>(false);

  const addAddressFunc = async (data: any) => {
    const params = {
      nameReceiver: data.nameReceiver,
      streetAddress: data.streetAddress,
      phoneNumber: data.phoneNumber,
      city: `${district}-${selectedItem?.text}`,
      user_id: userInfo?.user?.id,
      zipCode: '8000',
    };
    setLoading(true);

    try {
      const response = await addAddress(params);
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
    }
  };
  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        if (item.text) {
          setSelectedItem(item);
          setHideDropDownCity(false);
        } else {
          setDistrict(item);
          setHideDropDownDistrict(false);
        }
      }}
      activeOpacity={0.5}
      style={styles.item}>
      <Text style={styles.title}>{item.text || item}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {loading && <LoadingScreen />}
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Images.icon.back} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Add Address</Text>
      </Header>
      <ScrollView
        contentContainerStyle={styles.contentScroll}
        style={styles.viewMain}>
        <View style={styles.viewInputCity}>
          <Text style={styles.label}>City</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setHideDropDownCity(!hideDropDownCity)}
            style={styles.viewCityValue}>
            <Text style={styles.city}>{selectedItem?.text}</Text>
            <Image source={Images.icon.dropdown} style={styles.iconDropDown} />
          </TouchableOpacity>
          {hideDropDownCity ? (
            <View style={styles.viewDropDownCity}>
              <FlatList
                data={dataCity}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.text}
              />
            </View>
          ) : null}
        </View>
        <DropDown
          setHideDropDown={setHideDropDownDistrict}
          hideDropDown={hideDropDownDistrict}
          value={district}
          setSelectedItem={setDistrict}
          data={Object.values(selectedItem.value)}
          label="District"
        />
        <InputForm
          name={'nameReceiver'}
          form={form}
          label="Name Receiver"
          errorMessage={errors.nameReceiver?.message}
          customContainerStyle={styles.inputForm}
        />
        <InputForm
          name={'streetAddress'}
          form={form}
          label="Street Address"
          errorMessage={errors.streetAddress?.message}
          customContainerStyle={styles.inputForm}
        />
        <InputForm
          name={'phoneNumber'}
          form={form}
          label="Phone Number"
          errorMessage={errors.phoneNumber?.message}
          customContainerStyle={styles.inputForm}
        />
        <View style={styles.viewButton}>
          <ButtonDefault
            title={'Add Address'}
            onPress={handleSubmit(addAddressFunc)}
          />
        </View>
      </ScrollView>
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
    paddingTop: '16@vs',
  },
  viewInputCity: {
    marginBottom: '24@vs',
  },
  viewCityValue: {
    width: windowWidth - scale(32),
    height: '48@vs',
    borderWidth: 1,
    borderColor: Themes.NeutralColors.light,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '16@s',
    justifyContent: 'space-between',
  },
  iconDropDown: {
    resizeMode: 'contain',
    width: '12@s',
    height: '12@vs',
  },
  city: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.grey,
  },
  viewDropDownCity: {
    width: windowWidth - scale(32),
    height: '400@vs',
    marginTop: '5@vs',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Themes.NeutralColors.light,
  },
  item: {
    width: windowWidth - scale(32),
    height: '48@vs',
    justifyContent: 'center',
    paddingHorizontal: '16@s',
  },
  title: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.grey,
  },
  label: {
    fontSize: '14@ms0.3',
    color: Themes.NeutralColors.Dark,
    fontWeight: '700',
    marginBottom: '12@vs',
  },
  inputForm: {
    width: '100%',
    height: '48@vs',
    borderColor: Themes.NeutralColors.light,
  },
  contentScroll: {
    paddingBottom: verticalScale(300),
  },
  viewButton: {
    width: '100%',
  },
});

export default AddAddressScreen;
