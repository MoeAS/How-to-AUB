import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';

import AppButton from '../components/AppButton';
import LoginAfter from './LoginAfter';

import colors from '../config/colors';

function HomeGuide({props, navigation}) {

    return (
        <ImageBackground
        //blurRadius={5}
        style = {styles.background}
        source= {require("../assets/bg2.jpg") }
        >
            <View style = {styles.logocontent}>
                <Image source = {require("../assets/HowToIcon.png")}
                >
                </Image>

            </View>

                <View style = {styles.buttoncontainer}>
                <Text style = {styles.text}>Categories</Text>
                    <AppButton title = "Guides" color = "darkgray" textcolor = "white"
                    onPress={() => navigation.navigate("")}
                    ></AppButton>
                    <AppButton title = "Clubs" color = "darkgray" textcolor = "white"
                    onPress={() => navigation.navigate("Clubs")}
                    ></AppButton>
                    <AppButton title = "Volunteering" color = "darkgray" textcolor = "white"
                    onPress={() => navigation.navigate("")}
                    ></AppButton>
                </View>

        </ImageBackground>
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
    logo: {
        width: 130,
        height: 130,
    },
    logocontent: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },

})

export default HomeGuide;