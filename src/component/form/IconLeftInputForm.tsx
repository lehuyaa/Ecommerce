// /* eslint-disable no-unused-expressions */
// import React, { forwardRef, useState } from 'react';
// import { Controller, RegisterOptions, useFormContext, UseFormMethods } from 'react-hook-form';


// interface FormInputProps extends TextInputProps {
//     name: string;
//     rules?: RegisterOptions;
//     defaultValue?: string;
//     form?: UseFormMethods;
//     errorMessage?: string;
//     label: string;
//     isPassword?: true | false;
// }

// const IconLeftInputForm = forwardRef((props: FormInputProps, ref: any) => {
//     const { t } = useTranslation();
//     const { name, rules, defaultValue = '', onChangeText, label, isPassword, onBlur, form, ...inputProps } = props;
//     const formContext = useFormContext();
//     const { control, errors } = formContext || form;
//     const errorMessage = errors?.[name]?.message || '';
//     return (
//         <>
//             <Controller
//                 control={control}
//                 name={name}
//                 defaultValue={defaultValue}
//                 render={({ onChange, value }) => (
//                     <TextInput
//                         style={styles.containerStyles}
//                         onChangeText={(text: string) => onChange(text)}
//                         value={value}
//                         placeholder="useless placeholder"
//                         keyboardType="numeric"
//                         {...inputProps}
//                     />
//                 )}
//             />
//             <StyledText customStyle={styles.error} i18nText={errorMessage} />
//         </>
//     );
// });
// const styles = StyleSheet.create({
//     containerStyles: {
//         backgroundColor: Themes.COLORS.white,
//         height: 55,
//     },
//     labelStyle: {
//         marginLeft: 10,
//     },
//     customLabelStyles: {},
//     inputStyles: {
//         marginLeft: 13,
//         bottom: -10,
//         color: ThemesDark.colors.line,
//     },
//     error: {
//         color: Themes.COLORS.borderInputError,
//     },
// });
// export default IconLeftInputForm;
