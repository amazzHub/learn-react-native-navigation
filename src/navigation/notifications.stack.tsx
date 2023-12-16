import { createStackNavigator } from '@react-navigation/stack';
import { NotificationsScreen } from '../screens/notifications.screen';

const Stack = createStackNavigator();

export const NotificationsStack = () => {

    return <Stack.Navigator>
        <Stack.Screen options={{ headerLeft: () => <></> }} name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>;
}