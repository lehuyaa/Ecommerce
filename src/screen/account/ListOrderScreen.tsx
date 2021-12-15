import {useIsFocused, useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {getOrderByUserId} from '../../api/modules/api-app/order';
import {store} from '../../app-redux/store';
import IconBack from '../../assets/icons/IconBack';
import {Themes} from '../../assets/themes';
import ButtonIcon from '../../component/button/ButtonIcon';
import Header from '../../component/header/Header';
import LoadingScreen from '../../component/LoadingScreen';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import ItemOrder from './component/ItemOrder';

interface ListOrderScreenNameProps {}

const ListOrderScreen = (props: ListOrderScreenNameProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const {userInfo} = store.getState();
  const [listOrder, setListOrder] = React.useState<any>([]);
  const navigation = useNavigation();
  const isFocus = useIsFocused();

  const getAllOrderFunc = async () => {
    setLoading(true);

    try {
      const response = await getOrderByUserId(userInfo?.user?.id);
      setListOrder(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isFocus) {
      getAllOrderFunc();
    }
  }, [isFocus]);
  const listItemOrder = [
    {
      id: 1,
      name: 'Packing',
      list: listOrder.filter(item => item.statusOrder.id === 1),
    },
    {
      id: 2,
      name: 'Shipping',
      list: listOrder.filter(item => item.statusOrder.id === 2),
    },
    {
      id: 3,
      name: 'Success',
      list: listOrder.filter(item => item.statusOrder.id === 3),
    },
  ];

  return (
    <View style={styles.container}>
      {loading && <LoadingScreen />}
      <Header customStyle={styles.customHeader}>
        <View style={styles.leftHeader}>
          <ButtonIcon
            onPress={() => {
              navigation.navigate(TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ROOT);
            }}
            children={
              <IconBack height={verticalScale(24)} width={verticalScale(24)} />
            }
          />
          <Text style={styles.textHeader}>Order</Text>
        </View>
      </Header>
      <ScrollView
        contentContainerStyle={styles.contentScroll}
        style={styles.viewMain}>
        {listItemOrder.reverse().map(item =>
          // <ItemOrder key={item.id} item={item} />
          item.list.length > 0 ? (
            <>
              <Text style={styles.title}>{item.name}</Text>
              <FlatList
                data={item?.list}
                renderItem={({item}) => <ItemOrder item={item} />}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </>
          ) : null,
        )}
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.BackgroundColor.white,
  },
  customHeader: {
    justifyContent: 'space-between',
  },
  textHeader: {
    fontWeight: '700',
    fontSize: '16@vs',
    color: Themes.NeutralColors.Dark,
    marginLeft: '12@s',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewMain: {
    paddingTop: '16@vs',
    paddingHorizontal: '16@s',
  },
  contentScroll: {
    paddingBottom: '100@vs',
  },
  title: {
    fontSize: '14@ms0.3',
    color: Themes.NeutralColors.Dark,
    fontWeight: '700',
    marginBottom: '15@vs',
  },
});

export default ListOrderScreen;
