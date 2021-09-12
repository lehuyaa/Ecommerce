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
        height: '85@vs',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: '16@s',
        paddingBottom: '10@vs',
        // alignItems: 'flex-end',
        paddingTop: '40@vs',
        justifyContent: 'space-between'
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default Header
