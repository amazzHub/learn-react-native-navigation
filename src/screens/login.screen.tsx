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
        <Text style={styles.title}>React Native Navigation</Text>
        <View style={styles.subContainer}>
            <Button title='Log in' onPress={handleLogin} />
        </View>
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingTop: '25%',
            alignItems: 'center',
        },
        subContainer: {
            flex: 1,
            justifyContent: 'center'
        },
        title: {
            fontSize: 35,
            marginBottom: 25,
            color: 'black',
        }
    }
);