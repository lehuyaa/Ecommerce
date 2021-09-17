import React from 'react';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Button,
} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import IconAdd from '../../assets/icons/IconAdd';
import IconBack from '../../assets/icons/IconBack';
import IconTrash from '../../assets/icons/IconTrash';
import {Themes} from '../../assets/themes';
import ButtonIcon from '../../component/button/ButtonIcon';
import Header from '../../component/header/Header';

const AddressItem = () => (
  <TouchableOpacity style={styles.address}>
    <Text style={styles.name}>Priscekila</Text>
    <Text style={styles.textDetail}>
      3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States
    </Text>
    <Text style={styles.textDetail}>+99 1234567890</Text>
    <View style={styles.containerButton}>
      <ButtonIcon
        customStyle={styles.editButton}
        children={<Text style={styles.editText}>Edit</Text>}
      />

      <ButtonIcon
        customStyle={styles.deleteButton}
        children={
          <IconTrash height={verticalScale(24)} width={verticalScale(24)} />
        }
      />
    </View>
  </TouchableOpacity>
);

const ShippingAddress = () => {
  return (
    <View style={styles.container}>
      <Header customStyle={styles.customHeader}>
        <View style={styles.leftHeader}>
          <ButtonIcon
            children={
              <IconBack height={verticalScale(24)} width={verticalScale(24)} />
            }
          />
          <Text style={styles.textHeader}>Ship To</Text>
        </View>

        <ButtonIcon
          children={
            <IconAdd height={verticalScale(24)} width={verticalScale(24)} />
          }
        />
      </Header>

      <FlatList
        style={{flex: 1, marginBottom: 20}}
        data={[1, 2, 3, 4]}
        renderItem={AddressItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index + ''}
      />
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
});
export default ShippingAddress;
