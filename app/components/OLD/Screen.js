import React from 'react';
import { StyleSheet } from 'react-native';

import  Constants from 'expo-constants';
import { SafeAreaView } from 'react-native';

function Screen({children}) {
    return (
        <SafeAreaView style = {styles.screen}>
            {children}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight ,
        flex : 1,
    }
})
export default Screen;