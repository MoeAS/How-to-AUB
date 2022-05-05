  import React from 'react';
import {View, SafeAreaView, Button, StyleSheet, TextInput, Alert} from 'react-native';
import {Avatar, Title,Caption,Text,TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import AppButton from '../components/AppButton';
import config from "../config/config.json"
import {SelectMultipleButton,SelectMultipleGroupButton} from "react-native-selectmultiple-button";
const multipledata = [
  { value: "Sports" },
  { value: "Technology" },
  { value: "Campus Life" },
  { value: "Research" },
  { value: "Scholarships" },
  { value: "Study Abroad" },
  { value: "Art" },
  { value: "Gaming" },
  { value: "Music" }
];
const preferences=[{value:"sports", label:"Sports"},{value:"technology", label:"Technology"}, {value:"Campus Life", label:"Campus Life"}, {value:"scholarships", label:"Scholarships"}, {value:"Research", label:"Research"}, {value:"Study Abroad", label:"Study Abroad"}, {value:"Art", label:"Art"}, {value:"Gaming", label:"Gaming"}, {value:"Music", label:"Music"}];
const EditProfile= ({props, navigation, route}) => {

  email = "mba26@mail.aub.edu"

  const surveyDone = () => {
      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/setsurvey/${email}`, {
          method: 'GET',
          headers: {
              "Content-Type": "application/json"
          },
      })
      .then(resp => resp.json())


      .then((response) => {
          console.log(response);
          navigation.navigate("ProfileScreen");
        })

};



    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image
                        source={require("../assets/prof.jpg")}
                        size={85}/>
                        <View style={{marginLeft: 20}}>
                            <Title style={[styles.title, {marginTop: 15, marginBottom:5}]}>mba26</Title>
                            <Caption style={styles.caption}>201900xxx</Caption>
                        </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>

                    <TextInput style={styles.input} placeholder="Class" />
                </View>
                <View style={styles.row}>

                    <TextInput style={styles.input} placeholder="Major" />
                </View>
                <View style={styles.row}>
                    <Icons name='email' color= '#ffd700' size={20}/>
                    <Text> mba26@mail.aub.edu</Text>
                </View>
            </View>
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
                borderRightColor: '#dddddd',
                borderRightWidth: 1
                }]}>
            <View>
            <TextInput style={styles.input} placeholder="GPA" />
            </View>
            <Caption>GPA</Caption>
            </View>
            <View style={styles.infoBox}>
                <View>
                <TextInput style={styles.input} placeholder="Credits" />
                </View>
                <Caption>Credits</Caption>
            </View>
        </View>
        <View style= {{ backgroundColor: "transparent", flex: 0.1 }}></View>
        <View style= {{ backgroundColor: "transparent", flex: 0.3 }}>
          <View style={styles.interests}>
          <Text style={styles.interests}> Select Your Interests </Text>
          </View>
        </View>
        <View>
  <SelectMultipleGroupButton
  containerViewStyle={{
    justifyContent: "flex-start"
  }}
  highLightStyle={{
    borderColor: "#2C3E4F",

    backgroundColor: "transparent",

    textColor: "#2C3E4F",

    borderTintColor: '#ffd700',

    backgroundTintColor: "transparent",

    textTintColor: '#ffd700'
  }}
  group={multipledata}/>
        </View>



    <View style = {styles.buttoncontainer}>
    <AppButton title = "Add a profile picture" color= "gray" textcolor = "black"  onPress={() => console.log('Pressed')}></AppButton>
                 <AppButton title = "Save" color= "yellow" textcolor = "black" onPress={() => {
                   Alert.alert(
                   "Success",
                   "Saved!",
                   [
                     { text: "OK", onPress: () => surveyDone() }
                   ]
                 );
               }}></AppButton>
            </View>
        <View>
        </View>
    </SafeAreaView>
    ); };
export default EditProfile;
    const styles = StyleSheet.create({
        buttoncontainer:{
            width: '100%',
            padding: 20,
        },
        container: {
          flex: 1,
        },
        userInfoSection: {
          paddingHorizontal: 30,
          marginBottom: 25,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          color: '#2C3E4F',
        },
        caption: {
          fontSize: 14,
          lineHeight: 14,
          fontWeight: '500',
        },
        row: {
          flexDirection: 'row',
          marginBottom: 10,
        },
        infoBoxWrapper: {
          borderBottomColor: '#dddddd',
          borderBottomWidth: 1,
          borderTopColor: '#dddddd',
          borderTopWidth: 1,
          flexDirection: 'row',
          height: 100,
        },
        infoBox: {
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        },
        menuWrapper: {
          marginTop: 10,
        },
        menuItem: {
          flexDirection: 'row',
          paddingVertical: 0,
          paddingHorizontal: 100,
        },
        menuItemText: {
          color: '#777777',
          marginLeft: 20,
          fontWeight: '600',
          fontSize: 16,
          lineHeight: 26,
        },
        interests: {
          fontSize: 17,
          fontWeight: 'bold',
          color: '#2C3E4F',
        },
        input: {
          borderColor: "gray",
          width: "100%",
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
        },
      });
