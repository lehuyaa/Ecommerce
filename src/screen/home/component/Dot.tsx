import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Themes } from '../../../assets/themes'
import { ScaledSheet } from 'react-native-size-matters';

const Dot = (props) => {
    const { active } = props;
    return (
        <View style={[styles.container, {
            backgroundColor: active ? Themes.PrimaryColor.blue : Themes.NeutralColors.light,
        }]} />

    )
}



const styles = ScaledSheet.create({
    container: {
        width: '10@s',
        height: '10@vs',
        borderRadius: 5,
        marginHorizontal: '5@s',
        marginVertical: '5@vs',
    }
})
export default Dot