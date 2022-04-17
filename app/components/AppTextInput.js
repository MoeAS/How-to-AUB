import React from 'react';
import { TextInput, View, StyleSheet, Text, Platform} from 'react-native';





import colors from '../config/colors';

function AppTextInput({mySetValue, ...otherProps}) {

    return (
        <View style = {styles.container}>


            <TextInput
                style = {styles.textInput}
                {...otherProps}


            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.whitesmoke,
        borderRadius: 15,
        padding: 7,
        width: "100%",
        height: 60,
        marginVertical: 10,
        

    },

    textInput: {
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontSize: 18,


    }
})

export default AppTextInput;
