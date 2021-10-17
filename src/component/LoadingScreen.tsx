import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const LoadingScreen = () => {
    return (
        <View style={styles.wrapContainer}>
            <View style={styles.square}>
                    <ActivityIndicator color="blue" size={50} />
            </View>
        </View>
    )
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    square: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 13,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    wrapContainer: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },

});
