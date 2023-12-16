import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { colors } from '../constants/colors';

type Props = {
    navigation: StackNavigationProp<ParamListBase>;
}

export const LoginScreen: React.FC<Props> = (props) => {

    const handleLogin = () => {
        props.navigation.reset(
            {
                index: 0,
                routes: [{ name: 'BottomTab' }],
            }
        );
    };

    return <View style={styles.container}>
        <Text style={styles.title}>React Native Navigation</Text>
        <View style={styles.subContainer}>
            <Pressable onPress={handleLogin} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
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
        },
        buttonContainer: {
            backgroundColor: colors.primary,
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 5,
        },
        buttonText: {
            fontWeight: 'bold',
            fontSize: 18,
            color: 'white',
        }
    }
);