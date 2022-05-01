import React, {useEffect, useState} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Text, Platform, Dimensions, Keyboard,  TouchableWithoutFeedback, Alert} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';
import DatePicker from 'react-native-date-picker'
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Card, FAB, TextInput, Button} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
//import StarRating from 'react-native-star-rating-widget';
import StarRating from 'react-native-star-rating';

import config from "../config/config.json"

function CreateForum({route, navigation}) {

  const reminders = route.params.reminders;


  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());


    const [reminder, setReminder] = useState([]);


    const insertData = () => {

      const reminder = {"title": title,
      "description": description,
      "date": date,
      "user_email": "mba26@mail.aub.edu"};
      console.log("a3333333")
      console.log(reminder);
      reminders.push(reminder);

      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/addreminder` ,{
          method : "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              "title": title,
              "description": description,
              "date": date,
              "user_email": "mba26@mail.aub.edu"
      })
    })
      .then((response) => {
          response.json()
          console.log(response.status)
          if (response.status == 200) {
          Alert.alert(
          "Success",
          "Reminder Posted!",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );



        }

        else{
        Alert.alert(
        "Error",
        "An Error Occured while posting to the calendar, Please try again.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      }
      navigation.navigate("CalendarScreen", {screen: 'CalendarScreen', params: {reminders: reminders}} )

        })


      .catch(error => console.log(error))


    }

    return (

        <Screen>
        <ImageBackground
        style = {styles.background}
        source = {require("../assets/bg2.jpg") }
        >


<ScrollView style = {styles.scroll}>



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



            <View style= {styles.date}>
            <DatePicker date={date} onDateChange={setDate} />
            </View>

            <Button
            style = {{margin: 20, borderRadius: 15,}}
            icon = "pencil"
            mode = "contained"
            color = "yellow"
            onPress = {() => {insertData()}}
            >Post</Button>

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
    scroll:{
      flex: 1,

    },
    container: {
      top: 80,
      flex: 1,
      height: 900,

  },
    date:{
      width: Dimensions.get('window').width - 50,
      marginTop: 20,
      left: 25,
      borderRadius: 20,
    },
    input:{

      padding: 10,
      marginTop: 20,
      width: Dimensions.get('window').width - 30,
      borderRadius: 50,
      borderWidth: 2,
      backgroundColor: colors.white,

    },

    txtinput: {
      margin: 10,
      width: Dimensions.get('window').width - 50,
      borderRadius: 10,
      backgroundColor: colors.white,
      overflow:"hidden"

    },

    fab: {
      position: 'absolute',
      margin:16,
      right: 0,
      bottom: Dimensions.get('window').height - Dimensions.get('window').width - 270,
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
        top: 60,
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
