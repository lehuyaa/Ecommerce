import React from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import ButtonIcon from '../../component/button/ButtonIcon';
import Header from '../../component/header/Header';
import { useNavigation } from '@react-navigation/native';
import { flashSale } from './list/ListProduct';
import ItemBigProduct from '../../component/item/ItemBigProduct';
import IconSearch from '../../assets/icons/IconSearch';
import IconBack from '../../assets/icons/IconBack';

const ChildrenHeaders = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.childrenHeaders}>
            <ButtonIcon children={<IconBack height={verticalScale(24)} width={verticalScale(24)} />} onPress={() => navigation.goBack()}/>
            <Text style={styles.title}>
                Super Flash Sale
            </Text>
        </View>
    )
}
const ItemTime = (props) => {
    const { text } = props;
    return (
        <View style={styles.itemTime}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
const BackgroundTitle = () => {
    return (
        <View style={styles.imageTitle} >
            <Image style={styles.bannerImage} source={Images.banner} />
            <Text style={styles.titleImage}>Super Flash Sale{"\n"}
                50% Off</Text>
            <View style={styles.ViewTime}>
                <ItemTime text='08' />
                <Text style={styles.centerText}>:</Text>
                <ItemTime text='34' />
                <Text style={styles.centerText}>:</Text>
                <ItemTime text='52' />
            </View>

        </View>
    )
}
const FlashSaleScreen = () => {
    return (
        <View style={styles.container}>
            <Header
                children={<ChildrenHeaders />}
                iconRight2={<ButtonIcon onPress={() => {}} children={<IconSearch height={verticalScale(24)} width={verticalScale(24)} /> }/>}
            />
            <View style={styles.viewListProduct}>
                <FlatList
                    data={flashSale}
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
                    ListHeaderComponent={BackgroundTitle}
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
    iconBack: {
        width: '6@s',
        height: '12@vs',
    },
    title: {
        marginLeft: '20@s',
        fontWeight: '700',
        fontSize: '16@ms0.3',
        color: Themes.NeutralColors.Dark,
    },
    iconRight: {
        marginLeft: '30@s',
    },
    imageTitle: {
        borderRadius: 5,
        marginBottom: '16@vs',
    },
    bannerImage: {
        width: '100%',
        height: '180@vs',
        borderRadius: 5,

    },
    titleImage: {
        position: 'absolute',
        fontSize: '26@ms0.3',
        fontWeight: '700',
        color: Themes.BackgroundColor.white,
        lineHeight: 36,
        top: '20@vs',
        left: '20@vs'
    },
    itemTime: {
        width: '40@s',
        height: '40@vs',
        backgroundColor: Themes.BackgroundColor.white,
        marginRight: '7@s',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        fontSize: '16@ms0.3',
        fontWeight: '700',
    },
    ViewTime: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: '25@vs',
        left: '20@vs',
        justifyContent: 'center',
        alignItems: 'center',

    },
    centerText: {
        marginRight: '7@s',
        fontSize: '14@ms0.3',
        fontWeight: '700',
        color: Themes.BackgroundColor.white,
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

export default FlashSaleScreen

