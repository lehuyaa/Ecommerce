import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Themes } from '../../../assets/themes';

interface ItemOrderProps {
    orderId?: number;
}

const ItemInfo = (props: any) => {
    const {title, content} = props;
    <View style={styles.itemInfo}>

    </View>
}

const ItemOrder = (props: ItemOrderProps) => {
    const {orderId} = props || {};
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <Text style={styles.title}>Order Id: {orderId}</Text>
    </TouchableOpacity>
  );
};


const styles = ScaledSheet.create({
  container: {
      width: '100%',
      height: '200@vs',
      borderWidth: 1,
      borderColor: Themes.NeutralColors.light,
      borderRadius: 5,
      marginBottom: '16@vs',
      paddingTop: '16@vs',
      paddingHorizontal: '16@s',
  },
  title: {
      fontSize: '14@ms0.3',
      fontWeight: '700',
      color: Themes.NeutralColors.Dark,
  },
  itemInfo: {
      flexDirection: 'row',
  }
});

export default ItemOrder;
