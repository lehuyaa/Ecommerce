import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Themes} from '../../assets/themes';

const ItemProduct = props => {
  const {image, name, price, oldPrice, percent, style} = props;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              image ||
              'https://lh3.googleusercontent.com/jKndbh-fBd-5W8n_yoN14NSHxkcjqBWiRAvG23pir2zRSDDTmH3CCGqvx8Oy6clWFN5ky7Ha5cZILkWHOCc=rw-w300',
          }}
        />
        <Text style={styles.name} numberOfLines={2}>
          {name || 'FS - Nike Air Max 270 React...'}
        </Text>
        <Text style={styles.price}>{price || '$299,43'}</Text>
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
    width: '140@s',
    height: '210@vs',
    borderWidth: 1,
    borderColor: Themes.NeutralColors.light,
    marginTop: '18@vs',
    borderRadius: 5,
    paddingTop: '16@vs',
    paddingLeft: '16@s',
    paddingRight: '16@s',
    paddingBottom: '16@vs',
    marginRight: '16@s',
  },
  image: {
    width: '110@s',
    height: '100@vs',
    borderRadius: 5,
    resizeMode: 'contain',
  },
  name: {
    fontSize: '12@ms',
    marginTop: '8@vs',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
  price: {
    fontSize: '12@ms',
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

export default ItemProduct;
