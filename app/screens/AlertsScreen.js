import React, {useEffect, useState, Route} from 'react';
import Screen from '../components/Screen';
import colors from '../config/colors';
import {StyleSheet, View, ScrollView, FlatList, Dimensions, Text} from 'react-native';
import {Title, Card}  from 'react-native-paper';
import Readmore from '../components/Readmore';

import config from "../config/config.json"

function AlertsScreen(props) {
    const [reminders, setReminders] = useState([{"date": "", "description": "", "id": 8, "title": "", "user_email": ""}]);
    const [loading, setLoading] = useState(false);


    const loadData = () => {
      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/alerts` ,{
          method : "GET"
      })
      .then(resp => resp.json())
      .then(reminders => {setReminders(reminders);
        setLoading(false)})
      .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch(`http://${config.IP_ADDRESS}:${config.PORT}/alerts` ,{
            method : "GET"
        })
        .then(resp => resp.json())
        .then(reminders => {setReminders(reminders);
          setLoading(false)})
    }, []

    );

    console.log(reminders)

    // for (let i = 0; i < 1 ; i++){
    //     console.log("fff");
    //     date = reminders[i]["date"];
    //     Date = Date.parse(date);
    //     console.log(Date);

    // }


    const renderData = (item) => {
        return(
          <Card style = {styles.card}>

            {/* <Text style = {{fontSize: 20, marginBottom: 10, fontWeight: "bold", color: "white"}} >{item["title"]} </Text> */}
            <Readmore title= {item["title"]} text = {item["description"]} date = {item["date"]}   > </Readmore>
            {/* <Text style = {{fontSize: 15, color: "white"}}>{item["description"]} </Text> */}
            {/* <Text style = {{left: Dimensions.get('window').width - 120, fontWeight: "bold", color: "white", marginTop: 15}}>{item["date"]} </Text> */}
          </Card>
        )
    }

    return (



            <View style={styles.container}>
                <View style = {styles.Title}>
                <Text style = {styles.title}> Alerts </Text>
                </View>


                <View style = {styles.subcontainer}  >

            <FlatList style= {styles.bottom}

                data = {reminders}
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
            </View>

    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.darkgray,
        flex: 1
    },
    container: {
        backgroundColor: colors.darkblue,
        flex:1,
        alignItems: "center"
    },
    subcontainer: {
        top: 20,

    },

    card:{
        flex: 1,
        width : Dimensions.get('window').width - 30,
        backgroundColor: colors.darkgray,
        padding: 10,
        marginTop: "10%",
        borderRadius: 3,

      },
      title: {
          color: "white",
          top: 20,
          fontSize: 30,
          fontWeight: 'bold',
      },

})

export default AlertsScreen;
