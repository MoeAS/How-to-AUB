import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';

//import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function SignupLogin({props, navigation}) {
    return (

            <ImageBackground
            //blurRadius={5}
            style = {styles.background}
            source= {require("../assets/background1.png") }
            >
                <View style = {styles.logocontent}>
                    <Image source = {require("../assets/HOWTOAUB.png")}
                    style = {styles.logo}
                    >
                    </Image>
                    <Text style = {styles.text} >
                        Creating an account is reserved to AUB students only
                    </Text>
                </View>

                <View style = {styles.buttoncontainer}>
                    <AppButton title = "Sign up" color= "white" textcolor = "black" onPress={() => navigation.navigate("SignupScreen")} ></AppButton>
                    <AppButton title = "Login" color= "yellow" textcolor = "black" onPress={() => navigation.navigate("LoginScreen")} ></AppButton>
                </View>


                <View >
                    <Text style = {styles.guesttext}> Join as guest </Text>
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
        top: 120,
        width: '100%',
        padding: 50,
        marginVertical: 50,

    },
    guesttext:{
        color: colors.white,
        top: 120,
        fontWeight: 'bold'
    },
    logo: {
        width: 120,
        height: 120,
    },
    logocontent: {
        position: "absolute",
        top: 110,
        alignItems: "center",
    },
    text: {
        fontWeight: "400",
        fontSize : 18,
        padding: 40,
        color: colors.white,
    },

})

export default SignupLogin;
