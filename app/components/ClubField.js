import React from 'react';
import colors from '../config/colors';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';


function ClubField({club_name, club_description,image, CRN}) {
    console.log(image);
    return (
        <View style = {styles.clubs}> 
                    <View style={styles.clubcontent}>

                        <View style = {styles.imgtitle}>
                            <View style = {styles.img}>
                                <Image
                                    source ={image}
                                    style = {styles.img}
                                />
                            </View>
                            <View style = {styles.title}>
                                <Title style = {styles.textTitle}>{club_name}</Title>
                            </View>
                        </View>

                        <View style = {styles.description}>
                            <Text style = {styles.textdesc} > {club_description} </Text>
                        </View>

                    </View>
            </View>
    );
}

const styles = StyleSheet.create({
   
    
    textdesc: {
        color: colors.white,
        
    },
    textTitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 28,
    },
    
    clubcontent: {
        flex: 1,
        borderRadius: 10,
        width: 400,
        padding: 10,
        backgroundColor: colors.darkgray,
        height: 200,
        top: 30,
       
        
    },
    imgtitle: {
        flexDirection: 'row',
    },
    title: {
        padding: 10,
        marginTop: 10,
    },
    description: {
        color: colors.white,
        marginTop: 10,
    },
    clubs: {
        marginVertical: 5,
        borderRadius: 20,
        width: 380,
        height: 200,
    },
    img :{
        width: 100,
        height: 80.
    }

})

export default ClubField;