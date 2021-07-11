import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Profiler } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './components/SplashScreen';
import MainScreen from './components/MainScreen';
import Profile from './components/Profile';
import Order from './components/Order';
// import TabNavigation from './navigation/TabNavigation';

const Stack = createStackNavigator();

// const App = () => {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName={'MainScreen'}>

//         <Stack.Screen name="TabNavigation" component={TabNavigation}/>
//         <Stack.Screen name="MainScreen" component={MainScreen}/>
//         <Stack.Screen name="Profile" component={Profile}/>
//         <Stack.Screen name="Order" component={Order}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
  
// }

export default function App() {
  const [state, setState] = useState({
    Visible: true,
  });

  useEffect(() => {
    setTimeout(function () {
      HideLandingScreen();
    }, 5000);
  }, [])

  HideLandingScreen = () => {
    setState({ ...state, Visible: false });
  }
  
  return (
    <View style={styles.container}>
      {/* <View>
        {state.Visible === true ? <SplashScreen/> : <MainScreen />}
      </View> */}
      {/* <Profile/> */}
      <Order/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
