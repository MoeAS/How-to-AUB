import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity, Alert, Dimensions} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import {Card, Avatar, FAB} from 'react-native-paper';


function CalendarScreen({props, navigation}) {

    const [items, setItems] = useState({});
    // const [data, setData] = useState(['{"key": "value"}']);

    // useEffect(() => {
    //     fetch("http://172.20.10.2:3000/reminders" ,{
    //         method : "GET"
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {setData(data)})
    // }, [data]

    // );
    
    const data = [{"reminder_date": "2022-04-18", "reminder_desc": "this assignment consists of 3 hard problems so start earlier", "reminder_name": "EECE331 HW", "user_email": "sre17@mail.aub.edu"}, {"reminder_date": "2022-04-20", "reminder_desc": "this assignment consists of 5 hard problems so start earlier", "reminder_name": "EECE332 HW", "user_email": "sre17@mail.aub.edu"}, {"reminder_date": "2022-04-20", "reminder_desc": "this assignment consists of 8 hard problems so start earlier", "reminder_name": "EECE334 HW", "user_email": "sre17@mail.aub.edu"}, {"reminder_date": "2022-04-20", "reminder_desc": "your midterm is today", "reminder_name": "EECE490 Exam", "user_email": "sre17@mail.aub.edu"}];
    
    
    
    
    
    
    
    
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
                
                for (let j = 0; j < data.length; j++) {
                    console.log(strTime)
                    if(data[j]["reminder_date"] == strTime){
                        
                        items[strTime].push({
                        name: data[j]["reminder_name"],
                        desc : data[j]["reminder_desc"],
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
        <View style = {styles.calendar}>
            <Agenda
                
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2022-04-18'}
                renderItem={renderItem}
                
                
            />

            <FAB
              style = {styles.fab}
              small = {false}
              icon = "plus"
              theme = {{colors:{accent: "blue"}}}
              onPress = {() => navigation.navigate("CreateReminder")}
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
        bottom: Dimensions.get('window').height - Dimensions.get('window').width - 370,
        
      },
  
})

export default CalendarScreen;