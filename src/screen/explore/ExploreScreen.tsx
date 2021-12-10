import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';

import {APP_ROUTE} from '../../navigation/config/routes';
import ButtonIcon from '../../component/button/ButtonIcon';
import FormSearch from '../home/component/FormSearch';
import Header from '../../component/header/Header';
import IconHeart from '../../assets/icons/IconHeart';
import IconNotification from '../../assets/icons/IconNotification';
import ItemCategory from '../../component/item/ItemCategory';
import {ListCategory} from '../home/list/ListCategory';
import React, {useEffect, useState} from 'react';
import {Themes} from '../../assets/themes';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  getProductByCategory,
  searchProduct,
} from '../../api/modules/api-app/product';
import {product} from '../home/list/ListProduct';
import LoadingScreen from '../../component/LoadingScreen';
import {getAllCategory} from '../../api/modules/api-app/category';
import {useDispatch} from 'react-redux';
import ListSuggest from './component/ListSuggest';
import {REGEX_SALARY} from '../../utilities/staticData';

const ExploreScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState('');
  const [listCategory, setListCategory] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

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

  const getProductByCategoryFunc = async (categoryId: number) => {
    setLoading(true);
    try {
      const response: any = await getProductByCategory(categoryId);
      navigation.navigate(APP_ROUTE.SEARCH_RESULT, {
        searchResult: response?.data,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getAllCategoryFunc = async () => {
    setLoading(true);
    try {
      const response = await getAllCategory();
      setListCategory(response?.data);
      setLoading(false);
      setIsFetching(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllCategoryFunc();
  }, []);

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
                />
                <ButtonIcon
                    onPress={() => { }}
                    children={
                        <IconNotification
                            height={verticalScale(24)}
                            width={verticalScale(24)}
                        />
                    }
                /> */}
        </Header>
        <View style={styles.main}>
          {!isSearching ? (
            <>
              <Text style={styles.titleCategory}>Category</Text>
              <FlatList
                data={listCategory}
                refreshing={isFetching}
                onRefresh={() => {
                  getAllCategoryFunc();
                  setIsFetching(true);
                  setSearchKey('');
                }}
                renderItem={({item}) => (
                  <ItemCategory
                    icon={item.icon}
                    tittle={item.categoryName}
                    onPress={() => getProductByCategoryFunc(item.id)}
                  />
                )}
                numColumns={4}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </>
          ) : (
            <ListSuggest
              listSuggest={filteredList}
              setSearchKey={setSearchKey}
            />
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
  main: {
    paddingTop: '16@vs',
    paddingLeft: '16@s',
    flex: 1,
  },
  titleCategory: {
    fontSize: '14@ms0.3',
    fontWeight: '700',
  },
  viewSuggest: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '250@vs',
    backgroundColor: 'red',
  },
  itemSuggest: {
    height: '50@vs',
    justifyContent: 'center',
    paddingLeft: '16@s',
    backgroundColor: Themes.BackgroundColor.white,
    width: '100%',
  },
  textSuggest: {
    fontWeight: '400',
    fontSize: '12@ms0.3',
    color: Themes.NeutralColors.grey,
  },
});
export default ExploreScreen;
