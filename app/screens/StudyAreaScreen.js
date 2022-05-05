import React, {useEffect, useState} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';

import ClubField from '../components/ClubField';

import { fetchingClubs } from '../../actions/fetchingClubs';
import { useFocusEffect } from '@react-navigation/native';



function StudyAreaScreen(props) {

    const data = [
        {
            "place_description": "There are 3 places to study in Jafet Library. Each of those places are divided into different floors in the building. The ground floor is a silent room that fits a big number of students. The top floor is not a silent room, where students can study or chat together. Finally, the ground floor is a silent room where students can focus the most.",
            "place_id": 1,
            "place_image": require("../assets/jafet.png"),
            "place_name": "Jafet"
        },
        {
            "place_description": "There are multiple rooms to study in this building, such as the FYP rooms. There are also places to study at on the 3rd floor balcony, as well as the 6th floor (both indoors and outdoors).",
            "place_id": 2,
            "place_image": require("../assets/oxy.png"),
            "place_name": "Oxy"
        },
        {
            "place_description": "In this building, there are many places to study in. Almost all floors above the ground floor have a place to sit and study, including mini-labs and lounge.",
            "place_id": 3,
            "place_image": require("../assets/osb.png"),
            "place_name": "Osb"
        },
        {
            "place_description": "This building has many places to sit and study. Almost all 6 floors have a places for students to sit and focus on his/her homework and exams. All while they can take a lunch break using the vending machines available :D",
            "place_id": 4,
            "place_image": require("../assets/reynolds.png"),
            "place_name": "Reynolds"
        }
        
    ];

    const [myAreas, setMyAreas] = useState([]);

    useEffect(() => {
        fetch("http://192.168.2.145:3000/study" ,{
            method : "GET"
        })
        .then(resp => resp.json())
        .then(myAreas => {setMyAreas(myAreas)})
    }, []

    )
    
    return (
        
        <Screen>
            <ImageBackground
            style = {styles.background}
            source = {require("../assets/bg2.jpg") }
            >

                
               
                <View style = {styles.logocontent}>
                <Image source = {require("../assets/HowToStudy.png")}
                //style = {styles.logo}
                >
                </Image>

                </View>

                <FlatList 
                    style = {styles.clubs}
                    data = {data}
                    keyExtractor = {(club) => club.place_name.toString()}
                    renderItem = {({item}) => 
                        <ClubField
                            club_name={item.place_name}
                            club_description = {item.place_description}
                            image = {item.place_image}
                        />
                    }
                />

                
                
                
                
                

              

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
    
    clubs: {
        
        
        height: 1000,
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

export default StudyAreaScreen;