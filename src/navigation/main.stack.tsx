import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../screens/login.screen';
import { BottomTab } from './bottom.tab';

const Stack = createStackNavigator();

export const MainStack: React.FC = () => {

    return <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
    </NavigationContainer>;
}