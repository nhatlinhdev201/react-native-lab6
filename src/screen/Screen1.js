//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

// create a component
const Screen1 = ({route, navigation}) => {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    width: 351,
                    height: 87,
                    marginTop: 40,
                    textAlign: 'center',
                    fontSize: 26,
                    fontWeight: 400,
                    lineHeight: 26,
                }}
            >
                A premium online store for sporter and their stylish choice
            </Text>
            <View
                style={{
                    backgroundColor: '#E941411A',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '95%',
                    padding: 50,
                    borderRadius: 25
                }}
            >
                <Image
                    source={require('../../assets/bike1.png')}
                    style={{
                        width: 292,
                        height: 270
                    }}
                />
            </View>
            <Text
                style={{
                    width : 200,
                    height : 61,
                    fontFamily: 'Ubuntu',
                    fontWeight : 700,
                    fontSize : 26,
                    lineHeight : 29,
                    textAlign : 'center',
                    backgroundImage : 'linear-gradient(0deg, #FFFFFF, #FFFFFF)',
                    marginTop : 20
                }}
            >
                POWER BIKE SHOP
            </Text>
            <Pressable
                style={{
                    backgroundColor : '#E94141',
                    width : '90%',
                    padding : 15,
                    borderRadius : 15,
                    marginTop : 10
                }}
                onPress={()=>{
                    navigation.navigate('Screen2')
                }}
            >
                <Text
                    style={{
                        color : 'white',
                        fontWeight : 400,
                        fontSize : 27,
                        textAlign : 'center',
                        lineHeight : 27
                    }}
                >
                    Get Started
                </Text>
            </Pressable>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Screen1;
