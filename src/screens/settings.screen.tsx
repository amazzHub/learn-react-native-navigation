import { StyleSheet, View, Text } from 'react-native';

type Props = {

}

export const SettingsScreen: React.FC<Props> = (props) => {

    return <View style={styles.container}>
        <Text>Settings Screen</Text>
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