import { StyleSheet, View, Text, Image, Button, Pressable } from 'react-native';
import { TopTab } from '../navigation/top.tab';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { colors } from '../constants/colors';

type Props = {
    navigation: StackNavigationProp<ParamListBase>;
}

export const AccountScreen: React.FC<Props> = (props) => {

    const handleLogOut = () => {
        props.navigation.reset(
            {
                index: 0,
                routes: [{ name: 'Login' }],
            }
        );
    }

    return <View style={styles.container}>
        <Pressable onPress={handleLogOut} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Log out</Text>
        </Pressable>
        <View style={styles.headerContainer}>
            <Image style={styles.profilePicture} source={{ uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' }} />
            <Text style={styles.name}>John Doe</Text>
        </View>
        <TopTab />
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        headerContainer: {
            alignItems: 'center',
            paddingVertical: '6%',
        },
        profilePicture: {
            width: 100,
            height: 100,
            borderRadius: 50,
        },
        name: {
            fontSize: 25,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 12,
        },
        buttonContainer: {
            position: 'absolute',
            backgroundColor: colors.coral,
            right: 15,
            top: 15,
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 5,
            zIndex: 2,
            elevation: 2,
        },
        buttonText: {
            fontWeight: 'bold',
            fontSize: 15,
            color: 'white',
        }
    }
);