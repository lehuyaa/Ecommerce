import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import Header from '../../component/header/Header';
import ItemBigProduct from '../../component/item/ItemBigProduct';
import { favorite } from './list/ListProduct';

const ChildrenHeaders = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.childrenHeaders}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.iconBack} source={Images.icon.back} />
            </TouchableOpacity>
            <Text style={styles.title}>
                Favorite Product
            </Text>
        </View>
    )
}
const FavoriteProductScreen = () => {
    return (
        <View style={styles.container}>
            <Header
                children={<ChildrenHeaders />}
            />
            <View style={styles.viewListProduct}>
                <FlatList
                    data={favorite}
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
    childrenHeaders: {
        width: '260@s',
        height: '38@vs',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: '20@s',
        fontWeight: '700',
        fontSize: '16@ms0.3',
        color: Themes.NeutralColors.Dark,
    },
    iconBack: {
        width: '6@s',
        height: '12@vs',
    },
    viewListProduct: {
        paddingTop: '16@vs',
        width: '100%',
        paddingHorizontal: '16@s',
        marginBottom: '100@vs',

    },
    columnWrapperStyle: {
        marginBottom: '15@vs',
        justifyContent: 'space-between',
    },
})

export default FavoriteProductScreen

