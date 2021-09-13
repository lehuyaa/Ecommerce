import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
const ButtonIcon = (props) => {
    const { children, onPress } = props;
    return (
        <TouchableOpacity style={[styles.container]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}


const styles = ScaledSheet.create({
    container: {
    }
})

export default ButtonIcon
