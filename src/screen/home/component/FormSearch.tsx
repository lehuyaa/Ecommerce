import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { Themes } from '../../../assets/themes';
import ButtonIcon from '../../../component/button/ButtonIcon';
import IconSearch from '../../../assets/icons/IconSearch';

const FormSearch = (props: any) => {
    const {onSubmitEditing, setSearchKey} = props; 
    const onSubmit = () => {
        
        onSubmitEditing();
    }
    return (
        <View style={styles.container}>
            <ButtonIcon onPress={() => {}} children={<IconSearch height={verticalScale(16)} width={verticalScale(16)} color={Themes.PrimaryColor.blue}  />} />
            <TextInput
                style={styles.textInput}
                placeholder='Search Product'
                placeholderTextColor={Themes.NeutralColors.grey}
                onSubmitEditing={() => onSubmit()}
                onChangeText={(text)=> setSearchKey(text)}
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