import React, {useEffect, useState} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Text, Platform, Dimensions, Keyboard,  TouchableWithoutFeedback, Alert} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Card, FAB, TextInput, Button} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
//import StarRating from 'react-native-star-rating-widget';
import StarRating from 'react-native-star-rating';
import HowtoGuide from './HowtoGuide'


function HowtoGuideDetails({props, route, navigation}) {
  const forums = route.params.forums
  console.log(forums)


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

    const deleteData = () => {
      fetch(`http://10.169.8.10:3000/deleteforum/${forums.id}/` ,{
          method : "DELETE",
          headers: {
              "Content-Type": "application/json"
          },
      })
      .then((response) => {
          console.log(response.status)
          if (response.status == 200) {
          Alert.alert(
          "Success",
          "Forum Deleted!",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );

        navigation.navigate("HowtoGuide")
        }

        else{
        Alert.alert(
        "Error",
        "An Error Occured while Deleting the forum, Please try again.",
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

            <Text style = {{fontSize: 30, top:Dimensions.get('window').height - 740, color:"#FFFFFF"}}>
              {forums.title}
            </Text>

            <Text style = {{fontSize: 20, top:Dimensions.get('window').height - 720, color:"#FFFFFF"}}>
              {forums.date}
            </Text>

            <Text style = {{fontSize: 20, top:Dimensions.get('window').height - 700, color:"#FFFFFF"}}>
              {forums.user_email}
            </Text>

            <Text style = {{fontSize: 20, top:Dimensions.get('window').height - 670, color:"#FFFFFF"}}>
              {forums.description}
            </Text>

            <Text style = {{fontSize: 15, marginTop: 10, top:Dimensions.get('window').height - 580, right:Dimensions.get('window').width-700, color:"#FFFFFF"}}>
              Rating: {forums.rating}
            </Text>

            <View style = {styles.buttons}>

            <View style = {{top:Dimensions.get('window').height - 720, left: Dimensions.get('window').width - 320, position: 'absolute'}}>

            <StarRating style = {{margin: 10, top:0}}
            disabled={false}
            fullStarColor = {'yellow'}
            maxStars={5}
            rating={rating}
            selectedStar={(rating) => setRating(rating)}
            starSize = {40}
            />

            </View>

            <Button
            style = {{margin: 10, borderRadius: 15, top:Dimensions.get('window').height - 790, left:Dimensions.get('window').width -400}}
            icon = "update"
            mode = "contained"
            color = "yellow"
            onPress = {() => {navigation.navigate("HowtoGuideDetailsEdit", {screen: 'HowtoGuideDetailsEdit', params: {forums: forums}})}}
            >Edit</Button>


            <Button
            style = {{margin: 10, borderRadius: 15,top:Dimensions.get('window').height - 790, left:Dimensions.get('window').width -320}}
            icon = "delete"
            mode = "contained"
            color = "yellow"
            onPress = {() => {deleteData(forums)}}
            >Delete</Button>

            </View>

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

    buttons: {
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 15,
      padding: 10,
      bottom: Dimensions.get('window').height - 800,
      position: 'absolute',
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
        padding: 20,
        flex: 1,
        margin: 50,
        height: Dimensions.get('window').height - 290,
        width: Dimensions.get('window').width - 20,


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

export default HowtoGuideDetails;
