import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {Themes} from '../../assets/themes';
import {Controller, RegisterOptions, useFormContext} from 'react-hook-form';

const InputForm = (props: any) => {
  const {
    name,
    rules,
    defaultValue = '',
    isPassword,
    label,
    icon,
    errorMessage,
    form,
    customContainerStyle,
    ...inputProps
  } = props;
  const formContext = useFormContext();
  const {control, errors} = formContext || form;
  const [focus, setFocus] = useState(false);
  return (
    <>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View
        style={[
          styles.container,
          {
            borderColor: errorMessage
              ? Themes.PrimaryColor.red
              : Themes.PrimaryColor.blue,
          },
          customContainerStyle,
        ]}>
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.textInput}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              value={value}
              placeholder={label}
              placeholderTextColor={Themes.NeutralColors.light}
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
};

const styles = ScaledSheet.create({
  error: {
    color: Themes.PrimaryColor.red,
    fontSize: '17@ms0.3',
    fontWeight: '700',
    marginBottom: '24@vs',
  },
  container: {
    height: '50@vs',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '8@vs',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 18,
  },
  icon: {
    marginLeft: '18@s',
  },
  textInput: {
    marginLeft: '20@s',
    color: Themes.NeutralColors.grey,
    width: '80%',
    fontWeight: '700',
  },
  label: {
    fontSize: '14@ms0.3',
    color: Themes.NeutralColors.Dark,
    fontWeight: '700',
    marginBottom: '12@vs',
  },
});

export default InputForm;
