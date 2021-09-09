import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

const ButtonIcon = (props) => {
    const { icon } = props;
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.icon} source={icon} />
        </TouchableOpacity>
    )
}


const styles = ScaledSheet.create({
    container: {
        marginBottom: '10@vs',
        marginLeft: '9@s'
    },
    icon: {
        width: '24@s',
        height: '24@vs',
        resizeMode: 'contain',
    }
})

export default ButtonIcon