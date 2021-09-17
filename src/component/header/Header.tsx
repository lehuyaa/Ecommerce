import React from 'react'
import { View } from 'react-native'
import { Themes } from '../../assets/themes';
import { ScaledSheet } from 'react-native-size-matters';

const Header = (props) => {
    const { children, customStyle } = props;
    console.log('1...', customStyle);
    
    return (
        <View style={[styles.container, customStyle]}>
            {children}
        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        backgroundColor: Themes.BackgroundColor.white,
        borderBottomColor: Themes.NeutralColors.light,
        borderBottomWidth: 2,
        height: '85@vs',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: '16@s',
        paddingBottom: '14@vs',
        alignItems: 'flex-end',
        // justifyContent: 'space-between'
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default Header
