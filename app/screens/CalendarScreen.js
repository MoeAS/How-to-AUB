import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity, Alert, Dimensions} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import {Card, Avatar, FAB} from 'react-native-paper';

import config from "../config/config.json"


function CalendarScreen({route, navigation}) {

    const reminders = route.params.reminders;
    console.log(reminders);
    const [items, setItems] = useState({});
    // const [data, setData] = useState(['{"key": "value"}']);
    const reminder = route.params.reminder;
    console.log(reminder)
    // useEffect(() => {
    //     fetch("http://172.20.10.2:3000/reminders" ,{
    //         method : "GET"
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {setData(data)})
    // }, [data]

    if (reminder === undefined || reminder == {}){

    }
    else{
      console.log("cow");
      reminders.push(reminder);
      console.log(reminders);
    }

    // );

    //const data = [{"reminder_date": "2022-04-18", "reminder_desc": "this assignment consists of 3 hard problems so start earlier", "reminder_name": "EECE331 HW", "user_email": "sre17@mail.aub.edu"}, {"reminder_date": "2022-04-20", "reminder_desc": "this assignment consists of 5 hard problems so start earlier", "reminder_name": "EECE332 HW", "user_email": "sre17@mail.aub.edu"}, {"reminder_date": "2022-04-20", "reminder_desc": "this assignment consists of 8 hard problems so start earlier", "reminder_name": "EECE334 HW", "user_email": "sre17@mail.aub.edu"}, {"reminder_date": "2022-04-20", "reminder_desc": "your midterm is today", "reminder_name": "EECE490 Exam", "user_email": "sre17@mail.aub.edu"}];
    const data = [];

    // const [reminders, setReminders] = useState([{"date": "", "description": "", "id": 8, "title": "", "user_email": ""}]);

    // useEffect(() => {
    //     fetch("http://192.168.2.145:3000/reminders" ,{
    //         method : "GET"
    //     })
    //     .then(resp => resp.json())
    //     .then(reminders => {setReminders(reminders)})
    // }, [reminders]

    // );





    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };


    const loadItems = (day) => {
        const items = items || {};
        console.log(day)
        setTimeout(() => {

        for (let i = -1; i < 10; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {

                console.log(data);
                items[strTime] = [];


                //const numItems = Math.floor(Math.random() * 3 + 1);

                for (let j = 0; j < reminders.length; j++) {
                    console.log(strTime)
                    if(reminders[j]["date"] == strTime){

                        items[strTime].push({
                        name: reminders[j]["title"],
                        desc : reminders[j]["description"],
                        height: Math.max(50, Math.floor(Math.random() * 150)),
                        });
                    }
                }
            }
        }
        const newItems = {};
        Object.keys(items).forEach((key) => {
            newItems[key] = items[key];
        });
        setItems(newItems);
        },0);
    };


    const renderItem = (item) => {
        const fontSize  = 16 ;
        const color =  '#43515c';
        return (
            <TouchableOpacity onPress={() => Alert.alert(item.desc)}
            style={{marginRight: 10, marginTop: 17}}>
              <Card>
                <Card.Content>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                     <Text style={{fontSize, color}}>{item.name}</Text>
                    <Avatar.Text label="J" />
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          );
    };

    return (
        <View style = {styles.calendar} >
            <Agenda

                items={items}
                loadItemsForMonth={loadItems}
                selected={'2022-05-01'}
                renderItem={renderItem}


            />

            <FAB
              style = {styles.fab}
              small = {false}
              icon = "plus"
              theme = {{colors:{accent: "blue"}}}
              onPress = {() => navigation.navigate("CreateReminder", {screen: 'CreateReminder', params: {reminders: reminders}})}
            />

        </View>


    );
}

const styles = StyleSheet.create({
    calendar:{
        flex: 1,
    },
    fab: {
        position: 'absolute',
        margin:16,
        left: 0,
        bottom: "0%",

      },

})

export default CalendarScreen;
