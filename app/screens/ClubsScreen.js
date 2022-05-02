import React, {useEffect, useState} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';

import ClubField from '../components/ClubField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingClubs } from '../../actions/fetchingClubs';
import { useFocusEffect } from '@react-navigation/native';



function ClubsScreen(props) {
    
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetch("http://192.168.2.145:3000/clubs" ,{
            method : "GET"
        })
        .then(resp => resp.json())
        .then(clubs => {setClubs(clubs)})
    }, []

    )
   
    return (
        
        <Screen>
            <ImageBackground
            style = {styles.background}
            source = {require("../assets/bg2.jpg") }
            >

                
                

                <View style = {styles.logocontent}>
                <Image source = {require("../assets/HowToClubs.png")}
                //style = {styles.logo}
                >
                </Image>

                </View>

                <View style = {styles.container}  >
                <FlatList 
                    data = {clubs}
                    renderItem = {(data) => {return (<ClubField 
                        club_description={data.item.club_description}
                        club_name={data.item.club_name}
                        CRN = {data.item.club_crn}
                        />)}} 
                    
                />
                </View>
                
                
                
                
                
                

               

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
        top: 40,
        flex: 1,
        height: 400,
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
        
    },
   

})

export default ClubsScreen;