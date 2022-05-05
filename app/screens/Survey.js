import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import AppButton from '../components/AppButton';
import LoginScreen from './LoginScreen';
import colors from '../config/colors';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

function Survey({props, navigation}) {
    return (

            <View style = {styles.buttoncontainer}>
            <TouchableOpacity
                style={{
                  borderWidth:1,
                  borderColor:'rgba(0,0,0,0.2)',
                  alignItems:'center',
                  justifyContent:'center',
                  width:100,
                  height:100,
                  backgroundColor:'#fff',
                  borderRadius:50,
                }}
                >
                <Icon name={"chevron-right"}  size={30} color="#01a699" />
            </TouchableOpacity>
            </View>


    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttoncontainer:{
        width: '100%',
        padding: 60,
    },


})

export default Survey;
