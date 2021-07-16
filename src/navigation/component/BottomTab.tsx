/* eslint-disable import/no-unresolved */
import React, { FunctionComponent } from 'react';
import { Platform, View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { Themes } from '../../assets/themes';
import { ScaledSheet } from 'react-native-size-matters';

const StyledTabBar: FunctionComponent<any> = ({
    state,
    descriptors,
    navigation,
}: any) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        accessibilityRole="button"
                        onPress={onPress}
                        onLongPress={onLongPress}
                        key={route.key}
                        style={styles.tabButton}
                    >
                        <Image
                            source={options?.icon}
                            style={[
                                styles.tabIcon,
                                { tintColor: isFocused ? Themes.PrimaryColor.blue : Themes.NeutralColors.grey },
                            ]}
                        />
                        <Text style={[
                            styles.tabLabel,
                            { color: isFocused ? Themes.PrimaryColor.blue : Themes.NeutralColors.grey },
                        ]}>{options?.title}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = ScaledSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Themes.BackgroundColor.white,
        height: '10%',
        borderTopColor: Themes.NeutralColors.light,
        borderTopWidth: 1,

    },
    tabButton: {
        borderRadius: 50,
        alignItems: 'center',
        width: '20%',
        marginBottom: '10@vs'
    },
    tabIcon: {
        width: '24@s',
        height: '24@vs',
        resizeMode: 'contain',
    },
    tabLabel: {
        fontSize: '12@ms0.3',
        textAlign: 'center',
        marginTop: '5@vs',
        fontWeight: '400'
    },
});

export default StyledTabBar;
