import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const OrderSuccessScreen = (props: any) => {
  return (
   <View style={styles.container}>
       <Text>
           TAB_NAVIGATION_ROOT.CART_ROUTE.ORDER_SUCCESS
        </Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
   flex: 1,
  },
 
});

export default OrderSuccessScreen;