import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import IconTrash from '../../../assets/icons/IconTrash';
import {Themes} from '../../../assets/themes';
import ButtonDefault from '../../../component/button/ButtonDefault';
import ButtonIcon from '../../../component/button/ButtonIcon';

const areEqual = (prevProps: any, nextProps: any) =>
  prevProps.isChoice === nextProps.isChoice;

const ItemShipAddress = (props: any) => {
  const {item, isChoice, onPress} = props;
  const {nameReceiver, streetAddress, phoneNumber, city, district} = item || {};
  const editAddress = () => {};
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.container,
        {
          borderColor: isChoice
            ? Themes.PrimaryColor.blue
            : Themes.NeutralColors.light,
        },
      ]}>
      <Text style={styles.nameReceiver}>{nameReceiver}</Text>
      <Text
        style={
          styles.streetAddress
        }>{`${streetAddress} - ${district} - ${city}`}</Text>
      <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      <View style={styles.viewButton}>
        <ButtonDefault
          onPress={() => editAddress()}
          title="Edit"
          customStyles={styles.buttonEdit}
        />
        <ButtonIcon
          children={
            <IconTrash height={verticalScale(24)} width={verticalScale(24)} />
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '200@vs',
    borderWidth: 1,
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
    alignItems: 'center',
    marginTop: '16@vs',
  },
  buttonEdit: {
    width: '77@s',
    marginRight: '30@s',
  },
});

export default React.memo(ItemShipAddress, areEqual);
