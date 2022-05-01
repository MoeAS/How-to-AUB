import React, {useEffect, useState} from 'react';
import {useRoute} from "@react-navigation/native";
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';


function CourseDetails({route, navigation}) {
    const data = route.params.clubs
    
    
    

    //setDetails(courses);
    
    
    

    return (

        <Screen>
        <ImageBackground
        style = {styles.background}
        source = {require("../assets/bg2.jpg") }

        >
            <View style = {styles.logocontent}>
            <Image source = {require("../assets/HowToClub.png")}
            //style = {styles.logo}
            >
            </Image>

            </View>

            <ScrollView style = {styles.scrollView}>
            <View style = {styles.container}> 
                

                <View style = {styles.name}>
                    <Text style = {styles.text_name}>Course Name: {data.item.club_name}</Text>
                </View>

                <View style = {styles.desc}>
                    <Text style = {styles.text}> Course Description: {data.item.club_description}</Text>
                </View>

                
            </View>
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
        color: colors.darkgray,
    },
    scrollView: {
        
        
        top: 40,
        
    },
    container: {
        borderRadius: 20,
        backgroundColor: colors.mans,
        padding: 5,
        paddingVertical: 40,
        width: 370,
    },
    text:{
        color: colors.white,
        fontSize : 15,

    },
    text_name:{
        color: colors.white,
        fontSize : 25,
        fontWeight: 'bold',
    },
    title: {
        flex: 1,
        fontSize : 20,
        color: colors.white,
        padding: 5,
    },
    name: {
        flex: 1,
        fontSize : 20,
        color: colors.white,
        padding: 5,
    },
    desc: {
        flex: 1,
        fontSize : 15,
        color: colors.white,
        padding: 5,
    },
    pre: {
        flex: 1,
        fontSize : 15,
        color: colors.white,
        padding: 5,
    },
    logocontent: {
        //position: "absolute",
        top: 70,
        alignItems: "center",
        width: 300,
        height: 200,
        left: 20,
    },



})

export default CourseDetails;
