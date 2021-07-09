import React, { forwardRef, useState } from 'react';
import { Controller, RegisterOptions, useFormContext, } from 'react-hook-form';
import { TextInputProps,Text,StyleSheet,TextInput } from 'react-native';
import { Themes } from '../../assets/themes';
import IconLeftInput from './IconLeftInput';


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
    const { name, rules, defaultValue = '',isPassword ,label,icon,errorMessage ,form, ...inputProps } = props;
    const formContext = useFormContext();
    const { control, errors } = formContext || form;
    return (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <IconLeftInput
                        value={value}
                        placeholder={label}
                        onChangeText={onChange}
                        icon={icon}
                        secureTextEntry={isPassword}    
                        {...inputProps}
                    />
                  )}
            />
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
});
export default IconLeftInputForm;
