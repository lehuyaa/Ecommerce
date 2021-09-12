import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import IconHeart from '../../assets/icons/IconHeart'
import IconTrash from '../../assets/icons/IconTrash';
import IconSubstract from '../../assets/icons/IconSubstract';
import IconAdd from '../../assets/icons/IconAdd';
import IconHeartFilled from '../../assets/icons/IconHeartFilled';
import ButtonIcon from '../button/ButtonIcon';

type ItemCartProps = {
    item: Cart
}

const ItemCart = ({ item }: ItemCartProps) => {
    return (
        <View style={styles.container}>
            <Image source={item?.cover} style={styles.imageCart} />
            <View style={styles.infoCart}>
                <View style={styles.aboveCart}>
                    <Text numberOfLines={2} style={styles.textCart}>{item?.title}</Text>
                    <ButtonIcon onPress={() => {}} children={item?.isFavourite ? <IconHeartFilled height={verticalScale(24)} width={ verticalScale(24)}/> : <IconHeart height={verticalScale(24)} width={ verticalScale(24)}/>} />
                    <ButtonIcon onPress={() => {}} children={<IconTrash height={verticalScale(24)} width={verticalScale(24)} />} />
                </View>
                <View style={styles.belowCart}>
                    <Text numberOfLines={1} style={styles.textPriceCart}>{`$${item?.price}`}</Text>

                    <View style={styles.numberCart}>
                        <TouchableOpacity style={styles.buttonSubstract}>
                            <IconSubstract height={verticalScale(16)} width={ verticalScale(16)}/>
                        </TouchableOpacity>
                        <TextInput style={styles.inputNumber} keyboardType='number-pad' defaultValue={item?.amount} />
                        <TouchableOpacity style={styles.buttonAdd}>
                            <IconAdd height={verticalScale(16)} width={ verticalScale(16)}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        height: '104@vs',
        borderWidth: 1,
        borderColor: Themes.NeutralColors.light,
        borderRadius: 5,
        flexDirection: 'row',
        paddingVertical: '16@vs',
        paddingHorizontal: '12@s',
        marginBottom: '16@vs'
    },
    imageCart: {
        height: '72@vs',
        width: '72@vs',
        marginRight: '8@s',
        borderRadius: 5,
        resizeMode: 'contain',
    },
    infoCart: {
        flex: 1,
        justifyContent: 'space-between',
    },
    aboveCart: {
        height: '36@vs',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textCart: {
        fontSize: '12@vs',
        width: '154@s',
        fontWeight: '700',
        color: Themes.NeutralColors.Dark,
        lineHeight: '18@vs'
    },
    belowCart: {
        flexDirection: 'row',
        height: '24@vs',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    textPriceCart: {
        fontSize: '12@vs',
        width: '80@s',
        fontWeight: '700',
        color: Themes.PrimaryColor.blue,
    },
    numberCart: {
        width: '104@s',
        height: '24@vs',
        flexDirection: 'row'
    },
    buttonSubstract: {
        width: '32@s',
        borderWidth: 1,
        borderColor: Themes.NeutralColors.light,
        height: '24@vs',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonAdd: {
        width: '32@s',
        borderWidth: 1,
        borderColor: Themes.NeutralColors.light,
        height: '24@vs',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputNumber: {
        backgroundColor: Themes.NeutralColors.light,
        width: '40@s',
        textAlign: 'center'
    }
})

export default ItemCart;