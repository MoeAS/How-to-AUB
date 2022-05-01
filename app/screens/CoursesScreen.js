import React, {useEffect, useState} from 'react';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';

import config from "../config/config.json"

import CourseField from '../components/CourseField';
function CoursesScreen({props, navigation}) {

    const data = ["",];
    const [courses, setCourses] = useState([]);
    const [dept, setDept] = useState([]);
    const [selected, setSelected] = useState("");
    const [prerequisite, setPrerequisite] = useState([]);

    useEffect(() => {
        fetch(`http://${config.IP_ADDRESS}:${config.PORT}/courses` ,{
            method : "GET"
        })
        .then(resp => resp.json())
        .then(courses => {setCourses(courses)})
    }, []

    )
    console.log(courses)


    useEffect(() => {
        fetch(`http://${config.IP_ADDRESS}:${config.PORT}/depts` ,{
            method : "GET"
        })
        .then(resp => resp.json())
        .then(dept => {setDept(dept)})
    }, []

    );

    useEffect(() => {
        fetch(`http://${config.IP_ADDRESS}:${config.PORT}/prerequisite` ,{
            method : "GET"
        })
        .then(resp => resp.json())
        .then(prerequisite => {setPrerequisite(prerequisite)})
    }, []

    );
    //console.log(prerequisite)

    for (let j = 0; j < dept.length; j++) {
        data.push(dept[j]["course_dept"])
    }
    courses_filtered = []

    function onselect(selected) {
        if (selected==""){
            courses_filtered = courses;
        }
        for (let i = 0; i< courses.length; i++){
            if (courses[i]["course_dept"] == selected){
                courses_filtered.push(courses[i]);
            }
        }


    }
    onselect(selected);

    console.log(courses_filtered);

    const clickedItem = (courses) => {
      console.log(courses);
      navigation.navigate("CourseDetails",{screen: 'CourseDetails', params: {courses: courses, prerequisite: prerequisite}})
    }


    return (

        <Screen>
        <ImageBackground
        style = {styles.background}
        source = {require("../assets/bg2.jpg") }
        >




            <View style = {styles.logocontent}>
            <Image source = {require("../assets/HowToCourses.png")}
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
                defaultButtonText={'Filter by department name'}
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
                data = {courses_filtered}
                renderItem = {(data) =>
                    <View style = {styles.courses}>
                        <View style={styles.row1}>
                            <Text onPress={() => clickedItem(data)} style={styles.text}> {data.item.course_name} </Text>
                        </View>
                        <View style={styles.row2}>
                            <Text  style={styles.text}> {data.item.course_crn} </Text>
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
      background: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
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
      dropdown: {
          top: 30,
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
          left: 20,
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

export default CoursesScreen;
