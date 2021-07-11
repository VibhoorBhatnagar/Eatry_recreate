import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { RectButton } from 'react-native-gesture-handler';
import MainScreen from '../components/MainScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name = "MainScreen"
                component = {MainScreen}
                options = {{
                    tabBarIcon: ({focused}) => (
                       focused ? <Image source={require('../assets/Icons/cutlery-Selected.png')}/>
                       : <Image source={require('../assets/Icons/cutlery.png')}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}


// const TabBarCustomButton = ({accessibilityState, children, OnPress}) => {
//     var isSelected = accessibilityState.selected

//     if (isSelected) {
//         return(
//             <View style={styles.container}>
//                 <View style={styles.}></View>
//             </View>
//         )
//     } else {
        
//     }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
})

export default TabNavigationState;