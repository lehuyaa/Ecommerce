import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image as DefaultImage,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {starImage} from '../../../utilities/staticData';
import {convertRate} from '../../../utilities/format';
import Image from '../../../assets/images';

const Review = ({item}) => {
  return (
    <View style={styles.review}>
      <View style={styles.ratingView}>
        <DefaultImage
          style={[styles.star, {marginTop: 0, marginRight: 8}]}
          source={starImage[convertRate(item?.rate) - 1]}
        />
        <Text style={styles.textStar}>4.5</Text>
        <Text style={styles.reviewQuantity}>5 reviews</Text>
      </View>

      <View style={styles.profile}>
        <DefaultImage style={styles.avatar} source={Image.avatar} />
        <View>
          <Text style={[styles.textReview, {marginRight: 8}]}>
            James Lawson
          </Text>
          <DefaultImage
            style={[styles.star, {marginTop: 4, marginRight: 8}]}
            source={starImage[convertRate(item?.rate) - 1]}
          />
        </View>
      </View>
      <Text style={styles.reviewContent}>
        air max are always very comfortable fit, clean and just perfect in every
        way. just the box was too small and scrunched the sneakers up a little
        bit, not sure if the box was always this small but the 90s are and will
        always be one of my favorites.
      </Text>
      <View style={styles.profile}>
        <DefaultImage
          style={styles.reviewImage}
          source={{
            uri:
              item?.productImage ||
              'https://laptoptcc.com/wp-content/uploads/2021/04/AZZ02208-DELL-PRECISION-5510-LAPTOPTCC-1-1.jpg',
          }}
        />
        <DefaultImage
          style={styles.reviewImage}
          source={{
            uri:
              item?.productImage ||
              'https://laptoptcc.com/wp-content/uploads/2021/04/AZZ02208-DELL-PRECISION-5510-LAPTOPTCC-1-1.jpg',
          }}
        />
        <DefaultImage
          style={styles.reviewImage}
          source={{
            uri:
              item?.productImage ||
              'https://laptoptcc.com/wp-content/uploads/2021/04/AZZ02208-DELL-PRECISION-5510-LAPTOPTCC-1-1.jpg',
          }}
        />
      </View>
      <Text style={styles.dateReview}>December 10, 2016</Text>
    </View>
  );
};

export default Review;

const styles = ScaledSheet.create({
  star: {
    resizeMode: 'contain',
    width: '100@s',
    height: '16@vs',
    marginTop: '10@vs',
  },
  review: {paddingHorizontal: '16@s'},
  reviewProduct: {flexDirection: 'row', justifyContent: 'space-between'},
  textReview: {
    fontSize: '14@vs',
    lineHeight: '21@vs',
    fontWeight: '700',
    color: '#223263',
  },
  textSeeMore: {fontSize: '14@vs', lineHeight: '21@vs', color: '#40BFFF'},
  ratingView: {flexDirection: 'row', alignItems: 'center', marginTop: 16},
  textStar: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9098B1',
    marginRight: 8,
  },
  reviewQuantity: {fontSize: 14, color: '#9098B1'},
  profile: {flexDirection: 'row', marginTop: 16},
  avatar: {
    width: '72@s',
    height: '72@vs',
    borderRadius: '36@s',
    marginRight: '16@s',
  },
  reviewContent: {
    marginVertical: '16@s',
    textAlign: 'justify',
    color: '#9098B1',
  },
  reviewImage: {
    width: '72@s',
    height: '72@vs',
    resizeMode: 'contain',
    borderRadius: 4,
    marginRight: '12@s',
  },
  dateReview: {marginTop: '16@vs', fontSize: '10@vs', color: '#9098B1'},
});
