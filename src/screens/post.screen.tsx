import { StyleSheet, View, Text } from 'react-native';

type Props = {

}

export const PostScreen: React.FC<Props> = (props) => {

    return <View style={styles.container}>
        <Text>Post Screen</Text>
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