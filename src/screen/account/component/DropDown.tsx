import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Images from '../../../assets/images';
import {Themes} from '../../../assets/themes';
import {windowWidth} from '../../../utilities/size';

const DropDown = (props: any) => {
  const {setHideDropDown, hideDropDown, value, setSelectedItem, data, label} =
    props;
  const Item = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedItem(item);
        setHideDropDown(false);
      }}
      activeOpacity={0.5}
      style={styles.item}>
      <Text style={styles.title}>{item.text || item}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.viewInputCity}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setHideDropDown(!hideDropDown)}
        style={styles.viewCityValue}>
        <Text style={styles.city}>{value}</Text>
        <Image source={Images.icon.dropdown} style={styles.iconDropDown} />
      </TouchableOpacity>
      {hideDropDown ? (
        <View style={styles.viewDropDownCity}>
          <FlatList
            data={data}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.text}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = ScaledSheet.create({
  viewInputCity: {
    marginBottom: '24@vs',
  },
  label: {
    fontSize: '14@ms0.3',
    color: Themes.NeutralColors.Dark,
    fontWeight: '700',
    marginBottom: '12@vs',
  },
  viewCityValue: {
    width: windowWidth - scale(32),
    height: '48@vs',
    borderWidth: 1,
    borderColor: Themes.NeutralColors.light,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '16@s',
    justifyContent: 'space-between',
  },
  city: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.grey,
  },
  iconDropDown: {
    resizeMode: 'contain',
    width: '12@s',
    height: '12@vs',
  },
  item: {
    width: windowWidth - scale(32),
    height: '48@vs',
    justifyContent: 'center',
    paddingHorizontal: '16@s',
  },
  title: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.grey,
  },
  viewDropDownCity: {
    width: windowWidth - scale(32),
    height: '400@vs',
    marginTop: '5@vs',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Themes.NeutralColors.light,
  },
});

export default DropDown;
