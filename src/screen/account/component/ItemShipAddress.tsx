import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Themes} from '../../../assets/themes';
import ButtonDefault from '../../../component/button/ButtonDefault';

const ItemShipAddress = (props: any) => {
  const {item} = props;
  const {nameReceiver, streetAddress, phoneNumber} = item || {};
  const editAddress = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.nameReceiver}>{nameReceiver}</Text>
      <Text style={styles.streetAddress}>{streetAddress}</Text>
      <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      <View style={styles.viewButton}>
        <ButtonDefault
          onPress={() => editAddress()}
          title="Edit"
          customStyles={styles.buttonEdit}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '200@vs',
    borderWidth: 1,
    borderColor: Themes.PrimaryColor.blue,
    borderRadius: 5,
    marginTop: '16@vs',
    paddingHorizontal: '24@s',
    paddingVertical: '24@vs',
  },
  nameReceiver: {
    fontSize: '14@ms0.3',
    color: Themes.NeutralColors.Dark,
    fontWeight: '700',
  },
  streetAddress: {
    fontSize: '12@ms0.3',
    fontWeight: '400',
    color: Themes.NeutralColors.grey,
    marginTop: '16@vs',
  },
  phoneNumber: {
    fontSize: '12@ms0.3',
    fontWeight: '400',
    color: Themes.NeutralColors.grey,
    marginTop: '16@vs',
  },
  viewButton: {
    flexDirection: 'row',
  },
  buttonEdit: {
    width: '77@s',
    marginTop: '16@vs',
  },
});

export default ItemShipAddress;
