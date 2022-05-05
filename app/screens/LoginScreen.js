import React,{ useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Platform, Keyboard,  TouchableWithoutFeedback, Alert} from 'react-native';

import AppFormField from '../components/AppFormField';
import AppForm from '../components/AppForm';
import SubmitButton from '../components/SubmitButton';

import {Formik} from 'formik';
import * as Yup from 'yup';

import colors from '../config/colors';

import { signIn } from '../../actions/authentication';
import { UserInterfaceIdiom } from 'expo-constants';

import {useDispatch, useSelector} from "react-redux";
import { fetchingClubs } from '../../actions/fetchingClubs';

import config from "../config/config.json"

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

    [email, setEmail] = useState("");
    [password, setPassword] = useState("");
    [done_survey, setSurvey] = useState([]);

    const headers = {"Content-type" : "application/json"};

    const signin = () => {
      console.log(email)
        fetch(`http://${config.IP_ADDRESS}:${config.PORT}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "user_email": email,
                "password": password

        }) // body data type must match "Content-Type" header


        })
        .then((response) => {
            console.log(response)
            console.log(response.status)
            if (response.status == 200) {
            Alert.alert(
            "Success",
            "Log In Successful!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );

          //navigation.navigate("How to Guide")
          surveyCheck();
          }

          else if (response.status == 401) {
            Alert.alert(
            "Error",
            "Enter email or password",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          }

          else if (response.status == 402) {
            Alert.alert(
            "Error",
            "Invalid Email",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          }

          else if (response.status == 403) {
            Alert.alert(
            "Error",
            "Invalid Password",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          }

          else {
            Alert.alert(
            "Error",
            "An Error Occured",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
          }

          })
          .catch(error => console.log(error))



  };


  const surveyCheck = () => {
      fetch(`http://${config.IP_ADDRESS}:${config.PORT}/getsurvey/${email}`, {
          method: 'GET',
          headers: {
              "Content-Type": "application/json"
          },
      })
      .then(resp => resp.json())
      .then(done_survey => {
        setSurvey(done_survey);
        console.log(done_survey);
      })


      .then((response) => {
          console.log(response);

          if (done_survey.done_survey == false){
            console.log("survey not doneee");
            navigation.navigate("EditProfile");
          }

          else{
            console.log("survey doneeee");
            navigation.navigate("HomePage");
          }
        })

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
                value = {email => setEmail(email)}
                onChangeText = {email => setEmail(email)}
                />

                <AppFormField
                name = "password"
                placeholder= "Password"
                autoCapitalize = "none"
                autoCorrect = {false}
                secureTextEntry
                keyboardType= "default"
                mySetValue={setPassword}
                onChangeText = {pass => setPassword(pass)}
                />
                </View>
            </DismissKeyboard>
                <View style = {styles.loginbutton}>
                    <SubmitButton title = "Login"
                    onPress={() => signin()}
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
