import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image as DefaultImage,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Images from '../../assets/images';
import {Themes} from '../../assets/themes';
import Header from '../../component/header/Header';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import ItemServiceNotification from './component/ItemServiceNotification';

const listService = [
  {
    id: 1,
    title: 'Offer',
    icon: Images.icon.offer,
    navigateName: TAB_NAVIGATION_ROOT.HOME_ROUTE.OFFER,
  },
  {
    id: 2,
    title: 'Feed',
    icon: Images.icon.feed,
    navigateName: TAB_NAVIGATION_ROOT.HOME_ROUTE.FEED,
  },
  {
    id: 3,
    title: 'Activity',
    icon: Images.icon.notifications,
    navigateName: TAB_NAVIGATION_ROOT.HOME_ROUTE.ACTIVITY,
  },
];

const Notification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <DefaultImage style={styles.iconHeader} source={Images.icon.back} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.textHeader}>
          Notification
        </Text>
      </Header>

      <View style={styles.content}>
        {listService.map((item, index) => (
          <ItemServiceNotification
            key={`${index}`}
            icon={item.icon}
            title={item.title}
            navigateName={item.navigateName}
          />
        ))}
      </View>
    </View>
  );
};

export default Notification;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
  },
  iconHeader: {
    width: '6@s',
    height: '12@vs',
    resizeMode: 'contain',
    marginRight: '21@s',
  },
  textHeader: {
    fontSize: '16@ms0.3',
    fontWeight: '700',
    color: Themes.NeutralColors.Dark,
    marginRight: '20@s',
  },
  content: {flex: 1},
});
