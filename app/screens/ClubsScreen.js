import React, {useEffect, useState} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';

import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import config from "../config/config.json"



function ClubsScreen({props, navigation}) {

    const data = ["",];
    const [interest, setInterest] = useState([]);
    const [selected, setSelected] = useState("");
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetch(`http://${config.IP_ADDRESS}:${config.PORT}/clubs` ,{
            method : "GET"
        })
        .then(resp => resp.json())
        .then(clubs => {setClubs(clubs)})
    }, []

    );

    useEffect(() => {
        fetch(`http://${config.IP_ADDRESS}:${config.PORT}/interest` ,{
            method : "GET"
        })
        .then(resp => resp.json())
        .then(interest => {setInterest(interest)})
    }, []

    );

    for (let j = 0; j < interest.length; j++) {
        data.push(interest[j]["club_area"])
    }
    console.log(data)
    clubs_filtered = []



    function onselect(selected) {
        if (selected==""){
            clubs_filtered = clubs;
        }
        for (let i = 0; i< clubs.length; i++){
            if (clubs[i]["club_area"] == selected){
                clubs_filtered.push(clubs[i]);
            }
        }


    }
    onselect(selected);

    const clickedItem = (clubs) => {
        console.log(clubs);
        navigation.navigate("ClubDetails",{screen: 'ClubDetails', params: {clubs: clubs}})
      }

    return (

        <Screen>
            <ImageBackground
            style = {styles.background}
            source = {require("../assets/bg2.jpg") }
            >




                <View style = {styles.logocontent}>
                <Image source = {require("../assets/HowToClubs.png")}
                //style = {styles.logo}
                >
                </Image>

                </View>

                <View  style = {styles.dropdown}>
            <SelectDropdown
                data={data}
                onSelect={ (selectedItem, index) => {
                    setSelected(selectedItem);
                    console.log(selectedItem, index);

                }}
                defaultButtonText={'Filter by interest area'}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
                  }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            </View>


                <View style = {styles.container}  >
                    <FlatList
                        data = {clubs_filtered}
                        renderItem = {(data) =>
                            <View style = {styles.courses}>
                                <View style={styles.row1}>
                                    <Text onPress={() => clickedItem(data)} style={styles.text}> {data.item.club_name} </Text>
                                </View>
                                <View style={styles.row2}>
                                    <Text  style={styles.text}> {data.item.club_crn} </Text>
                                </View>
                            </View>
                        }

                    />

                </View>









            </ImageBackground>
        </Screen>

    );
}

const styles = StyleSheet.create({
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
      dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
      dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
      dropdown1BtnStyle: {
          width: '90%',
          height: 30,
          backgroundColor: colors.darkblue,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#fff',
        },
      dropdown1BtnTxtStyle: {color: '#fff', textAlign: 'left'},
      dropdown: {
        top: 25,
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttoncontainer:{
        top: 70,
        marginVertical: 170,
        padding: 60,
        width: "100%",
        flex: 1,
    },
    clubs: {
        marginVertical: 20,
    },
    container: {
        top: 40,
        flex: 1,
        height: 400,
    },
    text:{
        color: colors.white,


        fontSize : 17,

    },
    row1:{
        width:290,

    },
    row2:{
        width:60,

    },

    logocontent: {
        //position: "absolute",
        top: 70,
        alignItems: "center",
        width: 300,
        height: 200,

    },
    courses: {

        flexDirection: 'row',
        width: 350,
        height: 55,
        flexWrap: 'wrap',
        borderBottomWidth: 3,
        borderColor: 'white',
        paddingVertical: 15,

    },


})

export default ClubsScreen;
