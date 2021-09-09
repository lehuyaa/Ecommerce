import React from 'react'
import { View } from 'react-native'
import { Themes } from '../../assets/themes';
import { ScaledSheet } from 'react-native-size-matters';

const Header = (props) => {
    const { children, iconRight1, iconRight2 } = props;
    return (
        <View style={styles.container}>
            {children}
            <View style={styles.icon}>
                {iconRight1}
                {iconRight2}
            </View>

        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        backgroundColor: Themes.BackgroundColor.white,
        borderBottomColor: Themes.NeutralColors.light,
        borderBottomWidth: 2,
        height: '14%',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '15@s',
        paddingBottom: '15@vs',
        alignItems: 'flex-end',
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '20%',
    }
})

export default Header
