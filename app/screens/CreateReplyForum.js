import React, {useEffect, useState} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Text, Platform, Dimensions, Keyboard,  TouchableWithoutFeedback, Alert} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Card, FAB, TextInput, Button} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
//import StarRating from 'react-native-star-rating-widget';
import StarRating from 'react-native-star-rating';

import config from "../config/config.json"

function CreateReplyForum({props, route, navigation}) {

  const reply = route.params.reply
  console.log(reply)

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );


    const [description, setDescription] = useState("");


    const replyData = () => {
      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/forumreply/${reply}/` ,{
          method : "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              "forum_id": reply,
              "description": description,
              "user_email": "mba26"
      })
    })
      .then((response) => {
          console.log(response.status)
          if (response.status == 200) {
          Alert.alert(
          "Success",
          "Successfully replied to the forum!",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
        setDescription("")
        navigation.navigate("HowtoGuideDetails")
        }

        else{
        Alert.alert(
        "Error",
        "An Error Occured while replying to the forum, Please try again.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      }

        })
      .catch(error => console.log(error))

    }

    return (

        <Screen>
        <ImageBackground
        style = {styles.background}
        source = {require("../assets/bg2.jpg") }
        >




            <View style = {styles.logocontent}>

            <Image source = {require("../assets/HowToIcon.png")}
            //style = {styles.logo}
            >
            </Image>



            <View style = {styles.container}>

            <TextInput style = {styles.txtinput}
              label = "Description"
              value = {description}
              mode = "outlined"
              multiline
              maxHeight = {Dimensions.get('window').height - 450}
              numberOfLines= {10}
              onChangeText = {text => setDescription(text)}
              activeOutlineColor = "darkblue"
              selectionColor = "blue"
            />

            <Button
            style = {{margin: 10, borderRadius: 15,}}
            icon = "reply"
            mode = "contained"
            color = "yellow"
            onPress = {() => {replyData()}}
            >Reply</Button>

            </View>


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

    txtinput:{
      padding: 10,
      width: Dimensions.get('window').width - 20,
      borderRadius: 10,
      overflow:"hidden"

    },

    fab: {
      position: 'absolute',
      margin:16,
      right: 0,
      bottom: Dimensions.get('window').height - Dimensions.get('window').width - 270,
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
        position: "absolute",

        alignItems: "center",
        width: Dimensions.get('window').width,

        left: 0,
    },
    card:{
      flex: 1,
      width : Dimensions.get('window').width - 30,
      backgroundColor: 'white',
      padding: 10,
      margin: 10,
    },


})

export default CreateReplyForum;
