import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { Themes } from '../../../assets/themes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { windowHeight, windowWidth } from '../../../utill/Size';

const FormSearch = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name="search" size={20} color={Themes.PrimaryColor.blue} />
            <TextInput
                style={styles.textInput}
                placeholder='Search Product'
                placeholderTextColor={Themes.NeutralColors.grey}
            />
        </View>
    )
}



const styles = ScaledSheet.create({
    container: {
        width: '260@s',
        height: '38@vs',
        borderColor: Themes.NeutralColors.light,
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '15@s',
    },
    textInput: {
        marginLeft: '20@s',
        color: Themes.NeutralColors.grey,
        width: '80%',
    },
})

export default FormSearch