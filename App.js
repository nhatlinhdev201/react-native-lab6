import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './src/screen/Screen1';
import Screen2 from './src/screen/Screen2';

const Stack = createNativeStackNavigator();
export default function App() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Screen1'>
                <Stack.Screen name='Screen1' component= {Screen1} options={{headerShown : false}}/>
                <Stack.Screen name='Screen2' component={Screen2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});