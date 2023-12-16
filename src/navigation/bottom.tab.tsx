import { useEffect, useState } from 'react';
import { EmitterSubscription, Keyboard, Platform, StyleSheet, View, SafeAreaView, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { AccountStack } from './account.stack';
import { NotificationsStack } from './notifications.stack';
import { HomeDrawer } from './drawer/home.drawer';

const Tab = createBottomTabNavigator();

const firstScreen: any = {
    HomeDrawer: 'Home',
    NotificationsStack: 'Notifications',
    AccountStack: 'Account',
};


const TabElement = ({ tab, onPress, selectedTab }: any) => {

    let iconColor = colors.inactive;
    let icon;

    if (selectedTab === tab.name) {
        iconColor = colors.primary;
    }

    if (tab.name === 'HomeDrawer') {
        icon = <Feather name="home" size={24} color={iconColor} />;
    } else if (tab.name === 'NotificationsStack') {
        icon = <Ionicons name="notifications-outline" size={26} color={iconColor} />
    } else if (tab.name === 'AccountStack') {
        icon = <AntDesign name="user" size={24} color={iconColor} />
    }

    return (
        <Pressable style={styles.elementContainer} onPress={onPress}>
            {icon}
        </Pressable>
    );
};

const TabBar = ({ state }: any) => {

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const [visible, setVisible] = useState(true);
    const [selectedTab, setSelectedTab] = useState('HomeStack');
    const { routes }: any = state;
    const { index } = state;
    const tabScreenNames = routes.map((route: any) => route.name);

    useEffect(
        () => {
            setSelectedTab(tabScreenNames[index]);
        },
        [index]
    );

    useEffect(
        () => {
            let keyboardEventListeners: EmitterSubscription[];
            if (Platform.OS === 'android') {
                keyboardEventListeners = [
                    Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
                    Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
                ];
            }
            return () => {
                if (Platform.OS === 'android') {
                    keyboardEventListeners &&
                        keyboardEventListeners.forEach((eventListener: EmitterSubscription) => eventListener.remove());
                }
            };
        },
        []
    );

    if (Platform.OS === 'android' && !visible) {
        return null;
    }

    function navigate(screenName: string) {
        if (selectedTab === screenName) {
            navigation.navigate(selectedTab, { screen: firstScreen[selectedTab] });
        } else {
            navigation.navigate(screenName);
        }
    }

    return <SafeAreaView >
        <View style={styles.tabsContainer}>
            {
                routes.slice(0, 2).map(
                    (route: any) => (
                        <TabElement
                            tab={route}
                            onPress={() => navigate(route.name as string)}
                            selectedTab={selectedTab}
                            key={route.key} />

                    )
                )
            }
            {
                routes.slice(2).map(
                    (route: any) => (
                        <TabElement
                            tab={route}
                            onPress={() => navigate(route.name as string)}
                            selectedTab={selectedTab}
                            key={route.key}
                            navigation={navigation} />
                    )
                )
            }
        </View>
    </SafeAreaView>;
};

export const BottomTab = (): JSX.Element => {

    return <Tab.Navigator initialRouteName='HomeDrawer' screenOptions={{ headerShown: false }} tabBar={(props: any) => <TabBar {...props} />}>
        <Tab.Screen name="HomeDrawer" component={HomeDrawer} />
        <Tab.Screen name="NotificationsStack" component={NotificationsStack} />
        <Tab.Screen name="AccountStack" component={AccountStack} />
    </Tab.Navigator>;
};

const styles = StyleSheet.create(
    {
        tabsContainer: {
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        elementContainer: {
            padding: 6,
            alignItems: 'center',
        },
    }
);