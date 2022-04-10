import React,{ useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Platform, Keyboard,  TouchableWithoutFeedback, Alert} from 'react-native';

import AppFormField from '../components/AppFormField';
import AppForm from '../components/AppForm';
import SubmitButton from '../components/SubmitButton';
import LoginAfter from './LoginAfter';

import {Formik} from 'formik';
import * as Yup from 'yup';

import colors from '../config/colors';

import { signIn } from '../../actions/authentication';
import { UserInterfaceIdiom } from 'expo-constants';

import {useDispatch, useSelector} from "react-redux";
import { fetchingClubs } from '../../actions/fetchingClubs';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email").nullable().matches("@mail.aub.edu"),
    password: Yup.string().required().min(6).label("Password").nullable()
});

function LoginScreen({props, navigation}) {
    const dispatch = useDispatch();
    [email, setEmail] = useState("");
    [password, setPassword] = useState("");
    const storedata = useSelector((state) => state);
    console.log("testing data:");
    console.log(storedata);
    function loginFrontend() {
        console.log(email);
        console.log(password);
        dispatch(signIn({email:email, password:password}, navigation));
        dispatch(fetchingClubs());
    };

    return (
        <DismissKeyboard>
        <ImageBackground
        //blurRadius={5}
        style = {styles.background}
        source= {require("../assets/background1.png") }
        >
<DismissKeyboard>
            <View style = {styles.logocontent}>
                <Image source = {require("../assets/HOWTOAUB.png")}
                style = {styles.logo}
                >
                </Image>

            </View>
</DismissKeyboard>

            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit= {values => console.log(values)}
                validationSchema = {validationSchema}
            >
            <DismissKeyboard>
                <View style = {styles.container}>
                <AppFormField
                name = "email"
                placeholder= "Email"
                autoCapitalize = "none"
                autoCorrect = {false}
                keyboardType= "email-address"
                mySetValue={setEmail}
                />

                <AppFormField
                name = "password"
                placeholder= "Password"
                autoCapitalize = "none"
                autoCorrect = {false}
                secureTextEntry
                keyboardType= "default"
                mySetValue={setPassword}
                />
                </View>
            </DismissKeyboard>
                <View style = {styles.loginbutton}>
                    <SubmitButton title = "Login"
                    onPress={loginFrontend}
                    ></SubmitButton>
                </View>

            </AppForm>




            <View >
                <Text style = {styles.forget}> Forgot Password </Text>
            </View>

        </ImageBackground>
</DismissKeyboard>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginbutton:{
        top: 70,
        marginVertical: 400,
        padding: 15,
        width: "100%",
        flex: 0.3,
        position: "absolute",
    },
    container: {
        top: 160,
        width: "100%",
        padding: 15,
        marginVertical: 55,
        flex: 0.9,
        position: "absolute",
    },
    forget:{
        color: colors.white,
        top: 60,
        fontWeight: 'bold',
        position: "absolute",
        marginVertical: 230,
        marginHorizontal: -55,
    },
    logo: {
        width: 130,
        height: 130,
    },
    logocontent: {
        position: "absolute",
        top: 110,
        alignItems: "center",
        marginVertical: -55,
    },

    text: {
        fontWeight: "400",
        fontSize : 16,
        padding: 40,
        color: colors.white,
    },

})

export default LoginScreen;
