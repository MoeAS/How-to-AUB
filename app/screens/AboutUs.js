import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import AppButton from '../components/AppButton';
import LoginScreen from './LoginScreen';
import colors from '../config/colors';
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Card, FAB, TextInput, Button} from 'react-native-paper';


function AboutUs({props, navigation}) {
    return (
            <View style = {{flex: 1}}>
            <View style = {{marginTop:"0%", flex: 1, alignItems: 'center'}}>
            <Image
                style = {{flex:1, width: '90%', height: '100%', resizeMode: 'contain'}}
                source= {require("../assets/us.jpeg") }
            ></Image>

            </View>

           <Title style={{color: "black", marginLeft: "2%", marginTop: "-10%", fontSize: 30}}>About Us</Title>

           <View style = {{marginLeft: "2%"}}>
           <Text style = {{padding: "5%"}}>Mohamad Abou Salem: Software, Networking</Text>
           <Text style = {{padding: "5%"}}>Shaza El Fakih: Software, Machine Learning</Text>
           <Text style = {{padding: "5%"}}>Dina Younes: Software, Machine Learning</Text>
           <Text style = {{padding: "5%"}}>Jad Raydan: Software, Networking</Text>
           </View>
           </View>


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

export default AboutUs;
