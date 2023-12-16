import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home.screen';

const Stack = createStackNavigator();

export const HomeStack = () => {

    return <Stack.Navigator>
        <Stack.Screen options={{ headerLeft: () => <></> }} name="Home" component={HomeScreen} />
    </Stack.Navigator>;
}