import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import { windowWidth, windowHeight } from '../../utill/Size';

const ItemBigProduct = (props) => {

    const { image, name, price, oldPrice, percent, style } = props;
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image style={styles.image} source={image} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price}</Text>
                <View style={styles.discount}>
                    <Text style={styles.oldPrice}>{oldPrice}</Text>
                    <Text style={styles.percent}>{percent}</Text>

                </View>
            </View>
        </TouchableOpacity>

    )
}



const styles = ScaledSheet.create({
    container: {
        width: windowWidth * 0.435,
        height: '230@vs',
        borderWidth: 1,
        borderColor: Themes.NeutralColors.light,
        borderRadius: 5,
        paddingTop: '16@vs',
        paddingHorizontal: '16@s',
        paddingBottom: '16@vs',
    },
    image: {
        width: '120@s',
        height: '120@s',
        borderRadius: 5,
        resizeMode: 'contain',
    },
    name: {
        fontSize: '12@ms0.3',
        marginTop: '8@vs',
        fontWeight: '700',
        color: Themes.NeutralColors.Dark,
    },
    price: {
        fontSize: '12@ms0.3',
        fontWeight: '700',
        marginTop: '8@vs',
        color: Themes.PrimaryColor.blue
    },
    discount: {
        flexDirection: 'row',
        marginTop: '8@vs',
    },
    oldPrice: {
        fontSize: '10@ms0.3',
        fontWeight: '400',
        color: Themes.NeutralColors.grey,
        marginRight: '10@s',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    percent: {
        fontSize: '10@ms0.3',
        fontWeight: '700',
        color: Themes.PrimaryColor.red
    }
})

export default ItemBigProduct
