import {
  ActivityIndicator,
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {flashSale, megaSale, product} from './list/ListProduct';

import {APP_ROUTE, TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import ButtonIcon from '../../component/button/ButtonIcon';
import Dot from './component/Dot';
import FormSearch from './component/FormSearch';
import Header from '../../component/header/Header';
import IconHeart from '../../assets/icons/IconHeart';
import IconNotification from '../../assets/icons/IconNotification';
import Images from '../../assets/images';
import ItemBanner from './component/ItemBanner';
import ItemBigProduct from '../../component/item/ItemBigProduct';
import ItemCategory from '../../component/item/ItemCategory';
import {ListCategory} from './list/ListCategory';
import ListProduct from './component/ListProduct';
import LoadingScreen from '../../component/LoadingScreen';
import Swiper from 'react-native-swiper';
import {Themes} from '../../assets/themes';
import ViewTittle from './component/ViewTittle';
import {arrBanner} from './list/ListBanner';
import {getAllProduct, searchProduct} from '../../api/modules/api-app/product';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {sortArrayProductByRate} from '../../utilities/format';
import {addToSuggest} from '../../app-redux/slices/suggestionsSlice';
import {useDispatch} from 'react-redux';
import ListSuggest from '../explore/component/ListSuggest';
import {windowWidth} from '../../utilities/size';

const ListHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerFlatList}>
      <View style={styles.banner}>
        <Swiper
          loop={true}
          index={0}
          autoplay
          dot={<Dot active={false} />}
          activeDot={<Dot active={true} />}
          scrollEnabled={false}
          containerStyle={styles.swiper}
          removeClippedSubviews={false}>
          {arrBanner.map((item, index) => (
            <ItemBanner
              onPress={() => navigation.navigate(APP_ROUTE.FLASH_SALE)}
              key={`${index}`}
              image={item.image}
            />
          ))}
        </Swiper>
      </View>
      <View style={styles.CategoryView}>
        <ViewTittle tittle="Category" more="More Category" />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {ListCategory.map((item, index) => (
            <ItemCategory
              key={`${index}`}
              icon={item.icon}
              tittle={item.tittle}
            />
          ))}
        </ScrollView>
      </View>
      <ListProduct arr={flashSale} tittle="Flash Sale" more="See More" />
      <ListProduct arr={megaSale} tittle="Mega Sale" more="See More" />
      <TouchableOpacity style={styles.recomendedProduct}>
        <Image style={styles.image} source={Images.banner2} />
        <Text style={styles.tittleRecomendedProduct}>
          Recomended{'\n'}
          Product
        </Text>
        <Text style={styles.textRecomendedProduct}>
          We recommend the best for you
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [listProduct, setListProduct] = useState<any>([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const isFocus = useIsFocused();
  const getAllProductFunc = async () => {
    setLoading(true);

    try {
      const response: any = await getAllProduct(pageIndex);
      setLoading(false);
      setListProduct([...listProduct, ...response?.data]);
    } catch (error) {
      setLoading(false);
    }
  };

  const resetProduct = async () => {
    setLoading(true);

    try {
      const response: any = await getAllProduct(0);
      setLoading(false);
      setListProduct(response?.data);
      setPageIndex(0);
    } catch (error) {
      setLoading(false);
    }
  };
  const onSearch = async () => {
    setLoading(true);
    try {
      const response = await searchProduct(searchKey);

      navigation.navigate(APP_ROUTE.SEARCH_RESULT, {
        searchResult: response?.data,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const NoDataView = () => {
    return (
      <View style={styles.viewNodata}>
        <Text>NO DATA</Text>
      </View>
    );
  };
  useEffect(() => {
    getAllProductFunc();
  }, [pageIndex]);

  useEffect(() => {
    if (isFocus) {
      resetProduct();
    }
  }, [isFocus]);
  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={{width: windowWidth, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => handleLoadmore()}
          style={styles.footer}>
          <Text style={{color: Themes.PrimaryColor.blue}}>Load More</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const handleLoadmore = () => {
    setPageIndex(pageIndex + 1);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {loading && <LoadingScreen />}
        <Header customStyle={styles.header}>
          <FormSearch
            searchKey={searchKey}
            onSubmitEditing={() => onSearch()}
            setSearchKey={setSearchKey}
            setIsSearching={setIsSearching}
            setFilteredList={setFilteredList}
          />
          {/* <ButtonIcon
            onPress={() => { }}
            children={
              <IconHeart height={verticalScale(24)} width={verticalScale(24)} />
            }
          /> */}
          <ButtonIcon
            onPress={() => {
              navigation.navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.NOTIFICATION);
            }}
            children={
              <IconNotification
                height={verticalScale(24)}
                width={verticalScale(24)}
              />
            }
          />
        </Header>
        <View style={styles.viewListProduct}>
          {isSearching ? (
            <ListSuggest
              listSuggest={filteredList}
              setSearchKey={setSearchKey}
            />
          ) : (
            <FlatList
              style={styles.flatList}
              data={sortArrayProductByRate(listProduct)}
              // data={listProduct}
              renderItem={({item}) => (
                <ItemBigProduct
                  item={item}
                  image={item.productImage}
                  name={item.productName}
                  price={item.productPrice}
                  oldPrice={item.oldPrice}
                  percent={item.percent}
                  rate={item.rate}
                />
              )}
              columnWrapperStyle={styles.columnWrapperStyle}
              ListEmptyComponent={NoDataView()}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={renderFooter}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Themes.BackgroundColor.white,
    flex: 1,
    alignItems: 'center',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '40@vs',
  },
  headerFlatList: {
    width: '100%',
    marginBottom: '20@vs',
  },
  banner: {
    paddingHorizontal: '16@s',
    paddingVertical: '16@vs',
    height: '250@vs',
    width: '100%',
    alignItems: 'center',
  },
  bannerImage: {
    width: '320@s',
    height: '180@vs',
    borderRadius: 5,
  },
  swiper: {
    marginBottom: '-15@vs',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100@s',
    height: '50@vs',
    borderRadius: 5,
    borderColor: Themes.PrimaryColor.blue,
    marginBottom: '30@vs',
    borderWidth: 1,
  },
  CategoryView: {
    paddingLeft: '16@s',
    marginBottom: '24@vs',
  },
  flashSale: {
    paddingLeft: '16@s',
  },
  recomendedProduct: {
    padding: 16,
    height: '210@vs',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '180@vs',
    borderRadius: 5,
  },
  tittleRecomendedProduct: {
    position: 'absolute',
    fontSize: '26@ms0.3',
    fontWeight: '700',
    color: Themes.BackgroundColor.white,
    left: '50@vs',
    top: '50@s',
    lineHeight: 36,
  },
  textRecomendedProduct: {
    position: 'absolute',
    fontSize: '16@ms0.3',
    fontWeight: '400',
    color: Themes.BackgroundColor.white,
    left: '50@vs',
    bottom: '60@s',
  },
  viewListProduct: {
    width: '100%',
    alignItems: 'center',
    marginBottom: '80@vs',
    paddingTop: '10@vs',
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: '16@s',
    marginBottom: '15@vs',
  },
  flatList: {
    width: '100%',
  },
  viewNodata: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '500@vs',
  },
});
export default HomeScreen;
