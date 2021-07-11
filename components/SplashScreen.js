import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SplashScreen() {
    return (
        <View>
            <Image source={require('../assets/Images/SplashScreen.png')} />
        </View>
    )
}


