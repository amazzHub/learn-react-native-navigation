import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainStack } from './src/navigation/main.stack';

const App: React.FC = () => {
    return <View style={styles.container}>
        <MainStack />
        <StatusBar style="auto" />
    </View>;
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
    }
);

export default App;
