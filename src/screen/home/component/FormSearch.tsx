import React from 'react';
import {View, TextInput} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {Themes} from '../../../assets/themes';
import ButtonIcon from '../../../component/button/ButtonIcon';
import IconSearch from '../../../assets/icons/IconSearch';
import {useSelector} from 'react-redux';
import {listSuggest} from '../../../utilities/staticData';
const listTest = ['laptop', 'PC', 'ram'];

const FormSearch = (props: any) => {
  const {
    onSubmitEditing,
    setSearchKey,
    searchKey,
    setIsSearching,
    setFilteredList,
  } = props;
  const {suggest} = useSelector((state: any) => state);
  const onSubmit = () => {
    onSubmitEditing();
  };
  const findProduct = (query: string) => {
    if (query) {
      const regex = new RegExp(`${query.trim()}`, 'i');
      setFilteredList(listSuggest.filter(data => data.search(regex) >= 0));
    } else {
      setFilteredList([]);
    }
  };
  return (
    <View style={styles.container}>
      <ButtonIcon
        onPress={() => {}}
        children={
          <IconSearch
            height={verticalScale(16)}
            width={verticalScale(16)}
            color={Themes.PrimaryColor.blue}
          />
        }
      />
      <TextInput
        value={searchKey}
        style={styles.textInput}
        placeholder="Search Product"
        placeholderTextColor={Themes.NeutralColors.grey}
        onSubmitEditing={() => onSubmit()}
        onChangeText={text => {
          setSearchKey(text);
          findProduct(text);
        }}
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '250@s',
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
});

export default FormSearch;
