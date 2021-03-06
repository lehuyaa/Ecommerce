import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { getProductByUserId } from '../../api/modules/api-app/product';
import { store } from '../../app-redux/store';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import Header from '../../component/header/Header';
import ItemBigProduct from '../../component/item/ItemBigProduct';
import LoadingScreen from '../../component/LoadingScreen';
import { sortArrayProductByRate } from '../../utilities/format';



const ProfileScreen = () => {
    const navigation = useNavigation();
    const { userInfo } = store.getState();
    const [loading, setLoading] = useState<boolean>(false);
    const [listProduct, setListProduct] = useState<any>([]);

    const getProductFunc = async () => {
        setLoading(true);

        try {
            const response = await getProductByUserId(userInfo?.user?.id);
            setLoading(false);
            setListProduct(response?.data);

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
            <Header>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image style={styles.iconHeader} source={Images.icon.back} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>
                    Profile
                </Text>
            </Header>
            <View style={styles.viewAvatar}>
                <Image source={Images.avatar} style={styles.avatar} />
                <View style={styles.viewName}>
                    <Text style={styles.textHeader}>
                        {userInfo?.user?.username}
                    </Text>
                    <Text style={styles.normalText}>
                        {userInfo?.user?.email}
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
    )
}


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.BackgroundColor.white,
    },
    textHeader: {
        fontSize: '16@ms0.3',
        fontWeight: '700',
        color: Themes.NeutralColors.Dark,
    },
    iconHeader: {
        width: '6@s',
        height: '12@vs',
        resizeMode: 'contain',
        marginRight: '21@s',
    },
    viewAvatar: {
        flexDirection: 'row',
        paddingLeft: '16@s',
        paddingTop: '24@vs',
        paddingBottom: '32@vs',
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
        paddingBottom: '250@vs'

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
    },
})

export default ProfileScreen
