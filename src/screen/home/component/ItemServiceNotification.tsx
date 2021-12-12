import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Images from '../../../assets/images';
import {Themes} from '../../../assets/themes';

interface ItemServiceNotificationProps {
  title: string;
  icon: any;
  navigateName: string;
}
const ItemServiceNotification = (props: ItemServiceNotificationProps) => {
  const {title, icon, navigateName} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigateName)}
      style={styles.container}>
      <View style={styles.leftRow}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>2</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '56@vs',
    flexDirection: 'row',
    paddingHorizontal: '16@s',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: '20@s',
    height: '20@vs',
    resizeMode: 'contain',
    marginRight: '16@s',
  },
  title: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
  },
  badge: {
    height: '20@s',
    width: '20@s',
    backgroundColor: Themes.PrimaryColor.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30@s',
  },
  badgeText: {
    fontSize: '12@ms0.3',
    fontWeight: '700',
    color: Themes.BackgroundColor.white,
  },
  leftRow: {flexDirection: 'row', alignItems: 'center'},
});

export default ItemServiceNotification;
