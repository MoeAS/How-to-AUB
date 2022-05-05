import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import AppButton from '../components/AppButton';
import LoginScreen from './LoginScreen';
import colors from '../config/colors';


function WelcomeHomeGuide({props, navigation}) {
    return (
        <ImageBackground

            style = {styles.background}
            source= {require("../assets/Group1.png") }
        >

        <View style = {styles.logocontent}>
        <Image source = {require("../assets/howto1.png")}
        //style = {styles.logo}
        >
        </Image>
        </View>

        <View style = {styles.guides}>
        <Image source = {require("../assets/GUIDES.png")}
        //style = {styles.logo}
        >
        </Image>
        </View>

        <View style = {styles.cards}>
        <Image source = {require("../assets/cards1.png")}
        //style = {styles.logo}
        >
        </Image>
        </View>

        <View style = {styles.mappic}>
        <Image source = {require("../assets/Picture71.png")}
        //style = {styles.logo}
        >
        </Image>
        </View>


        <View style = {styles.textGuide}>
        <Image source = {require("../assets/textGuide.png")}
        //style = {styles.logo}
        >
        </Image>
        </View>

            <View style = {styles.buttoncontainer}>
                 <AppButton title = "Get Started" color= "yellow" textcolor = "black" onPress={() => navigation.navigate("How to Guide")}></AppButton>
            </View>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
    },
    buttoncontainer:{
        position: "absolute",
        width: '100%',
        padding: 60,
        bottom: "-5%"
    },
    logocontent: {
        position: "absolute",

        alignItems: "center",
        marginTop: "5%"
    },

    cards: {



        alignItems: "center",
        right: "4%",
        marginTop: "22%",

    },

    mappic: {


        alignItems: "center",
        right: "-30%",
        marginTop: Dimensions.get('window').height - 1200,
    },

    textGuide: {

        marginTop: Dimensions.get('window').height - 1060,
        right: "20%",
    },
    guides: {

        marginTop: "25%",
        right: "-7%",
    },


})

export default WelcomeHomeGuide;
