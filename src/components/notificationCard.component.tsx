import { StyleSheet, View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    onPress: () => void;
}

export const NotificationCard: React.FC<Props> = ({ onPress }) => {

    return <Pressable style={styles.card} onPress={onPress}>
        <MaterialIcons name="post-add" size={26} color="#00aaff" />
        <View style={styles.textContainer}>
            <Text style={styles.title}>New Like</Text>
            <Text style={styles.body}>Joe liked the post you published yesterday.</Text>
        </View>
    </Pressable>
};

const styles = StyleSheet.create(
    {
        card: {
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginVertical: 8,
        },
        textContainer: {
            marginLeft: 16,
        },
        title: {
            color: '#00aaff',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 4,
        },
        body: {
            color: '#333',
            fontSize: 14,
        },
    }
);