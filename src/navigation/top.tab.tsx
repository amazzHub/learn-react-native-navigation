import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../constants/colors';
import { PostScreen } from '../screens/post.screen';
import { BookmarksScreen } from '../screens/bookmarks.screen';

const Tab = createMaterialTopTabNavigator();

export const TopTab: React.FC = () => {

    return <Tab.Navigator
        screenOptions={
            {
                tabBarIndicatorStyle: { backgroundColor: colors.primary },
                tabBarStyle: { marginTop: 0 },
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { fontWeight: 'bold' },
                tabBarInactiveTintColor: '#c1c1c1',
            }
        }
    >
        <Tab.Screen name="Posts" component={PostScreen} />
        <Tab.Screen
            options={
                {
                    title: 'Bookmarks',
                }
            }
            name="Bookmarks"
            component={BookmarksScreen} />
    </Tab.Navigator>;
}