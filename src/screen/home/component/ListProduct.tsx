import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ItemProduct from '../../../component/item/ItemProduct'
import { flashSale } from '../list/ListProduct'
import ViewTittle from './ViewTittle'
import { ScaledSheet } from 'react-native-size-matters';
import { windowWidth, windowHeight } from '../../../utilities/size';

const ListProduct = (props) => {

    const { tittle, more, arr } = props
    const list = arr ? arr : []
    return (
        <View style={styles.flashSale}>
            <ViewTittle tittle={tittle} more={more} />
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {list.map((item, index) => (
                    <ItemProduct
                        key={`${index}`}
                        image={item.images}
                        name={item.name}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        percent={item.percent}
                    />
                ))}
            </ScrollView>

        </View>
    )
}


const styles = ScaledSheet.create({
    flashSale: {
        paddingLeft: '16@s',
        height: '260@vs',
        marginBottom: windowHeight * 0.01,
    }
})

export default ListProduct
