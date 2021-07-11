import React from 'react';
import { Viwe, Text, StyleSheet, View, Image, TextComponent, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function MainScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/Icons/locate-user.png')} style={styles.icon1} />
                <View style={styles.location}>
                    <Text style={{ fontSize: 18, fontWeight: '900', }}>745 Lincoin PI</Text>
                </View>
                <Image source={require('../assets/Icons/shopping-cart.png')} style={styles.icon2} />
            </View>

            <ScrollView>

                <View style={styles.heading}>
                    <Text style={styles.headingText}>Main</Text>
                    <Text style={styles.headingText}>Categories</Text>
                </View>

                <View style={styles.category}>
                    <TouchableOpacity style={styles.foodIcons}>
                        <View style={styles.iconPadding}>
                            <Image source={require('../assets/Icons/food-Icons/hamburger.png')} style={styles.foodicon} />
                        </View>
                        <View style={styles.inner}>
                            <Text style={styles.iconText}>Burgers</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foodIcons}>
                        <View style={styles.iconPadding}>
                            <Image source={require('../assets/Icons/food-Icons/pizza-slice.png')} style={styles.foodicon} />
                        </View>
                        <View style={styles.inner}>
                            <Text style={styles.iconText}>Pizza</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foodIcons}>
                        <View style={styles.iconPadding}>
                            <Image source={require('../assets/Icons/food-Icons/fried-potatoes.png')} style={styles.foodicon} />
                        </View>
                        <View style={styles.inner}>
                            <Text style={styles.iconText}>Snacks</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foodIcons}>
                        <View style={styles.iconPadding}>
                            <Image source={require('../assets/Icons/food-Icons/sushi-icon.png')} style={styles.foodicon} />
                        </View>
                        <View style={styles.inner}>
                            <Text style={styles.iconText}>Sushi</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.menuCard}>
                    <View>
                        <Image source={require('../assets/Images/burgerimage2.png')} />
                        <View style={styles.time}>
                            <View style={styles.timeContainer}>
                                <Text style={styles.timeText}>25-30 min</Text>
                            </View>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>Burgers Story</Text>
                        </View>
                        <View style={styles.ratting}>
                            <Image source={require('../assets/Icons/star.png')} style={styles.starIcon} />
                            <Text style={styles.rattingText}>4.7</Text>
                            <Text style={styles.rattingText}>Burgers</Text>
                            <Text style={styles.rattingText}>Snacks</Text>
                            <Text style={styles.rattingText}>$$$</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate("Order")}>
                    <View>
                        <Image source={require('../assets/Images/burgerimage.png')} />
                        <View style={styles.time}>
                            <View style={styles.timeContainer}>
                                <Text style={styles.timeText}>30-45 min</Text>
                            </View>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>Burgers Story</Text>
                        </View>
                        <View style={styles.ratting}>
                            <Image source={require('../assets/Icons/star.png')} style={styles.starIcon} />
                            <Text style={styles.rattingText}>4.5</Text>
                            <Text style={styles.rattingText}>Burgers</Text>
                            <Text style={styles.rattingText}>Snacks</Text>
                            <Text style={styles.rattingText}>$$</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuCard}>
                    <View>
                        <Image source={require('../assets/Images/burgerimage.png')} />
                        <View style={styles.time}>
                            <View style={styles.timeContainer}>
                                <Text style={styles.timeText}>30-45 min</Text>
                            </View>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>Burgers Story</Text>
                        </View>
                        <View style={styles.ratting}>
                            <Image source={require('../assets/Icons/star.png')} style={styles.starIcon} />
                            <Text style={styles.rattingText}>4.5</Text>
                            <Text style={styles.rattingText}>Burgers</Text>
                            <Text style={styles.rattingText}>Snacks</Text>
                            <Text style={styles.rattingText}>$$</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9fa'
    },
    header: {
        paddingTop: 35,
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
        marginRight: 60,
    },
    icon2: {
        marginLeft: 60,
    },
    heading: {
        marginTop: 20,
    },
    headingText: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    category: {
        flexDirection: 'row',
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    foodIcons: {
        padding: 10,
        backgroundColor: '#fff', //use #fa6e3c for orange color padding color
        borderRadius: 50,
        alignItems: 'center',
        elevation: 5,
    },
    iconPadding: {
        padding: 15,
        borderRadius: 40,
        backgroundColor: '#eee',
    },
    inner: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    foodicon: {
        width: 30,
        height: 30,
    },
    menuCard: {
        marginTop: 25,
        paddingHorizontal: 10,
    },
    time: {
        position: 'absolute',
        paddingTop: 122.8,
    },
    timeContainer: {
        padding: 10,
        paddingRight: 15,
        backgroundColor: '#f9f9fa',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        elevation: 5,
    },
    timeText: {
        fontSize: 18,
    },
    nameContainer: {
        paddingTop: 10,
    },
    nameText: {
        fontSize: 22,
    },
    ratting: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    rattingText: {
        paddingTop: 3,
        paddingRight: 10,
    },
    starIcon: {
        marginRight: 10,
    },
})
