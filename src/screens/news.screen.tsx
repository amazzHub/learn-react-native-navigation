import { StyleSheet, View, Text } from 'react-native';

type Props = {

}

export const NewsScreen: React.FC<Props> = (props) => {

    return <View style={styles.container}>
        <Text>News Screen</Text>
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