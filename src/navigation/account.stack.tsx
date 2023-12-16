import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../screens/account.screen';

const Stack = createStackNavigator();

export const AccountStack = () => {

    return <Stack.Navigator>
        <Stack.Screen options={{ headerLeft: () => <></> }} name="Account" component={AccountScreen} />
    </Stack.Navigator>;
};
