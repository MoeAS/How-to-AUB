import React, {useState} from 'react';

import { ImageBackground, StyleSheet, View, Image, Text, Keyboard,  TouchableWithoutFeedback} from 'react-native';

import AppFormField from '../components/AppFormField';
import AppForm from '../components/AppForm';
import SubmitButton from '../components/SubmitButton';

import {Formik} from 'formik';
import * as Yup from 'yup';

import colors from '../config/colors';

import { signUp } from '../../actions/authentication';
import {useDispatch} from "react-redux";



const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("email").matches("@mail.aub.edu"),
    password: Yup.string().required().min(6).label("password"),
    username: Yup.string().required().label("username"),
    confirmpass: Yup.string().required().label("confirmpass"),
});

function SignupScreen({props, navigation}) {
    const dispatch = useDispatch();
    [email, setEmail] = useState("");  
    [username, setUsername] = useState("");
    [password, setPassword] = useState("");
    [confirmpass, setConfirmPassword] = useState("");
    function signupFrontend() {
        console.log(validationSchema);
        //dispatch(signUp({email:email, password:password, username:username}, navigation));
    }
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
                initialValues={{email: '', password: '', username: '', confirmpass: ''}}
                onSubmit= {values => console.log(values)}
                validationSchema = {validationSchema}
            >
            <DismissKeyboard>
                <View style = {styles.container}>
                <AppFormField
                name = "email"
                placeholder= "Email Address"
                autoCapitalize = "none"
                autoCorrect = {false}
                keyboardType= "email-address"
                myValue = {email}
                mySetValue = {setEmail}
                />

                <AppFormField
                name = "username"
                placeholder= "Username"
                autoCapitalize = "none"
                autoCorrect = {false}
                keyboardType= "default"
                myValue = {username}
                mySetValue = {setUsername}
                />

                <AppFormField
                name = "password"
                placeholder= "Password"
                autoCapitalize = "none"
                autoCorrect = {false}
                secureTextEntry
                keyboardType= "default"
                myValue = {password}
                mySetValue = {setPassword}
                />

                <AppFormField
                name = "confirmpass"
                placeholder= "Confirm Password"
                autoCapitalize = "none"
                autoCorrect = {false}
                secureTextEntry
                keyboardType= "default"
                myValue = {confirmpass}
                mySetValue = {setConfirmPassword}
                />

                <View style = {styles.signupbutton}>
                    <SubmitButton title = "Sign Up"
                    onPress={signupFrontend}
                    ></SubmitButton>
                </View>

                </View>
                </DismissKeyboard>



            </AppForm>

        </ImageBackground>
        </DismissKeyboard>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',

    },
    signupbutton:{
        top: -80,
        marginVertical: 500,
        marginHorizontal:15,
        padding: 15,
        width: "100%",
        flex: 0.3,
        position: "absolute",
    },
    container: {
        top: 200,
        bottom: 0,
        backgroundColor: colors.white,
        width: "100%",
        height: "80%",
        padding: 15,
        marginVertical: 0,
        flex: 2,
        position: "absolute",
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
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
        top: 95,
        alignItems: "center",
        marginVertical: -55,
    },

    text: {
        fontWeight: "400",
        fontSize : 16,
        padding: 40,
        color: colors.white,
        marginVertical: -40,
    },

})


export default SignupScreen;
