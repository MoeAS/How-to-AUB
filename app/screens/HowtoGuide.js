import React, {useEffect, useState, Route} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform, Dimensions} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import { useRoute } from '@react-navigation/native';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Card, FAB} from 'react-native-paper';

import config from "../config/config.json"

function HowtoGuide({navigation, props}) {
    const [forums, setForums] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = () => {
      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/getforum` ,{
          method : "GET"
      })
      .then(resp => resp.json())
      .then(forums => {
        setForums(forums)
        setLoading(false)
      })
      .catch(error => console.log(error))
    }

    useEffect(() => {
        loadData()
    }, [forums]

    )


    const clickedItem = (forums) => {
      console.log(forums);
      navigation.navigate('HowtoGuideDetails', {screen: 'HowtoGuideDetails', params: {forums: forums}})
    }

    const renderData = (item) => {
        return(
          <Card style = {styles.card}>
            <Text style = {{fontSize: 20, marginBottom: 10, fontWeight: "bold", color: "black"}} onPress = {() => clickedItem(item)}>{item.title}</Text>
            <Text style = {{fontSize: 12, color: "black"}}>{item.date}</Text>
            <Text style = {{left: Dimensions.get('window').width - 110, fontWeight: "bold", color: "black"}}>Rating: {item.rating}</Text>
          </Card>
        )
    }


    return (

        <Screen>
        <ImageBackground
        style = {styles.background}
        source = {require("../assets/bg2.jpg") }
        onRefresh = {() => loadData()}
        refreshing = {loading}
        >




            <View style = {styles.logocontent}>
            <Image source = {require("../assets/HowToIcon.png")}
            //style = {styles.logo}
            >
            </Image>



            <View style = {styles.container}  >
            <FlatList
                data = {forums}
                renderItem = {({item}) =>
                    {
                      return renderData(item)
                    }
                }
                onRefresh = {() => loadData()}
                refreshing = {loading}
                keyExtractor = {item => `${item.id}`}

            />



            </View>

            <FAB
              style = {styles.fab}
              small = {false}
              icon = "plus"
              theme = {{colors:{accent: "yellow"}}}
              onPress = {() => navigation.navigate("CreateForum")}
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

    fab: {
      position: 'absolute',
      margin:16,
      right: 0,
      bottom: Dimensions.get('window').height - Dimensions.get('window').width - 600,
    },

    container: {
        top: 40,
        flex: 1,
        height: 400,

    },
    text:{
        color: colors.black,
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

export default HowtoGuide;
