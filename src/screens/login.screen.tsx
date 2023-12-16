import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, Text, Pressable, Button } from 'react-native';

type Props = {
    navigation: StackNavigationProp<ParamListBase>;
}

export const LoginScreen: React.FC<Props> = (props) => {

    const handleLogin = () => {
        props.navigation.push('BottomTab');
    }

    return <View style={styles.container}>
        <Button title='Log in' onPress={handleLogin} />
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
);