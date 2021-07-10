import React, { forwardRef, useState } from 'react';
import { Controller, RegisterOptions, useFormContext, } from 'react-hook-form';
import { TextInputProps, Text, StyleSheet, TextInput, View } from 'react-native';
import { Themes } from '../../assets/themes';


interface FormInputProps extends TextInputProps {
    name: string;
    rules?: RegisterOptions;
    defaultValue?: string;
    form?: any;
    errorMessage?: string;
    label: string;
    icon: any;
    isPassword?: true | false;
}

const IconLeftInputForm = forwardRef((props: FormInputProps, ref: any) => {
    const { name, rules, defaultValue = '', isPassword, label, icon, errorMessage, form, ...inputProps } = props;
    const formContext = useFormContext();
    const { control, errors } = formContext || form;
    const [focus, setFocus] = useState(false);

    return (
        <>
            <View style={[styles.container, { borderColor: errorMessage ? Themes.PrimaryColor.red : Themes.PrimaryColor.blue }]}>
                <View style={styles.icon}>
                    {icon}
                </View>
                <Controller
                    control={control}
                    name={name}
                    defaultValue={defaultValue}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.textInput}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            value={value}
                            placeholder={label}
                            placeholderTextColor={Themes.NeutralColors.grey}
                            onChangeText={onChange}
                            secureTextEntry={isPassword}
                            {...inputProps}
                        />
                    )}
                />
            </View>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </>
    );
});
const styles = StyleSheet.create({
    error: {
        color: Themes.PrimaryColor.red,
        fontSize: 17,
        fontWeight: '700',
    },
    container: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 18,
    },
    textInput: {
        marginLeft: 20,
        color: Themes.NeutralColors.grey,
    },
});
export default IconLeftInputForm;
