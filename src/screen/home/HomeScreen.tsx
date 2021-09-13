import React from 'react';
import { Text, Image, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Themes } from '../../assets/themes';
import Header from '../../component/header/Header';
import FormSearch from './component/FormSearch';
import ButtonIcon from '../../component/button/ButtonIcon';
import Images from '../../assets/images';
import { ScaledSheet } from 'react-native-size-matters';
import Swiper from 'react-native-swiper'
import Dot from './component/Dot';
import ItemBanner from './component/ItemBanner';
import ViewTittle from './component/ViewTittle';
import ItemCategory from '../../component/item/ItemCategory';
import { ListCategory } from './list/ListCategory';
import { arrBanner } from './list/ListBanner';
import { flashSale, megaSale, product } from './list/ListProduct';
import ListProduct from './component/ListProduct';
import ItemBigProduct from '../../component/item/ItemBigProduct';
import { windowWidth, windowHeight } from '../../utill/Size';
import { useNavigation } from '@react-navigation/native';
import { APP_ROUTE } from '../../navigation/config/routes';

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
                    removeClippedSubviews={false}
                >
                    {arrBanner.map((item, index) => (
                        <ItemBanner onPress={() => navigation.navigate(APP_ROUTE.FLASH_SALE)} key={`${index}`} image={item.image} />
                    ))}
                </Swiper>
            </View>
            <View style={styles.CategoryView}>
                <ViewTittle tittle="Category" more="More Category" />
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {ListCategory.map((item, index) => (
                        <ItemCategory key={`${index}`} icon={item.icon} tittle={item.tittle} />
                    ))}
                </ScrollView>
            </View>
            <ListProduct arr={flashSale} tittle="Flash Sale" more="See More" />
            <ListProduct arr={megaSale} tittle="Mega Sale" more="See More" />
            <TouchableOpacity style={styles.recomendedProduct}>
                <Image style={styles.image} source={Images.banner2} />
                <Text style={styles.tittleRecomendedProduct}>Recomended{"\n"}
                    Product</Text>
                <Text style={styles.textRecomendedProduct}>We recommend the best for you</Text>
            </TouchableOpacity>
        </View>
    );
};

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header
                children={<FormSearch />}
                iconRight1={<ButtonIcon onPress={() => navigation.navigate(APP_ROUTE.FAVORITE)} icon={Images.icon.heart} />}
                iconRight2={<ButtonIcon icon={Images.icon.notifications} />}
            />
            <View style={styles.viewListProduct}>
                <FlatList
                    data={product}
                    renderItem={({ item }) => (
                        <ItemBigProduct
                            image={item.images}
                            name={item.name}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            percent={item.percent}
                        />
                    )}
                    columnWrapperStyle={styles.columnWrapperStyle}
                    ListHeaderComponent={ListHeader}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        backgroundColor: Themes.BackgroundColor.white,
        flex: 1,
        alignItems: 'center',
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
        lineHeight: 36

    },
    textRecomendedProduct: {
        position: 'absolute',
        fontSize: '16@ms0.3',
        fontWeight: '400',
        color: Themes.BackgroundColor.white,
        left: '50@vs',
        bottom: '60@s'
    },
    viewListProduct: {
        alignItems: 'center',
        marginBottom: '80@vs'
    },
    columnWrapperStyle: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: '16@s',
        marginBottom: '15@vs',
    }

})
export default HomeScreen;
