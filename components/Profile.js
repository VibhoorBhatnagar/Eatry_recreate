import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Icons from '@expo/vector-icons/FontAwesome5';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.profileCard} >
                <Image source={require('../assets/Images/profileImage.png')} style={styles.profilePic} />
                <View style={styles.profileText}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.nameText}>Mr. Neeraj</Text>
                </View>

            </View>
            <View style={styles.list}>
                <TouchableOpacity style={styles.menuList}>
                    <Image source={require('../assets/Icons/UserIconCopy.png')} style={styles.icon}></Image>
                    <Text style={styles.menuText}>My Account</Text>
                    <Icons name="chevron-right" size={20} color={'#7d7d7f'} style={{paddingLeft:5,}}></Icons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuList}>
                    <Image source={require('../assets/Icons/Bell.png')} style={styles.icon}></Image>
                    <Text style={styles.menuText}>Notifications</Text>
                    <Icons name="chevron-right" size={20} color={'#7d7d7f'} style={{paddingLeft:8,}}></Icons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuList}>
                    <Image source={require('../assets/Icons/Settings.png')} style={styles.icon}></Image>
                    <Text style={styles.menuText}>Settings</Text>
                    <Icons name="chevron-right" size={20} color={'#7d7d7f'}></Icons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuList}>
                    <Image source={require('../assets/Icons/orders.png')} style={styles.icon}></Image>
                    <Text style={styles.menuText}>Orders</Text>
                    <Icons name="chevron-right" size={20} color={'#7d7d7f'}></Icons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuList}>
                    <Image source={require('../assets/Icons/Log_out.png')} style={styles.icon}></Image>
                    <Text style={styles.menuText}>Log Out</Text>
                    <Icons name="chevron-right" size={20} color={'#7d7d7f'}></Icons>
                </TouchableOpacity>
            </View>
            <View style={styles.helpCard}>
                <Image source={require('../assets/Icons/Question_mark.png')}></Image>
                <Text style={styles.helpText}>How can we help you</Text>
            </View>
                
        </View>
            
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9fa',

    },
    profileHeader: {
        height: 50,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    profileCard: {
        height: 100,
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 30,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    profilePic: {
        marginTop: 15,
        paddingBottom: 15,
    },
    profileText: {
        marginLeft: 20,
        paddingTop: 20,
    },
    welcomeText: {
        fontSize: 19,
        color: '#7d7d7f',
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 15,
    },
    menuList: {
        padding: 12.5,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#f9f9fa',
        marginBottom: 35,
    },
    icon: {
      
    },
    menuText: {
        width: '80%',
        fontSize: 20.5,
        color: '#7d7d7f',
        paddingLeft: 20,
    },
    button: {
        marginBottom: 20,
        padding: 30
    },
    menuCard: {
        width: '50%',
    },
    helpCard: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBDCD1',
        paddingHorizontal: 25,
        borderRadius: 20,
        flexDirection: 'row',
    },
    helpText: {
        color: '#fa685a',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
    },

});
