import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useMemo} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image as DefaultImage,
  ScrollView,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {store} from '../../app-redux/store';
import Images from '../../assets/images';
import {Themes} from '../../assets/themes';
import ButtonDefault from '../../component/button/ButtonDefault';
import Header from '../../component/header/Header';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import Review from './component/Review';
import Toast from 'react-native-toast-message';

const starArray = [0, 1, 2, 3, 4, 5];

type ParamList = {
  Rating: {
    item?: any;
    listReview?: any;
  };
};
const Rating = () => {
  const [rate, setRating] = useState(0);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Rating'>>();
  const {item, listReview} = route.params || {};
  const onFilterItem = item => {
    setRating(item);
  };
  const {userInfo} = store.getState();
  const showFailureNotEnoughtToast = () => {
    Toast.show({
      type: 'error',
      text1: `You can't review your product`,
    });
  };
  console.log('item', item);
  const customSelectFilterStyle = useMemo(
    () => [
      styles.rowReview,
      {
        backgroundColor: rate === 0 ? 'rgba(64, 191, 255, 0.1)' : '#FFFFFF',
        borderWidth: rate === 0 ? 0 : 1,
        borderColor: '#EBF0FF',
      },
    ],
    [rate],
  );

  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <DefaultImage style={styles.iconHeader} source={Images.icon.back} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.textHeader}>
          {listReview.length} Reviews
        </Text>
      </Header>
      <ScrollView
        style={styles.mainContent}
        showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{padding: 16, marginRight: 16}}>
          {starArray?.map(item => {
            if (item === 0) {
              return (
                <TouchableOpacity
                  onPress={() => onFilterItem(item)}
                  key={item.toString()}
                  style={customSelectFilterStyle}>
                  <Text
                    style={{fontSize: 12, color: '#40BFFF', fontWeight: '700'}}>
                    All Review
                  </Text>
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity
                key={item.toString()}
                onPress={() => onFilterItem(item)}
                style={[
                  styles.rowReview,
                  {
                    backgroundColor:
                      rate === item ? 'rgba(64, 191, 255, 0.1)' : '#FFFFFF',
                    borderWidth: rate === item ? 0 : 1,
                    borderColor: '#EBF0FF',
                  },
                ]}>
                <Text
                  style={{fontSize: 12, color: '#9098B1', fontWeight: '700'}}>
                  {item} Star
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View>
          {listReview.map(item => (
            <Review key={item.toString()} itemReview={item} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.viewButton}>
        <ButtonDefault
          title={'Write Review'}
          onPress={() => {
            if (item?.user?.id === userInfo?.user?.id) {
              showFailureNotEnoughtToast();
            } else {
              navigation.navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.NEW_REVIEW, {
                item,
              });
            }
          }}
        />
      </View>
      <Toast />
    </View>
  );
};

export default Rating;

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
  rowReview: {
    height: 50,
    alignSelf: 'flex-start',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 12,
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
  mainContent: {
    flex: 1,
    marginBottom: '100@vs',
  },
});
