import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import Images from '../../../assets/images';
import { Themes } from '../../../assets/themes';

interface ItemServiceAccountProps {
    title: string;
    icon: any;
    navigateName: string;
}
const ItemServiceAccount = (props: ItemServiceAccountProps) => {
    const { title, icon, navigateName } = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(navigateName)} style={styles.container}>
            <Image style={styles.icon} source={icon}/>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = ScaledSheet.create({
    container: {
        width: '100%',
        height: '56@vs',
        flexDirection: 'row',
        paddingLeft: '18@s',
        alignItems: 'center',
    },
    icon: {
        width: '20@s',
        height: '20@vs',
        resizeMode: 'contain',
        marginRight: '18@s',
    },
    title: {
        fontSize: '12@ms0.3',
        fontWeight: '700',
        color: Themes.NeutralColors.Dark,
    }
})

export default ItemServiceAccount
