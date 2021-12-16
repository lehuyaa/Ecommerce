import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useMemo} from 'react';
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
import {store} from '../../app-redux/store';
import dayjs from 'dayjs';
import {addReview} from '../../api/modules/api-app/product';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import LoadingScreen from '../../component/LoadingScreen';
import {launchImageLibrary} from 'react-native-image-picker';
import IconAdd from '../../assets/icons/IconAdd';

type ParamList = {
  ProductDetailsScreen: {
    idProduct?: any;
  };
};
const NewReview = () => {
  const [rate, setRating] = useState(3);
  const [image, setImage] = useState([]);
  const [content, setContent] = useState<string>('');
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'ProductDetailsScreen'>>();
  const {idProduct} = route.params || {};
  const {userInfo} = store.getState();
  const [loading, setLoading] = useState<boolean>(false);

  const addReviewFunc = async () => {
    const params = {
      content: content,
      starNumber: rate,
      productId: idProduct,
      userId: userInfo?.user?.id,
      createdTime: dayjs(new Date()).format('HH:mm - DD/MM/YYYY'),
    };
    setLoading(true);

    try {
      const response: any = await addReview(params);
      navigation.navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getImage = async () => {
    await launchImageLibrary(
      {selectionLimit: 0, mediaType: 'photo', quality: 0.5},
      res => {
        if (!res?.didCancel) {
          const listImg = res?.assets?.map(item => item?.uri, {});
          setImage(img => [...listImg, ...img]);
        }
      },
    );
  };
  return (
    <View style={styles.container}>
      {loading && <LoadingScreen />}
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
          value={content}
          multiline
          numberOfLines={5}
          placeholder="Write your review here"
          blurOnSubmit
          style={styles.textInput}
          returnKeyType="done"
          onChangeText={text => setContent(text)}
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
        <ButtonDefault onPress={() => addReviewFunc()} title={'Write Review'} />
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
  title: {paddingHorizontal: '16@s', marginTop: '16@vs'},
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
  customRating: {marginRight: '12@s'},
  rate: {
    fontSize: 14,
    color: '#9098B1',
    fontWeight: '700',
  },
  writeReview: {
    fontSize: 14,
    color: '#223263',
    fontWeight: '700',
    marginVertical: '16@vs',
  },
  textInput: {
    textAlignVertical: 'top',
    height: 140,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    paddingHorizontal: '16@s',
    paddingVertical: '16@vs',
    borderRadius: '5@s',
    fontSize: 12,
    fontWeight: '700',
    color: '#9098B1',
  },
  imgPicker: {
    height: '72@vs',
    width: '72@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBF0FF',
  },
  localImage: {
    height: '72@vs',
    width: '72@s',
    resizeMode: 'stretch',
    marginRight: 12,
    borderRadius: '5@s',
  },
});
