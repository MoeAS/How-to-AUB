import React, {useEffect, useState} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Text, Platform, Dimensions, Keyboard,  TouchableWithoutFeedback, Alert} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Card, FAB, TextInput, Button} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
//import StarRating from 'react-native-star-rating-widget';
import StarRating from 'react-native-star-rating';

import config from "../config/config.json"

function CreateForum({props, navigation}) {

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);

    const ratingChanged = (newRating) => {
      console.log(newRating)
      setRating(newRating)
    }

    const insertData = () => {
      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/addforum` ,{
          method : "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              "title": title,
              "description": description,
              "rating": rating,
              "user_email": "mba26"
      })
    })
      .then((response) => {
          console.log(response.status)
          if (response.status == 200) {
          Alert.alert(
          "Success",
          "Forum Posted!",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
        setTitle("")
        setDescription("")
        setRating(0)
        navigation.navigate("HowtoGuide")
        }

        else{
        Alert.alert(
        "Error",
        "An Error Occured while posting to the forum, Please try again.",
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
              label = "Title"
              value = {title}
              mode = "outlined"
              onChangeText = {text => setTitle(text)}
              activeOutlineColor = "darkblue"
              selectionColor = "blue"
            />

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
            icon = "pencil"
            mode = "contained"
            color = "yellow"
            onPress = {() => {insertData()}}
            >Post</Button>

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

export default CreateForum;
