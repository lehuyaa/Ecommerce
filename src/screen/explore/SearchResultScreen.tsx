import {
  FlatList,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';

import ButtonIcon from '../../component/button/ButtonIcon';
import FormSearch from '../home/component/FormSearch';
import Header from '../../component/header/Header';
import IconFilter from '../../assets/icons/IconFilter';
import IconSort from '../../assets/icons/IconSort';
import Images from '../../assets/images';
import ItemBigProduct from '../../component/item/ItemBigProduct';
import React, { useEffect, useState } from 'react';
import { Themes } from '../../assets/themes';
import { product } from '../home/list/ListProduct';
import IconBack from '../../assets/icons/IconBack';
import { useNavigation } from '@react-navigation/core';
import { RouteProp, useRoute } from '@react-navigation/native';
import { searchProduct } from '../../api/modules/api-app/product';
import LoadingScreen from '../../component/LoadingScreen';
import { APP_ROUTE, TAB_NAVIGATION_ROOT } from '../../navigation/config/routes';
import { sortArrayProductByRate } from '../../utilities/format';
import { useDispatch } from 'react-redux';
import ListSuggest from './component/ListSuggest';
import { REGEX_SALARY } from '../../utilities/staticData';

type ParamList = {
  SearchResultScreen: {
    searchResult?: any;
    isSort?: boolean;
  };
};
const SearchResultScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'SearchResultScreen'>>();
  const { searchResult, isSort = false } = route.params || {};
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState('');
  const [listProduct, setListProduct] = useState(searchResult);
  const onSearch = async () => {
    setLoading(true);
    try {
      const response = await searchProduct(searchKey);

      setListProduct(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  console.log('filteredList', filteredList);
  useEffect(() => {
    setListProduct(searchResult);
  }, [searchResult]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header customStyle={styles.header}>
          <ButtonIcon
            onPress={() => {
              navigation.goBack();
            }}
            children={
              <IconBack height={verticalScale(24)} width={verticalScale(24)} />
            }
          />
          <FormSearch
            searchKey={searchKey}
            onSubmitEditing={() => onSearch()}
            setSearchKey={setSearchKey}
            setIsSearching={setIsSearching}
            setFilteredList={setFilteredList}
          />
          <ButtonIcon
            onPress={() => {
              navigation.navigate(
                TAB_NAVIGATION_ROOT.EXPLORE_ROUTE.SORT_SCREEN,
                {
                  setListProduct,
                  listProduct,
                },
              );
            }}
            children={
              <IconSort height={verticalScale(24)} width={verticalScale(24)} />
            }
          />
          {/* <ButtonIcon
            onPress={() => { }}
            children={
              <IconFilter
                height={verticalScale(24)}
                width={verticalScale(24)}
              />
            }
          /> */}
        </Header>
        <View style={styles.main}>
          {loading && <LoadingScreen />}
          {isSearching ? (
            <ListSuggest
              listSuggest={filteredList}
              setSearchKey={setSearchKey}
            />
          ) : (
            <>
              <View style={styles.viewTopMain}>
                <Text style={styles.textNumberSearchResult}>
                  {listProduct.length} Result
                </Text>
              </View>
              <View style={styles.viewListProduct}>
                <FlatList
                  style={styles.flatList}
                  data={
                    isSort ? listProduct : sortArrayProductByRate(listProduct)
                  }
                  renderItem={({ item }) => (
                    <ItemBigProduct
                      item={item}
                      image={item.productImage}
                      name={item.productName}
                      price={item.productPrice}
                      oldPrice={item.oldPrice}
                      percent={item.percent}
                    />
                  )}
                  columnWrapperStyle={styles.columnWrapperStyle}
                  numColumns={2}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '40@vs',
  },
  flatList: {
    width: '100%',
  },
  main: {
    paddingTop: '16@vs',
  },
  viewTopMain: {
    paddingHorizontal: '16@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textNumberSearchResult: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
    opacity: 0.5,
  },
  textCategoryName: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
    marginRight: '16@s',
  },
  viewDropDown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDropDown: {
    resizeMode: 'contain',
    width: '12@s',
    height: '12@vs',
  },
  viewListProduct: {
    alignItems: 'center',
    marginBottom: '110@vs',
    marginTop: '15@vs',
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: '16@s',
    marginBottom: '15@vs',
  },
});
export default SearchResultScreen;
