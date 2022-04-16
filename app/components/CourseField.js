import React from 'react';
import colors from '../config/colors';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';
import { Directions } from 'react-native-gesture-handler';


function CourseField({course_id, course_crn, course_name, course_description}) {
    return (
        <View style = {styles.courses}> 
                    <View style={styles.coursecontent}>

                        <View style = {styles.imgtitle}>
                            <View style = {styles.title}>
                                <Title style = {styles.textTitle}>{course_name}</Title>
                            </View>
                            <View style = {styles.crn}>
                                <Text style = {styles.textCRN}>{course_crn}</Text>
                            </View>
                        </View>

                       
                    </View>
            </View>
    );
}

const styles = StyleSheet.create({
   
    
    textdesc: {
        color: colors.white,
        
    },
    textTitle: {
        color: colors.white,
        fontSize: 20,
    },
    textCRN: {
        color: colors.white,
        fontSize: 15,
    },
    
    coursecontent: {
        flex: 1,
        borderRadius: 10,
        width: 400,
        padding: 10,
        backgroundColor: colors.darkgray,
        height: 120,
        top: 30,
        marginTop: 15
       
        
    },
    imgtitle: {
        flexDirections: 'row',
        
    },
    title: {
        padding: 10,
    },
    crn: {
        padding: 5,
    },
    description: {
        color: colors.white,
    },
    courses: {
        marginVertical: 5,
        
    },

})

export default CourseField;
