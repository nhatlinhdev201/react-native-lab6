import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Screen1 from './src/screen/Screen1';
import Screen2 from './src/screen/Screen2';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Screen1'>
                <Stack.Screen
                    name='Screen1'
                    component={Screen1}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Screen2'
                    component={Screen2}
                    options={{
                        headerTitle: 'title',
                        headerLeft: () => (
                            <Pressable
                                onPress={() => navigation.navigate('Screen1')}
                                style={{
                                   flexDirection : 'row',
                                   justifyContent : 'center',
                                   alignItems : 'center'
                                }}
                            >
                                <ArrowBackIcon />
                                <Text>Back</Text>
                            </Pressable>
                        ),
                        headerTitle: () => (
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    textAlign : 'center',
                                }}>
                                Chi tiết
                            </Text>
                        ),
                        headerRight: () => (
                            <Pressable
                                onPress={() => {}}
                                style={{
                                    flexDirection : 'row',justifyContent : 'center',
                                    alignItems : 'center'
                                }}
                            >
                                <Text>Next</Text>
                                <ArrowForwardIcon />
                            </Pressable>
                        ),
                    }}
                />
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