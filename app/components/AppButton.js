import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../config/colors';

function AppButton({title, color, textcolor, onPress}) {
    return (
        <TouchableOpacity style = {[styles.button, {backgroundColor : colors[color]}]}
                        onPress = {onPress}
        >
        <Text style = {[{color : colors[textcolor]}, {fontSize : 15}, {fontWeight: 'bold'}]}>
               {title}
           </Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 8,
    },
    text: {
        fontSize : 30,
        fontWeight: 'bold',

    },
})

export default AppButton;
