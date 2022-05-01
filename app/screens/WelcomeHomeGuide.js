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
        marginTop: Dimensions.get('window').height - 180
    },
    logocontent: {
        position: "absolute",

        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 400,
        marginTop: Dimensions.get('window').height - 780
    },

    cards: {



        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height -650,
        right: Dimensions.get('window').width- 400,
        marginTop: Dimensions.get('window').height -640,

    },

    mappic: {


        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 600,
        right: Dimensions.get('window').width- 534,
        marginTop: Dimensions.get('window').height - 1170,
    },

    textGuide: {

        width: Dimensions.get('window').width,
        marginTop: Dimensions.get('window').height - 1200,
        right: Dimensions.get('window').width- 450,
    },
    guides: {

        width: Dimensions.get('window').width,
        marginTop: Dimensions.get('window').height - 690,
        right: Dimensions.get('window').width- 530,
    },


})

export default WelcomeHomeGuide;
