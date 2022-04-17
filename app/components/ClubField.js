import React from 'react';
import colors from '../config/colors';
import {ImageBackground, FlatList, ScrollView, StyleSheet, View, Image, Button, Text, Platform} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';


function ClubField({club_name, club_description, CRN}) {
    return (
        <View style = {styles.clubs}> 
                    <View style={styles.clubcontent}>

                        <View style = {styles.imgtitle}>
                            <View style = {styles.img}>
                                <Avatar.Image
                                    source = {{
                                    uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
                                    }}
                                    size = {50}
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
    },
    description: {
        color: colors.white,
    },
    clubs: {
        marginVertical: 5,
    },

})

export default ClubField;