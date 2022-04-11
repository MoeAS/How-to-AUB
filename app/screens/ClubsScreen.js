import React, {useEffect} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';

import ClubField from '../components/ClubField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingClubs } from '../../actions/fetchingClubs';
import { useFocusEffect } from '@react-navigation/native';



function ClubsScreen(props) {
    
    const myClubs = [];
   
    return (
        
        <Screen>
            <ImageBackground
            style = {styles.background}
            source = {require("../assets/bg2.jpg") }
            >

                
                <ScrollView style = {styles.scrollView}>

                <View style = {styles.logocontent}>
                <Image source = {require("../assets/HowToClubs.png")}
                //style = {styles.logo}
                >
                </Image>

                </View>

                <FlatList 
                    
                />

                
                
                
                
                

                </ScrollView>

            </ImageBackground>
        </Screen>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttoncontainer:{
        top: 70,
        marginVertical: 170,
        padding: 60,
        width: "100%",
        flex: 1,
    },
    clubs: {
        marginVertical: 20,
    },
    container: {
        top: 160,
        width: "100%",
        padding: 15,
        marginVertical: 55,
        flex: 0.9,
        position: "absolute",
    },
    text:{
        color: colors.white,
        top: 40,
        fontWeight: 'bold',
        position: "absolute",
        marginVertical: -60,
        marginHorizontal: 10,
        fontSize : 40,
    },
    
    logocontent: {
        //position: "absolute",
        top: 70,
        alignItems: "center",
        width: 300,
        height: 200,
        left: 30,
    },
   

})

export default ClubsScreen;