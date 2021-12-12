import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image as DefaultImage,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Images from '../../assets/images';
import {Themes} from '../../assets/themes';
import ButtonDefault from '../../component/button/ButtonDefault';
import Header from '../../component/header/Header';
import {Rating} from 'react-native-ratings';
import IconAdd from '../../assets/icons/IconAdd';
import {launchImageLibrary} from 'react-native-image-picker';

const NewReview = () => {
  const [rate, setRating] = useState(3);
  const [image, setImage] = useState([]);
  const navigation = useNavigation();

  const getImage = async () => {
    await launchImageLibrary(
      {selectionLimit: 0, mediaType: 'photo', quality: 0.5},
      res => {
        const listImg = res?.assets?.map(item => item?.uri, {});
        setImage(img => [...listImg, ...img]);
      },
    );
  };

  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <DefaultImage style={styles.iconHeader} source={Images.icon.back} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.textHeader}>
          Write Review
        </Text>
      </Header>
      <View style={styles.title}>
        <Text style={styles.textTitle}>
          Please write Overall level of satisfaction with your shipping /
          Delivery Service
        </Text>

        <View style={styles.rating}>
          <Rating
            type="custom"
            ratingColor="#FFC833"
            ratingBackgroundColor="#EBF0FF"
            ratingCount={5}
            imageSize={32}
            jumpValue={0.5}
            style={styles.customRating}
            onFinishRating={value => {
              setRating(value);
            }}
          />
          <Text style={styles.rate}>{rate}/5</Text>
        </View>

        <Text style={styles.writeReview}>Write Your Review</Text>

        <TextInput
          multiline
          numberOfLines={5}
          placeholder="Write your review here"
          blurOnSubmit
          style={styles.textInput}
          returnKeyType="done"
        />

        <Text style={styles.writeReview}>Add Photo</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={image}
          renderItem={({item}) => {
            return <Image style={styles.localImage} source={{uri: item}} />;
          }}
          ListFooterComponent={
            <TouchableOpacity style={styles.imgPicker} onPress={getImage}>
              <IconAdd height={24} width={24} />
            </TouchableOpacity>
          }
        />
      </View>
      <View style={styles.viewButton}>
        <ButtonDefault onPress={() => {}} title={'Write Review'} />
      </View>
    </View>
  );
};

export default NewReview;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
  },
  textHeader: {
    fontSize: '16@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
    marginRight: '20@s',
  },
  iconHeader: {
    width: '6@s',
    height: '12@vs',
    resizeMode: 'contain',
    marginRight: '21@s',
  },
  viewButton: {
    paddingHorizontal: '16@s',
    paddingTop: '16@vs',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    height: '100@vs',
  },
  title: {paddingHorizontal: 16, marginTop: 16},
  textTitle: {
    fontSize: 14,
    color: '#223263',
    fontWeight: '700',
    marginBottom: 16,
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  customRating: {marginRight: 12},
  rate: {
    fontSize: 14,
    color: '#9098B1',
    fontWeight: '700',
  },
  writeReview: {
    fontSize: 14,
    color: '#223263',
    fontWeight: '700',
    marginVertical: 16,
  },
  textInput: {
    textAlignVertical: 'top',
    height: 140,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    padding: 16,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: '700',
    color: '#9098B1',
  },
  imgPicker: {
    height: 72,
    width: 72,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBF0FF',
  },
  localImage: {
    height: 72,
    width: 72,
    resizeMode: 'stretch',
    marginRight: 12,
    borderRadius: 5,
  },
});
