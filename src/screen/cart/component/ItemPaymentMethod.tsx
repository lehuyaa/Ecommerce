import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Themes} from '../../../assets/themes';

const ItemPaymentMethod = props => {
  const {isChoice, item} = props;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isChoice
            ? Themes.NeutralColors.light
            : Themes.BackgroundColor.white,
        },
      ]}>
      {item?.icon}
      <Text style={styles.paymentName}>{item?.name}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '56@vs',
    flexDirection: 'row',
    paddingLeft: '19@s',
    alignItems: 'center',
  },
  paymentName: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
  },
});

export default ItemPaymentMethod;
