import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Orders() {
    return (
        <View style={styles.contailer}>
            <View style={styles.header}>
                <FontAwesome name="arrow-left" size={24} color="black" style={styles.icon1} />
                <View style={styles.location}>
                    <Text style={{ fontSize: 18, fontWeight: '900', }}>Burgers Story</Text>
                </View>
                <FontAwesome name="list-ul" size={24} color="black" style={styles.icon2} />
            </View>

            <View style={styles.orderContainer}>
                <View>
                    <Image source={require('../assets/Images/tomato-pasta.png')} />
                    <View style={styles.quantityContainer}>
                        <View style={styles.quantityText}>
                            <FontAwesome name="minus" size={20} color="lightgray" />
                            <Text style={{ paddingHorizontal: 25, fontSize: 20, fontWeight: 'bold', }}>1</Text>
                            <FontAwesome name="plus" size={20} />
                        </View>
                    </View>
                </View>
                <Text style={styles.orderText}>Tomato Pasta - $12.35</Text>
                <Text style={styles.orderDiscription}>Italian pasta with tomatoes, provencal</Text>
                <Text style={styles.orderDiscription}>herbs and basil</Text>
                <View style={styles.caloriesContainer}>
                    <Image source={require('../assets/Icons/flame.png')}/>
                    <Text style={styles.caloriesText}>380.13 cal</Text>
                </View>
            </View>
 
            <View style={styles.cartContainer}>
                <View style={styles.orderCard}>
                    <View style={styles.cartItems}>
                        <Text style={styles.cartText}>4 Items in Cart</Text>
                        <Text style={styles.cartText}>$46.98</Text>
                    </View>
                    <View style={styles.cartItems}>
                        <View style={styles.locaionText}>
                            <Image source={require('../assets/Icons/pin.png')} style={styles.orderIcons}/>
                            {/* <FontAwesome name="map-pin" size={20} color="lightgray" style={{paddingRight: 15,}}/> */}
                            <Text style={styles.cartLocationText}>745 Lincoin PI</Text>
                        </View>
                        <View style={styles.payment}>
                            <Image source={require('../assets/Icons/mastercard.png')} style={styles.orderIcons}/>
                            {/* <FontAwesome name="cc-mastercard" size={20} color="lightgray" style={{paddingRight: 15, paddingTop: 3}}/> */}
                            <Text style={styles.cartLocationText}>•••• 5491</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnOrder}>
                        <Text style={styles.btnText}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <StatusBar />
        </View>
    )
}

const styles = StyleSheet.create({
    contailer: {
        flex: 1,
        backgroundColor: '#f9f9fa',
    },
    header: {
        paddingTop: 20,
        paddingBottom: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    location: {
        width: 200,
        height: 40,
        backgroundColor: '#eee',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon1: {
        marginRight: 50,
    },
    icon2: {
        marginLeft: 50,
    },
    orderContainer: {
        paddingTop: 40,
        alignItems: 'center',
    },
    quantityContainer: {
        position: 'absolute',
        paddingTop: 220,
        paddingLeft: 60,
    },
    quantityText: {
        padding: 20,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderRadius: 50,
        elevation: 8,
    },
    orderText: {
        paddingTop: 40,
        paddingBottom: 10,
        fontWeight: 'bold',
        fontSize: 25,
    },
    orderDiscription: {
        fontSize: 17,
    },
    caloriesContainer: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    caloriesText: {
        paddingLeft: 5,
        paddingTop: 3,
        color: 'darkgray',
        fontSize: 17,
    },
    cartContainer: {
        paddingTop: 40,
        width: 410,
    },
    orderCard: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 30,
        
    },
    cartItems: {
        padding: 15,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#eee',
    },
    cartText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cartLocationText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    orderIcons: {
        width: 20,
        height: 20,
        tintColor: 'lightgray',
        marginRight: 10,
    },
    locaionText: {
        flexDirection: 'row',
    },
    payment: {
        flexDirection: 'row',
    },
    btnOrder: {
        backgroundColor: '#fa6e3c',
        padding: 15,
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
    },
})