import { createDrawerNavigator } from '@react-navigation/drawer';
import { NewsScreen } from '../../screens/news.screen';
import { SettingsScreen } from '../../screens/settings.screen';
import { DrawerContent } from './drawerContent.component';
import { FeedScreen } from '../../screens/feed.screen';
import { SimpleLineIcons, FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { Pressable } from 'react-native';

const Drawer = createDrawerNavigator();

export const HomeDrawer: React.FC = () => {

    return <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={
            {
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: '#333',
                drawerActiveBackgroundColor: colors.primary,
                drawerInactiveBackgroundColor: '#fff',
            }
        }
    >

        <Drawer.Screen
            options={
                ({ navigation }) => (
                    {
                        headerLeft: () => (
                            <Pressable style={{ marginLeft: 16 }} onPress={() => { navigation.openDrawer() }}>
                                <Feather name="menu" size={24} color="black" />
                            </Pressable>
                        ),
                        drawerIcon: ({ size, color }) => (
                            <SimpleLineIcons name="feed" size={size} color={color} />
                        ),
                        title: 'Feed',
                        headerTitleStyle: { color: 'black' }
                    }
                )
            }
            name="Feed"
            component={FeedScreen}
        />
        <Drawer.Screen
            options={
                {
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome name="newspaper-o" size={size} color={color} />
                    ),
                    title: 'News',
                    headerTitleStyle: { color: 'black' }
                }
            }
            name="News"
            component={NewsScreen}
        />
        <Drawer.Screen
            options={
                {
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                    title: 'Settings',
                    headerTitleStyle: { color: 'black' }
                }
            }
            name="Settings"
            component={SettingsScreen}
        />
    </Drawer.Navigator>;
};
