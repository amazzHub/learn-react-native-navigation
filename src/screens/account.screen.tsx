import { StyleSheet, View, Text } from 'react-native';

type Props = {

}

export const AccountScreen: React.FC<Props> = (props) => {

    return <View style={styles.container}>
        <Text>Account Screen</Text>
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
);