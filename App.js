/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Component } from 'react';
import 'react-native-gesture-handler';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SignupLogin from './app/screens/SignupLogin';
import SignupScreen from './app/screens/SignupScreen';
import LoginScreen from './app/screens/LoginScreen';
import LoginAfter from './app/screens/LoginAfter';
import HomeGuide from './app/screens/HomeGuide';
import ClubsScreen from './app/screens/ClubsScreen';
import AppTextInput from './app/components/AppTextInput';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import { DrawerContent } from './app/components/DrawerContent';






const AUB2DMAP = 'https://www.aub.edu.lb/Documents/map_posters.pdf';
const AUB3DMAP = 'https://fpdumap.azurewebsites.net/';

class AUBMAPS extends Component {
  render() {
    return <WebView
    javaScriptEnabled={true}
    source={{ uri: AUB3DMAP }} />;
  }
}

class AUBSIS extends Component {
  render() {
    return <WebView
    javaScriptEnabled={true}
    source={{ uri: 'https://www-banner.aub.edu.lb/pls/weba/twbkwbis.P_WWWLogin' }} />;
  }
}

class AUBMOODLE extends Component {
  render() {
    return <WebView
    javaScriptEnabled={true}
    source={{ uri: 'https://lms.aub.edu.lb/' }} />;
  }
}

//const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const WelcomeScreenStack = createNativeStackNavigator();
const SignupLoginStack = createNativeStackNavigator();
const LoginScreenStack = createNativeStackNavigator();
const SignupScreenStack = createNativeStackNavigator();
const LoginAfterStack = createNativeStackNavigator();
const HomeGuideStack = createNativeStackNavigator();
const AUBMAPSStack = createNativeStackNavigator();
const AUBSISStack = createNativeStackNavigator();
const AUBMOODLEStack = createNativeStackNavigator();
const ClubsScreenStack = createNativeStackNavigator();

const WelcomeStackScreen = ({navigation}) => (
  <WelcomeScreenStack.Navigator>
    <WelcomeScreenStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu-sharp' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
  </WelcomeScreenStack.Navigator>
  );

  const SignupLoginStackScreen = ({navigation}) => (
    <SignupLoginStack.Navigator>
      <SignupLoginStack.Screen name="SignupLogin" component={SignupLogin} options={{
        headerShown: true,
        headerTransparent: true,
        title: '',
        headerLeft: () => (
        <Icon name='ios-menu' size = {25}
        onPress={() => {navigation.openDrawer()}}></Icon>
        )
      }}/>
    </SignupLoginStack.Navigator>
    );

    const LoginStackScreen = ({navigation}) => (
      <LoginScreenStack.Navigator>
        <LoginScreenStack.Screen name="LoginScreen" component={LoginScreen} options={{
          headerShown: true,
          headerTransparent: true,
          title: '',
          headerLeft: () => (
          <Icon name='ios-menu' size = {25}
          onPress={() => {navigation.openDrawer()}}></Icon>
          )
        }}/>
      </LoginScreenStack.Navigator>
      );

      const SignupStackScreen = ({navigation}) => (
        <SignupScreenStack.Navigator>
          <SignupScreenStack.Screen name="SignupScreen" component={SignupScreen} options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerLeft: () => (
            <Icon name='ios-menu' size = {25}
            onPress={() => {navigation.openDrawer()}}></Icon>
            )
          }}/>
        </SignupScreenStack.Navigator>
        );

        const LoginAfterStackScreen = ({navigation}) => (
          <LoginAfterStack.Navigator>
            <LoginAfterStack.Screen name="LoginAfter" component={LoginAfter} options={{
              headerShown: true,
              headerTransparent: true,
              title: '',
              headerLeft: () => (
              <Icon name='ios-menu' size = {25}
              onPress={() => {navigation.openDrawer()}}></Icon>
              )
            }}/>
          </LoginAfterStack.Navigator>
          );

          const HomeGuideStackScreen = ({navigation}) => (
            <HomeGuideStack.Navigator>
              <HomeGuideStack.Screen name="HomeGuide" component={HomeGuide} options={{
                headerShown: true,
                headerTransparent: true,
                title: '',
                headerLeft: () => (
                <Icon name='ios-menu' size = {25}
                onPress={() => {navigation.openDrawer()}}></Icon>
                )
              }}/>
            </HomeGuideStack.Navigator>
            );

            const AUBMAPSStackScreen = ({navigation}) => (
              <AUBMAPSStack.Navigator>
                <AUBMAPSStack.Screen name="AUBMAPS" component={AUBMAPS} options={{
                  headerShown: true,
                  headerTransparent: true,
                  title: '',
                  headerLeft: () => (
                  <Icon name='ios-menu' size = {25}
                  onPress={() => {navigation.openDrawer()}}></Icon>
                  )
                }}/>
              </AUBMAPSStack.Navigator>
              );

              const AUBSISStackScreen = ({navigation}) => (
                <AUBSISStack.Navigator>
                  <AUBSISStack.Screen name="AUBSIS" component={AUBSIS} options={{
                    headerShown: true,
                    headerTransparent: true,
                    title: '',
                    headerLeft: () => (
                    <Icon name='ios-menu' size = {25}
                    onPress={() => {navigation.openDrawer()}}></Icon>
                    )
                  }}/>
                </AUBSISStack.Navigator>
                );

                const AUBMOODLEStackScreen = ({navigation}) => (
                  <AUBMOODLEStack.Navigator>
                    <AUBMOODLEStack.Screen name="AUBMOODLE" component={AUBMOODLE} options={{
                      headerShown: true,
                      headerTransparent: true,
                      title: '',
                      headerLeft: () => (
                      <Icon name='ios-menu' size = {25}
                      onPress={() => {navigation.openDrawer()}}></Icon>
                      )
                    }}/>
                  </AUBMOODLEStack.Navigator>
                  );
                  const ClubsStackScreen = ({navigation}) => (
                    <ClubsScreenStack.Navigator>
                      <ClubsScreenStack.Screen name="Clubs" component={ClubsScreen} options={{
                        headerShown: true,
                        headerTransparent: true,
                        title: '',
                        headerLeft: () => (
                        <Icon name='ios-menu' size = {25}
                        onPress={() => {navigation.openDrawer()}}></Icon>
                        )
                      }}/>
                    </ClubsScreenStack.Navigator>
                    );

const App = () => {

  return (
   
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
      }}
      drawerContent={props => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={WelcomeStackScreen} />
        <Drawer.Screen name="How to Guide" component={HomeGuideStackScreen} />
        <Drawer.Screen name="AUB 3D Map" component={AUBMAPSStackScreen} />
        <Drawer.Screen name="SignupLogin" component={SignupLoginStackScreen} />
        <Drawer.Screen name="LoginScreen" component={LoginStackScreen} />
        <Drawer.Screen name="LoginAfter" component={LoginAfterStackScreen} />
        <Drawer.Screen name="SignupScreen" component={SignupStackScreen} />
        <Drawer.Screen name="AUBSIS" component={AUBSISStackScreen} />
        <Drawer.Screen name="AUBMOODLE" component={AUBMOODLEStackScreen} />
        <Drawer.Screen name="Clubs" component={ClubsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
