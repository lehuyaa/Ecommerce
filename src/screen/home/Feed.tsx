import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image as DefaultImage,
  ScrollView,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Images from '../../assets/images';
import {Themes} from '../../assets/themes';
import Header from '../../component/header/Header';

const Feed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <DefaultImage style={styles.iconHeader} source={Images.icon.back} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.textHeader}>
          Feed
        </Text>
      </Header>

      <ScrollView style={styles.content}>
        {[1, 2, 3, 4, 5].map(item => (
          <TouchableOpacity style={styles.offer} key={`${item}`}>
            <DefaultImage
              source={Images.products.product1}
              style={styles.icon}
            />
            <View style={styles.left}>
              <Text numberOfLines={2} style={styles.title}>
                New Product
              </Text>
              <Text style={styles.contentText} numberOfLines={3}>
                Nike Air Zoom Pegasus 36 Miami - Special For your Activity
              </Text>
              <Text style={styles.date}>April 30, 2014 1:01 PM</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
  },
  iconHeader: {
    width: '6@s',
    height: '12@vs',
    resizeMode: 'contain',
    marginRight: '21@s',
  },
  textHeader: {
    fontSize: '16@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
    marginRight: '20@s',
  },
  content: {flex: 1, paddingVertical: '16@vs'},
  icon: {
    width: '48@s',
    height: '48@vs',
    resizeMode: 'contain',
    marginRight: '16@s',
  },
  offer: {
    marginHorizontal: '16@s',
    marginBottom: '16@s',
    flexDirection: 'row',
  },
  left: {paddingRight: '16@s'},
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: Themes.NeutralColors.Dark,
    marginBottom: '8@vs',
  },
  contentText: {
    fontWeight: '700',
    fontSize: 12,
    color: Themes.NeutralColors.grey,
    marginBottom: '8@vs',
    marginRight: '20@s',
    textAlign: 'left',
  },
  date: {
    fontWeight: '700',
    fontSize: 10,
    color: Themes.NeutralColors.Dark,
    marginBottom: '8@vs',
    marginRight: '20@s',
    textAlign: 'left',
  },
});
