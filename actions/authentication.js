import { Alert } from "react-native";
import * as api from "../api/index";

export const signIn = (signInData, navigation) => async (dispatch) => {
    try {
        const response = await api.signin(signInData);
        if (response.data.error){
            // Tell the user enno fi error
            Alert.alert(response.data.message);
        }
        else {
            Alert.alert(response.data.message);
            navigation.navigate("How to Guide");
        }
    } catch (error) {
        Alert.alert("Something went wrong!");
    }
}

export const signUp = (signUpData, navigation) => async (dispatch) => {
    try {
        const response = await api.signup(signUpData);
        if (response.data.error){
            // Tell the user enno fi error
            Alert.alert(response.data.message);
        }
        else {
            Alert.alert(response.data.message);
            navigation.navigate("LoginScreen");
        }
    } catch (error) {
        Alert.alert("Something went wrong!");
    }
}