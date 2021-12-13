import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image as DefaultImage,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { getNotification } from '../../api/modules/api-app/order';
import { store } from '../../app-redux/store';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import Header from '../../component/header/Header';
import LoadingScreen from '../../component/LoadingScreen';
import { TAB_NAVIGATION_ROOT } from '../../navigation/config/routes';
import ItemServiceNotification from './component/ItemServiceNotification';



const Notification = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [listNotification, setListNotification] = useState([]);
  const isFocus = useIsFocused();
  const { userInfo } = store.getState();

  const listService = [
    // {
    //   id: 1,
    //   title: 'Offer',
    //   icon: Images.icon.offer,
    //   navigateName: TAB_NAVIGATION_ROOT.HOME_ROUTE.OFFER,
    // },
    // {
    //   id: 2,
    //   title: 'Feed',
    //   icon: Images.icon.feed,
    //   navigateName: TAB_NAVIGATION_ROOT.HOME_ROUTE.FEED,
    // },
    {
      id: 3,
      title: 'Activity',
      icon: Images.icon.notifications,
      navigateName: TAB_NAVIGATION_ROOT.HOME_ROUTE.ACTIVITY,
      lengthList: listNotification.length,
    },
  ];
  const navigate = (navigateName: string) => {
    navigation.navigate(navigateName, { listNotification })
  }
  const getListNotification = async () => {
    setLoading(true);

    try {
      const response: any = await getNotification();
      setLoading(false);
      setListNotification(response?.data.filter(noti => noti.ideReceiver === userInfo?.user?.id));
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isFocus) {
      getListNotification();
    }
  }, [isFocus]);
  return (
    <View style={styles.container}>
      {loading && <LoadingScreen />}

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
            onPress={() => navigate(item.navigateName)}
            lengthList={item.lengthList}

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
  content: { flex: 1 },
});
