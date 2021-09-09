import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Images from '../../../assets/images'
import { ScaledSheet } from 'react-native-size-matters';
import { Themes } from '../../../assets/themes';

const ItemTime = (props) => {
    const { text } = props;
    return (
        <View style={styles.itemTime}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const ItemBanner = (props) => {

    const { image, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={styles.bannerImage} source={image} />
            <Text style={styles.title}>Super Flash Sale{"\n"}
                50% Off</Text>
            <View style={styles.ViewTime}>
                <ItemTime text='08' />
                <Text style={styles.centerText}>:</Text>
                <ItemTime text='34' />
                <Text style={styles.centerText}>:</Text>
                <ItemTime text='52' />
            </View>

        </TouchableOpacity>
    )
}



const styles = ScaledSheet.create({
    bannerImage: {
        // resizeMode: 'center',
        width: '100%',
        height: '180@vs',
        borderRadius: 5,

    },
    title: {
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
    }

})

export default ItemBanner