import React, {useEffect, useState} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';

import CourseField from '../components/CourseField';
function CoursesScreen({props, navigation}) {
    
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://172.20.10.2:3000/courses" ,{
            method : "GET"
        })
        .then(resp => resp.json())
        .then(courses => {setCourses(courses)})
    }, []

    )
    

    return (
        
        <Screen>
        <ImageBackground
        style = {styles.background}
        source = {require("../assets/bg2.jpg") }
        >

            
            

            <View style = {styles.logocontent}>
            <Image source = {require("../assets/HowToCourses.png")}
            //style = {styles.logo}
            >
            </Image>

            </View>
           
            <View style = {styles.container}  >
            <FlatList 
                data = {courses}
                renderItem = {(data) => 
                    <View style = {styles.courses}>
                        <View style={styles.row1}>
                            <Text onPress={() => navigation.navigate("CourseDetails",{course_crn:'10734',})} style={styles.text}> {data.item.course_name} </Text>
                        </View>
                        <View style={styles.row2}>
                            <Text  style={styles.text}> {data.item.course_crn} </Text>
                        </View>
                    </View>
                }
                
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
    
    container: {
        top: 40,
        flex: 1,
        height: 400,
        
    },
    text:{
        color: colors.white,
        
       
        fontSize : 15,
        
    },
    row1:{
        width:290,
        
    },
    row2:{
        width:60,
        
    },
    
    logocontent: {
        //position: "absolute",
        top: 70,
        alignItems: "center",
        width: 300,
        height: 200,
        left: 20,
    },
    courses: {
        
        flexDirection: 'row',
        width: 350,
        height: 50,
        flexWrap: 'wrap',
        borderBottomWidth: 3,
        borderColor: 'white',
        paddingVertical: 15,
        
    },
    

})

export default CoursesScreen;