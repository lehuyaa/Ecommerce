import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Themes } from '../../assets/themes';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.BackgroundColor.white,
        flex: 1,
    }
})
export default HomeScreen;
