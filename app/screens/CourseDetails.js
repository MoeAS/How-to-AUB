import React, {useEffect, useState} from 'react';
import {useRoute} from "@react-navigation/native";
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';


function CourseDetails({route, navigation}) {
    const courses = route.params.courses
    console.log(courses.item)
    console.log("hello")

    const [details, setDetails] = useState([]);
    const [prerequisite, setPrerequisite] = useState([]);

    setDetails(courses);

    useEffect(() => {
        fetch("http://192.168.1.13:3000/details" ,{
            method : ("POST", "GET"),
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "course_crn": course_crn

        })
        })
        .then(resp => resp.json())
        .then(details => {setDetails(details)})
    }, []

    );
    console.log(details);

    useEffect(() => {
        fetch("http://192.168.1.13:3000/prerequisite" ,{
            method : ("POST", "GET"),
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "course_crn": course_crn

        })
        })
        .then(resp => resp.json())
        .then(prerequisite => {setPrerequisite(prerequisite)})
    }, []

    );



    return (

        <Screen>
        <ImageBackground
        style = {styles.background}

        >


            <ScrollView style = {styles.scrollView}>

            <View style = {styles.title}>

                <Text>Course Title: {details.course_crn}</Text>
            </View>

            <View style = {styles.name}>
                <Text>Course Name: {details.course_name}</Text>
            </View>

            <View style = {styles.desc}>
                <Text>Course Description: {details.course_description}</Text>
            </View>

            <View style = {styles.pre}>
                <Text>Course Prerequisites: {prerequisite.item.course_prerequisite}</Text>
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

    text:{
        color: colors.white,
        fontSize : 15,

    },




})

export default CourseDetails;
