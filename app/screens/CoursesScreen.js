import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';


function CoursesScreen(props) {
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
                <View style = {styles.clubs}> 
                    <View style={styles.clubcontent}>

                        <View style = {styles.imgtitle}>
                            <View style = {styles.img}>
                                <Avatar.Image
                                    source = {{
                                    uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
                                    }}
                                    size = {50}
                                />
                            </View>
                            <View style = {styles.title}>
                                <Title style = {styles.textTitle}>besties</Title>
                            </View>
                        </View>

                        <View style = {styles.description}>
                            <Text style = {styles.textdesc} > moe is not cool but mansour is cool. they are besties. besties for ever. this is the club of the besties shaza and moe and mansour and dina. </Text>
                        </View>

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
    },
    buttoncontainer:{
        top: 70,
        marginVertical: 170,
        padding: 60,
        width: "100%",
        flex: 1,
    },
    scrollView:{
        
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
    textdesc: {
        color: colors.white,
        
    },
    textTitle: {
        color: colors.white,
    },
    logocontent: {
        //position: "absolute",
        top: 70,
        alignItems: "center",
        width: 300,
        height: 200,
    },
    clubcontent: {
        padding: 10,
        backgroundColor: colors.lightsteelblue,
    },
    imgtitle: {
        flexDirection: 'row',
    },
    title: {
        padding: 10,
    },
    description: {
        color: colors.white,
    },
    clubs: {
        marginVertical: 30,
    },

})

export default CoursesScreen;