import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import AppButton from '../components/AppButton';
import LoginScreen from './LoginScreen';
import colors from '../config/colors';
import Swiper from 'react-native-web-swiper';
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Card, FAB, TextInput, Button} from 'react-native-paper';

import config from "../config/config.json"

function HomePage({props, navigation}) {
    return (


        <View style = {{flex: 1,backgroundColor: "#212D63"}}>
        <View style={{width: "95%", height: "30%", marginTop: "10%", marginLeft: "3%", justifyContent: "center"}}>
              <View style={{flex:1}}>
                  <Swiper
                    from={0}
                    loop
                    timeout={3}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '>',
                      nextTitleStyle: { color: 'yellow', fontSize: 24, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {'<'}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  >
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(20,20,200, 0.7)"}}>

                      <Image source = {require("../assets/NewsWorkshops.png")}
                      style = {{flex:1, width: '100%', height: '100%', resizeMode: 'contain'}}
                      />

                      </View>

                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(20,20,200, 0.7)"}}>

                      <Image source = {require("../assets/guides2.png")}
                      style = {{flex:1, width: '100%', height: '100%', resizeMode: 'contain'}}
                      >
                      </Image>

                      </View>

                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(20,20,200, 0.7)"}}>

                      <Image source = {require("../assets/NewsWorkshops.png")}
                      style = {{flex:1, width: '100%', height: '100%', resizeMode: 'contain'}}
                      >
                      </Image>

                      </View>
                  </Swiper>
              </View>
              </View>

              <Title style={{color: "white", marginLeft: "2%", marginTop: "7%", fontSize: 30}}>Latest News & Updates</Title>

              <View style={{height: "52%"}} >
              <ScrollView styles= {{flexGrow:1}}>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
                <Title style={{color: "white"}}>Latest News</Title>
              </ScrollView>
              </View>

              </View>


    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,


    },
    buttoncontainer:{
        width: '100%',
        padding: 60,
    },


})

export default HomePage;
