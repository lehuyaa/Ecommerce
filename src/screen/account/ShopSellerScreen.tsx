import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { getProfileByUserId } from '../../api/modules/api-app/product';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import Header from '../../component/header/Header';
import ItemBigProduct from '../../component/item/ItemBigProduct';
import LoadingScreen from '../../component/LoadingScreen';
import { sortArrayProductByRate } from '../../utilities/format';

type ParamList = {
    ShopSellerScreen: {
        idSeller?: any;
    };
};
const ShopSellerScreen = () => {
    const route = useRoute<RouteProp<ParamList, 'ShopSellerScreen'>>();
    const [loading, setLoading] = useState<boolean>(false);
    const [listProduct, setListProduct] = useState<any>([]);
    const [user, setUser] = useState<any>({});
    const { idSeller } = route.params || {}
    const navigation = useNavigation();

    const getProductFunc = async () => {
        setLoading(true);

        try {
            const response: any = await getProfileByUserId(idSeller);
            setLoading(false);
            // setListProduct(response?.data);
            setUser(response?.data?.user)
            setListProduct(response?.data?.productList)
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
        getProductFunc();
    }, []);

    return (
        <View style={styles.container}>
            {loading && <LoadingScreen />}
            <View style={styles.viewAvatar}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image style={styles.iconHeader} source={Images.icon.back} />
                </TouchableOpacity>
                {!loading && <Image source={Images.avatar} style={styles.avatar} />}
                <View style={styles.viewName}>
                    <Text style={styles.textHeader}>
                        {user?.username}
                    </Text>
                    <Text style={styles.normalText}>
                        {user?.email}
                    </Text>
                </View>
            </View>
            <View style={styles.listProduct}>
                <FlatList
                    style={styles.flatList}
                    data={sortArrayProductByRate(listProduct)}
                    // data={listProduct}
                    renderItem={({ item }) => (
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
                />
            </View>
        </View>
    );
};


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.BackgroundColor.white,
    },
    viewAvatar: {
        flexDirection: 'row',
        paddingLeft: '16@s',
        paddingTop: '24@vs',
        paddingBottom: '32@vs',
        alignItems: 'center',
    },
    avatar: {
        width: '72@vs',
        height: '72@vs',
        borderRadius: '36@vs',
    },
    viewName: {
        marginLeft: '16@s',
        justifyContent: 'center',
    },
    normalText: {
        fontSize: '12@ms0.3',
        fontWeight: '400',
        color: Themes.NeutralColors.grey,
        marginTop: '5@vs',
    },
    listProduct: {
        // paddingBottom: '250@vs',
        flex: 1,
    },
    iconHeader: {
        width: '6@s',
        height: '12@vs',
        resizeMode: 'contain',
        marginRight: '21@s',
    },
    textHeader: {
        fontSize: '16@ms0.3',
        fontWeight: '700',
        color: Themes.NeutralColors.Dark,
    },
    viewNodata: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '500@vs',
    },
    columnWrapperStyle: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: '16@s',
        marginBottom: '15@vs',
    },
    flatList: {
        width: '100%',
        height: '100%',
    },
});

export default ShopSellerScreen;
