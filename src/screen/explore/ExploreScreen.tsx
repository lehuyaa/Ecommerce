import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';

import { APP_ROUTE } from '../../navigation/config/routes';
import ButtonIcon from '../../component/button/ButtonIcon';
import FormSearch from '../home/component/FormSearch';
import Header from '../../component/header/Header';
import IconHeart from '../../assets/icons/IconHeart';
import IconNotification from '../../assets/icons/IconNotification';
import ItemCategory from '../../component/item/ItemCategory';
import { ListCategory } from '../home/list/ListCategory';
import React, { useEffect, useState } from 'react';
import { Themes } from '../../assets/themes';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { searchProduct } from '../../api/modules/api-app/product';
import { product } from '../home/list/ListProduct';
import LoadingScreen from '../../component/LoadingScreen';

const ExploreScreen = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const [searchKey, setSearchKey] = useState('');

    const onSearch = async () => {
        setLoading(true);
        try {
          const response = await searchProduct(searchKey);
          navigation.navigate(APP_ROUTE.SEARCH_RESULT, {searchResult : response?.data})
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
    }
  
    return (
        <View style={styles.container}>
            {loading && <LoadingScreen />}
            <Header
                customStyle={styles.header}>
                <FormSearch onSubmitEditing={()=>onSearch()} setSearchKey={setSearchKey} />
                <ButtonIcon
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
                />
            </Header>
            <View style={styles.main}>
                <Text style={styles.titleCategory}>Category</Text>
                <FlatList
                    data={ListCategory}
                    renderItem={({ item }) => (
                        <ItemCategory
                            icon={item.icon}
                            tittle={item.tittle}
                            onPress={() =>navigation.navigate(APP_ROUTE.SEARCH_RESULT,  {searchResult :product })
                            }
                        />
                    )}
                    numColumns={4}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}


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
        fontWeight: '700'
    },
})
export default ExploreScreen;
