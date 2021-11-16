import { FlatList, Image, Text, View } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';

import ButtonIcon from '../../component/button/ButtonIcon';
import FormSearch from '../home/component/FormSearch';
import Header from '../../component/header/Header';
import IconFilter from '../../assets/icons/IconFilter';
import IconSort from '../../assets/icons/IconSort';
import Images from '../../assets/images';
import ItemBigProduct from '../../component/item/ItemBigProduct';
import React from 'react';
import { Themes } from '../../assets/themes';
import { product } from '../home/list/ListProduct';

const SearchResultScreen = () => {
    return (
        <View style={styles.container}>
            <Header
                customStyle={styles.header}>
                <FormSearch />
                <ButtonIcon
                    onPress={() => { }}
                    children={
                        <IconSort height={verticalScale(24)} width={verticalScale(24)} />
                    }
                />
                <ButtonIcon
                    onPress={() => { }}
                    children={
                        <IconFilter
                            height={verticalScale(24)}
                            width={verticalScale(24)}
                        />
                    }
                />
            </Header>
            <View style={styles.main}>
                <View style={styles.viewTopMain}>
                    <Text style={styles.textNumberSearchResult}>145 Result</Text>
                    <View style={styles.viewDropDown}>
                        <Text style={styles.textCategoryName}>Man Shoes</Text>
                        <Image source={Images.icon.dropdown} style={styles.iconDropDown} />
                    </View>
                </View>
                <View style={styles.viewListProduct}>
                    <FlatList
                        data={product}
                        renderItem={({ item }) => (
                            <ItemBigProduct
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
            </View>
        </View>
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
        marginBottom: '80@vs',
        marginTop: '15@vs',
      },
      columnWrapperStyle: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: '16@s',
        marginBottom: '15@vs',
      },
})
export default SearchResultScreen;