import React, {useEffect, useState} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Text, Platform, Dimensions, Keyboard,  TouchableWithoutFeedback, Alert} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Card, FAB, TextInput, Button} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
//import StarRating from 'react-native-star-rating-widget';
import StarRating from 'react-native-star-rating';
import HowtoGuide from './HowtoGuide';

import config from "../config/config.json";


function HowtoGuideDetails({props, route, navigation}) {
  const forums = route.params.forums
  console.log(route.params.forums)


  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const [newforums, setNewForums] = useState(forums)
    const [reply, setReply] = useState([])
    const [loading, setLoading] = useState(true);

    const ratingChanged = (newRating) => {
      console.log(newRating)
      setRating(newRating)
    }

    const deleteData = () => {
      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/deleteforum/${forums.id}/` ,{
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

    const loadData = () => {
      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/getforum/${forums.id}/` ,{
          method : "GET"
      })
      .then(resp => resp.json())
      .then(newforums => {
        setNewForums(newforums)
      })
      .catch(error => console.log(error))
    }

    const loadReplyData = () => {
      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/getforumreply/${forums.id}/` ,{
          method : "GET"
      })
      .then(resp => resp.json())
      .then(reply => {
        setReply(reply)
        setLoading(false)
      })
      .catch(error => console.log(error))
    }


    useEffect(() => {
        loadData();
        loadReplyData();
    }, [route]

    )


    const rateData = (rating) => {
      console.log(rating)
      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/rateforum/${forums.id}/` ,{
          method : "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              "rating": rating,
      })
    })
      .then((response) => {
          console.log(response.status)
          response.json()
          loadData()
          loadReplyData()}
        )

      .catch(error => console.log(error))

    }

    const renderData = (item) => {
        return(
          <Card style = {styles.card}>
            <Text style = {{fontSize: 20, marginBottom: 10, fontWeight: "bold", color: "black"}}>{item.user_email}</Text>
            <Text style = {{left: "0%",fontSize: 12, color: "black"}}>{item.date}</Text>
            <Text style = {{marginTop: "10%", left: "0%", color: "black"}}>{item.description}</Text>
          </Card>
        )
    }

    console.log(reply)

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


            <Text style = {{fontSize: 30, top:"-15%", color:"#FFFFFF"}}>
              {forums.title}
            </Text>

            <Text style = {{fontSize: 20, top:"-15%", color:"#FFFFFF"}}>
              {forums.date}
            </Text>

            <Text style = {{fontSize: 20, top:"-10%", color:"#FFFFFF"}}>
              {forums.user_email}
            </Text>

            <Text style = {{fontSize: 20, top:"0%", color:"#FFFFFF"}}>
              {forums.description}
            </Text>

            <Text style = {{fontSize: 15, marginTop: 10, top:"-57%", right:"-85%", color:"#FFFFFF"}}>
              Rating: {newforums.rating}
            </Text>

            <View style={{height: "70%"}}>

            <FlatList
                data = {reply}
                renderItem = {({item}) =>
                    {
                      return renderData(item)
                    }
                }
                onRefresh = {() => loadReplyData()}
                refreshing = {loading}
                keyExtractor = {item => `${item.id}`}

            />

            </View>

            <View style = {styles.buttons}>

            <View style = {{top:"20%", left: "35%", position: 'absolute'}}>

            <StarRating style = {{margin: 10, top:0}}
            disabled={false}
            fullStarColor = {'yellow'}
            maxStars={5}
            rating={rating}
            selectedStar={(rating) => {
            setRating(rating);
            rateData(rating);
          }}
            starSize = {40}
            />

            </View>

            <Button
            style = {{margin: 10, borderRadius: 15, top:"-205%", right:"50%"}}
            icon = "update"
            mode = "contained"
            color = "yellow"
            onPress = {() => {navigation.navigate("HowtoGuideDetailsEdit", {screen: 'HowtoGuideDetailsEdit', params: {forums: forums}})}}
            >Edit</Button>


            <Button
            style = {{margin: 10, borderRadius: 15,top:"-205%", right:"-240%"}}
            icon = "delete"
            mode = "contained"
            color = "yellow"
            onPress = {() => {deleteData(forums)}}
            >Delete</Button>

            </View>

            </View>

            <FAB
              style = {styles.fab}
              small = {true}
              icon = "reply"
              theme = {{colors:{accent: "yellow"}}}
              onPress = {() => navigation.navigate("CreateReplyForum", {screen: 'CreateReplyForum', params: {reply: forums.id}})}
            />


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
      right: "0%",
      bottom: "-5%",
    },

    container: {
        padding: 20,
        flex: 1,
        margin: 50,
        height: Dimensions.get('window').height - 310,
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
