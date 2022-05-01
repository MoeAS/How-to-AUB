import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import AppButton from '../components/AppButton';
import LoginScreen from './LoginScreen';
import colors from '../config/colors';

function WelcomeScreen({props, navigation}) {
    return (
        <ImageBackground

            style = {styles.background}
            source= {require("../assets/splash.png") }
        >


            <View style = {styles.buttoncontainer}>
                 <AppButton title = "Get Started" color= "yellow" textcolor = "black" onPress={() => navigation.navigate("SignupLogin")}></AppButton>
            </View>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttoncontainer:{
        width: '100%',
        padding: 60,
    },


})

export default WelcomeScreen;
