import { StyleSheet, View, Text, Image } from 'react-native';
import { TopTab } from '../navigation/top.tab';

type Props = {

}

export const AccountScreen: React.FC<Props> = (props) => {

    return <View style={styles.container}>
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
        }
    }
);