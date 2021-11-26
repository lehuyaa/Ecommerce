import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Themes} from '../../../assets/themes';
import ItemCart from '../../../component/item/ItemCart';

const ItemShopCart = (props: any) => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewInfoSeller}>
        <Text style={styles.text}>{item.listSeller[0].nameSeller}</Text>
        <TouchableOpacity>
          <Text style={styles.text}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewListProduct}>
        {item.listSeller.map(item => (
          <ItemCart key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {},
  viewListProduct: {},
  viewInfoSeller: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: '14@ms0.3',
    color: Themes.NeutralColors.Dark,
    fontWeight: '700',
    marginBottom: '15@vs',
  },
});

export default ItemShopCart;
