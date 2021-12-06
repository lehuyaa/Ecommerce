import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {windowHeight, windowWidth} from '../../utilities/size';

import Images from '../../assets/images';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import {Themes} from '../../assets/themes';
import {useNavigation} from '@react-navigation/native';

const ItemBigProduct = props => {
  const navigation = useNavigation();

  const {image, name, price, oldPrice, percent, style, item} = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.PRODUCT_DETAILS, {
          item,
        })
      }>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.discount}>
          <Text style={styles.oldPrice}>{oldPrice}</Text>
          <Text style={styles.percent}>{percent}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: windowWidth * 0.4,
    maxHeight: '255@vs',
    minHeight: '230@vs',
    borderWidth: 1,
    borderColor: Themes.NeutralColors.light,
    borderRadius: 5,
    paddingTop: '16@vs',
    paddingHorizontal: '16@s',
    paddingBottom: '16@vs',
    marginHorizontal: '10@s',
  },
  image: {
    width: '120@s',
    height: '120@s',
    borderRadius: 5,
    resizeMode: 'contain',
  },
  name: {
    fontSize: '12@ms0.3',
    marginTop: '8@vs',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
  price: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    marginTop: '8@vs',
    color: Themes.PrimaryColor.blue,
  },
  discount: {
    flexDirection: 'row',
    marginTop: '8@vs',
  },
  oldPrice: {
    fontSize: '10@ms0.3',
    fontWeight: '400',
    color: Themes.NeutralColors.grey,
    marginRight: '10@s',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  percent: {
    fontSize: '10@ms0.3',
    fontWeight: '700',
    color: Themes.PrimaryColor.red,
  },
});

export default ItemBigProduct;
