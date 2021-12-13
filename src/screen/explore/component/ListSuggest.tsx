import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {Themes} from '../../../assets/themes';
import {sortArrayProductByRate} from '../../../utilities/format';
import {windowHeight, windowWidth} from '../../../utilities/size';
import {REGEX_SALARY} from '../../../utilities/staticData';

const ItemSuggest = (props: any) => {
  const {item, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.itemView}>
      <Text style={styles.textSuggest}>{item}</Text>
    </TouchableOpacity>
  );
};

const ListSuggest = (props: any) => {
  const {listSuggest = [], setSearchKey, searchByTextSuggest} = props;
  const [list, setList] = useState(listSuggest);

  useEffect(() => {
    setList(listSuggest);
  }, [listSuggest]);
  return (
    <View style={styles.container}>
      {sortArrayProductByRate(list).map(item => (
        <ItemSuggest
          key={item}
          onPress={() => setSearchKey(item)}
          item={item}
        />
      ))}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    height: windowHeight * 0.5,
    width: windowWidth,
  },
  itemView: {
    height: '50@vs',
    width: '100%',
    backgroundColor: Themes.BackgroundColor.white,
    justifyContent: 'center',
    paddingLeft: '16@s',
  },
  textSuggest: {
    fontSize: '12@ms0.3',
    fontWeight: '400',
    color: Themes.NeutralColors.grey,
  },
});

export default ListSuggest;
