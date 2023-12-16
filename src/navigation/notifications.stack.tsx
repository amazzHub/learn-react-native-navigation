import { createStackNavigator } from '@react-navigation/stack';
import { NotificationsScreen } from '../screens/notifications.screen';
import { PostScreen } from '../screens/post.screen';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const Stack = createStackNavigator();

export const NotificationsStack = () => {

    return <Stack.Navigator
        screenOptions={
            ({ navigation }) => (
                {
                    headerLeft: () => <Pressable onPress={navigation.goBack} style={{ marginLeft: 16 }}>
                        <Ionicons name="arrow-back" size={27} color={colors.primary} />
                    </Pressable>
                }
            )
        }
    >
        <Stack.Screen options={{ headerLeft: () => <></> }} name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>;
}