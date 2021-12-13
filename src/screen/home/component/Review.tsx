import React from 'react';
import {
  Text,
  View,
  Image as DefaultImage,
} from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import { starImage } from '../../../utilities/staticData';
import Image from '../../../assets/images';
import { Themes } from '../../../assets/themes';

const Review = (props: any) => {
  const { item, itemReview = {} } = props;
  console.log('itemReview', itemReview)
  return (
    <View style={styles.review}>

      <View style={styles.profile}>
        <DefaultImage style={styles.avatar} source={Image.avatar} />
        <View>
          <Text style={[styles.textReview, { marginRight: scale(8) }]}>
            {itemReview?.user?.username}
          </Text>
          <DefaultImage
            style={[styles.star, { marginTop: verticalScale(4), marginRight: scale(8) }]}
            source={starImage[itemReview?.starNumber - 1]}
          />
        </View>
      </View>
      <Text style={styles.reviewContent}>
        {itemReview?.content}
      </Text>
      {/* <View style={styles.profile}>
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
      </View> */}
      <Text style={styles.dateReview}>{itemReview?.createdTime}</Text>
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
  review: {
    paddingHorizontal: '16@s'
  },
  reviewProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textReview: {
    fontSize: '14@vs',
    lineHeight: '21@vs',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
  textSeeMore: {
    fontSize: '14@vs',
    lineHeight: '21@vs',
    color: Themes.PrimaryColor.blue,
  },

  profile: {
    flexDirection: 'row',
    marginTop: '16@vs'
  },
  avatar: {
    width: '72@s',
    height: '72@vs',
    borderRadius: '36@s',
    marginRight: '16@s',
  },
  reviewContent: {
    marginVertical: '16@s',
    textAlign: 'justify',
    color: Themes.NeutralColors.grey,
  },
  reviewImage: {
    width: '72@s',
    height: '72@vs',
    resizeMode: 'contain',
    borderRadius: 4,
    marginRight: '12@s',
  },
  dateReview: {
    marginTop: '16@vs',
    fontSize: '10@vs',
    color: Themes.NeutralColors.grey,
  },
});
