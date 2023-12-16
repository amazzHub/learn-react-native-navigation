import { StyleSheet, View } from 'react-native';
import { NotificationCard } from '../components/notificationCard.component';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';

type Props = {
    navigation: StackNavigationProp<ParamListBase>;
}

export const NotificationsScreen: React.FC<Props> = (props) => {

    const goToNotificationDetails = () => {
        props.navigation.push('Post')
    };

    return <View style={styles.container}>
        <NotificationCard onPress={goToNotificationDetails} />
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 16,
        }
    }
);