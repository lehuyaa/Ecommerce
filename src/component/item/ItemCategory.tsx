import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { Themes } from '../../assets/themes';

const ItemCategory = (props) => {
    const { icon, tittle } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.viewImage}>
                    <Image style={styles.icon} source={icon} />
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>{tittle}</Text>
        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        width: '70@s',
        height: '115@vs',
        marginTop: '17@vs',
        marginRight: '14@s',
        alignItems: 'center',
    },
    viewImage: {
        width: '65@s',
        height: '65@s',
        borderRadius: '32.5@s',
        borderWidth: 1,
        borderColor: Themes.NeutralColors.light,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: '25@s',
        height: '25@vs',
    },
    title: {
        marginTop: '12@vs',
        fontSize: '12@ms0.3',
        textAlign: 'center',
        color: Themes.NeutralColors.grey,
        fontWeight: '400'
    }
})
export default ItemCategory
