import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import Header from '../../component/header/Header';

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image style={styles.iconHeader} source={Images.icon.back} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>
                    Profile
                </Text>
            </Header>
            <View style={styles.viewAvatar}>
                <Image source={Images.avatar} style={styles.avatar} />
                <View style={styles.viewName}>
                    <Text style={styles.textHeader}>
                        LE HUY
                    </Text>
                    <Text style={styles.normalText}>
                        @lehuy
                    </Text>
                </View>
            </View>
        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.BackgroundColor.white,
    },
    textHeader: {
        fontSize: '16@ms0.3',
        fontWeight: '700',
        color: Themes.NeutralColors.Dark,
    },
    iconHeader: {
        width: '6@s',
        height: '12@vs',
        resizeMode: 'contain',
        marginRight: '21@s',
    },
    viewAvatar: {
        flexDirection: 'row',
        paddingLeft: '16@s',
        paddingTop: '24@vs',
        paddingBottom: '32@vs'
    },
    avatar: {
        width: '72@vs',
        height: '72@vs',
        borderRadius: '36@vs',
    },
    viewName: {
        marginLeft: '16@s',
        justifyContent: 'center',
    },
    normalText: {
        fontSize: '12@ms0.3',
        fontWeight: '400',
        color: Themes.NeutralColors.grey,
        marginTop: '5@vs',
    }
})

export default ProfileScreen
