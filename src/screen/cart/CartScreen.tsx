import React from 'react';
import {FlatList, View} from 'react-native';
import {Themes} from '../../assets/themes';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../../component/header/Header';
import {P} from '../../utill/Typography';
import ItemCart from '../../component/item/ItemCart';
import Images from '../../assets/images';

const MockCartData: Array<Cart> = [
  {
    title: 'Nike Air Zoom Pegasus 36 Miami',
    price: '299.36',
    amount: '1',
    cover: Images.products.product1,
    isFavourite: true,
  },
  {
    title: 'Nike Air Zoom Pegasus 36 Miami',
    price: '399.36',
    amount: '1',
    cover: Images.products.product2,
    isFavourite: false,
  },
  {
    title: 'Nike Air Zoom Pegasus 36 Miami',
    price: '299.36',
    amount: '1',
    cover: Images.products.product3,
  },
  {
    title: 'Nike Air Zoom Pegasus 36 Miami',
    price: '399.36',
    amount: '1',
    isFavourite: false,
    cover: Images.products.product4,
  },
];

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Header>
        <P bold color={Themes.NeutralColors.Dark}>
          Your Cart
        </P>
      </Header>
      <View style={styles.contentCart}>
        <View style={styles.listCart}>
            <FlatList
            data={MockCartData}
            renderItem={({item}) => <ItemCart item={item} />}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Themes.BackgroundColor.white,
    flex: 1,
  },
  contentCart: {
    flex: 1,
    paddingVertical: '16@vs',
    paddingHorizontal: '16@s',
    },
  listCart: {height: '240@vs'}
});

export default CartScreen;
