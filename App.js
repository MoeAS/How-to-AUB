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
import HomeGuide from './app/screens/HomeGuide';
import ClubsScreen from './app/screens/ClubsScreen';
import CoursesScreen from './app/screens/CoursesScreen';
import CourseDetails from './app/screens/CourseDetails';
import HowtoGuideDetails from './app/screens/HowtoGuideDetails';
import HowtoGuideDetailsEdit from './app/screens/HowtoGuideDetailsEdit';
import HowtoGuide from './app/screens/HowtoGuide';
import CreateForum from './app/screens/CreateForum';
import CreateReplyForum from './app/screens/CreateReplyForum';
import CalendarScreen from './app/screens/CalendarScreen';
import WelcomeHomeGuide from './app/screens/WelcomeHomeGuide';
import ClubDetails from './app/screens/ClubDetails';
import CreateReminder from './app/screens/CreateReminder';
import AlertsScreen from './app/screens/AlertsScreen';
import HomePage from './app/screens/HomePage';
import Survey from './app/screens/Survey';
import AboutUs from './app/screens/AboutUs';
import StudyAreaScreen from './app/screens/StudyAreaScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import EditProfile from './app/screens/EditProfile';
import AppTextInput from './app/components/AppTextInput';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import { DrawerContent } from './app/components/DrawerContent';
import { LogBox } from 'react-native';


const HIDE_LOGS = true;


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
const HomeGuideStack = createNativeStackNavigator();
const AUBMAPSStack = createNativeStackNavigator();
const AUBSISStack = createNativeStackNavigator();
const AUBMOODLEStack = createNativeStackNavigator();
const ClubsScreenStack = createNativeStackNavigator();
const CoursesScreenStack = createNativeStackNavigator();
const CourseDetailsStack = createNativeStackNavigator();
const HowtoGuideStack = createNativeStackNavigator();
const CreateForumStack = createNativeStackNavigator();
const CreateReplyForumStack = createNativeStackNavigator();
const HowtoGuideDetailsStack = createNativeStackNavigator();
const HowtoGuideDetailsEditStack = createNativeStackNavigator();
const CalendarScreenStack = createNativeStackNavigator();
const WelcomeHomeGuideStack = createNativeStackNavigator();
const ClubDetailsStack = createNativeStackNavigator();
const CreateReminderStack = createNativeStackNavigator();
const HomePageStack = createNativeStackNavigator();
const AlertsScreenStack = createNativeStackNavigator();
const SurveyStack = createNativeStackNavigator();
const ProfileScreenStack = createNativeStackNavigator();
const EditProfileStack = createNativeStackNavigator();
const StudyAreaScreenStack = createNativeStackNavigator();
const AboutUsStack = createNativeStackNavigator();

    const WelcomeStackScreen = ({navigation}) => (
    <WelcomeScreenStack.Navigator>
    <WelcomeScreenStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
    headerShown: false,
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
    headerShown: false,
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
    headerShown: false,
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
    headerShown: false,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </SignupScreenStack.Navigator>
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

    const CoursesStackScreen = ({navigation}) => (
    <CoursesScreenStack.Navigator>
    <CoursesScreenStack.Screen name="CoursesScreen" component={CoursesScreen} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </CoursesScreenStack.Navigator>
    );

    const CourseStackDetails = ({navigation}) => (
    <CourseDetailsStack.Navigator>
    <CourseDetailsStack.Screen name="CourseDetails" component={CourseDetails} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </CourseDetailsStack.Navigator>
    );

    const HowtoGuideStackScreen = ({navigation}) => (
    <HowtoGuideStack.Navigator>
    <HowtoGuideStack.Screen name="HowtoGuide" component={HowtoGuide} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </HowtoGuideStack.Navigator>
    );

    const CreateForumStackScreen = ({navigation}) => (
    <CreateForumStack.Navigator>
    <CreateForumStack.Screen name="CreateForum" component={CreateForum} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </CreateForumStack.Navigator>
    );
    const HowtoGuideDetailsStackScreen = ({navigation}) => (
    <HowtoGuideDetailsStack.Navigator>
    <HowtoGuideDetailsStack.Screen name="HowtoGuideDetails" component={HowtoGuideDetails} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </HowtoGuideDetailsStack.Navigator>
    );
    const HowtoGuideDetailsEditStackScreen = ({navigation}) => (
    <HowtoGuideDetailsEditStack.Navigator>
    <HowtoGuideDetailsEditStack.Screen name="HowtoGuideDetailsEdit" component={HowtoGuideDetailsEdit} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </HowtoGuideDetailsEditStack.Navigator>
    );
    const CalendarStackScreen = ({navigation}) => (
    <CalendarScreenStack.Navigator>
    <CalendarScreenStack.Screen name="CalendarScreen" component={CalendarScreen} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </CalendarScreenStack.Navigator>
    );
    const WelcomeHomeGuideScreenStack = ({navigation}) => (
    <WelcomeHomeGuideStack.Navigator>
    <WelcomeHomeGuideStack.Screen name="WelcomeHomeGuide" component={WelcomeHomeGuide} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </WelcomeHomeGuideStack.Navigator>
    );
    const ClubStackDetails= ({navigation}) => (
    <ClubDetailsStack.Navigator>
    <ClubDetailsStack.Screen name="ClubDetails" component={ClubDetails} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </ClubDetailsStack.Navigator>
    );

    const CreateReminderStackScreen = ({navigation}) => (
    <CreateReminderStack.Navigator>
    <CreateReminderStack.Screen name="CreateReminder" component={CreateReminder} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </CreateReminderStack.Navigator>
    );

    const HomePageStackScreen = ({navigation}) => (
    <HomePageStack.Navigator>
    <HomePageStack.Screen name="HomePage" component={HomePage} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </HomePageStack.Navigator>
    );

    const AlertsStackScreen = ({navigation}) => (
    <AlertsScreenStack.Navigator>
    <AlertsScreenStack.Screen name="Alerts" component={AlertsScreen} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </AlertsScreenStack.Navigator>
    );

    const CreateReplyForumStackScreen = ({navigation}) => (
    <CreateReplyForumStack.Navigator>
    <CreateReplyForumStack.Screen name="CreateReplyForum" component={CreateReplyForum} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </CreateReplyForumStack.Navigator>
    );

    const SurveyStackScreen = ({navigation}) => (
    <SurveyStack.Navigator>
    <SurveyStack.Screen name="Survey" component={Survey} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </SurveyStack.Navigator>
    );

    const ProfileStackScreen = ({navigation}) => (
    <ProfileScreenStack.Navigator>
    <ProfileScreenStack.Screen name="ProfileScreen" component={ProfileScreen} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </ProfileScreenStack.Navigator>
    );

    const EditProfileStackScreen = ({navigation}) => (
    <EditProfileStack.Navigator>
    <EditProfileStack.Screen name="EditProfile" component={EditProfile} options={{
    headerShown: true,
    headerTransparent: true,
    title: '',
    headerLeft: () => (
    <Icon name='ios-menu' size = {25}
    onPress={() => {navigation.openDrawer()}}></Icon>
    )
    }}/>
    </EditProfileStack.Navigator>
    );

    const StudyAreaStackScreen = ({navigation}) => (
    <StudyAreaScreenStack.Navigator>
      <StudyAreaScreenStack.Screen name="StudyArea" component={StudyAreaScreen} options={{
        headerShown: true,
        headerTransparent: true,
        title: '',
        headerLeft: () => (
        <Icon name='ios-menu' size = {25}
        onPress={() => {navigation.openDrawer()}}></Icon>
        )
      }}/>
    </StudyAreaScreenStack.Navigator>
    );

    const AboutUsStackScreen = ({navigation}) => (
    <AboutUsStack.Navigator>
      <AboutUsStack.Screen name="AboutUs" component={AboutUs} options={{
        headerShown: true,
        headerTransparent: true,
        title: '',
        headerLeft: () => (
        <Icon name='ios-menu' size = {25}
        onPress={() => {navigation.openDrawer()}}></Icon>
        )
      }}/>
    </AboutUsStack.Navigator>
    );

const App = () => {

  if (HIDE_LOGS == true) {
    LogBox.ignoreAllLogs();//Ignore all log notifications
  }

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
        <Drawer.Screen name="SignupScreen" component={SignupStackScreen} />
        <Drawer.Screen name="AUBSIS" component={AUBSISStackScreen} />
        <Drawer.Screen name="AUBMOODLE" component={AUBMOODLEStackScreen} />
        <Drawer.Screen name="Clubs" component={ClubsStackScreen} />
        <Drawer.Screen name="Courses" component={CoursesStackScreen} />
        <Drawer.Screen name="CourseDetails" component={CourseStackDetails} initialParams={{course_crn:'123'}} />
        <Drawer.Screen name="HowtoGuide" component={HowtoGuideStackScreen} />
        <Drawer.Screen name="CreateForum" component={CreateForumStackScreen} />
        <Drawer.Screen name="HowtoGuideDetails" component={HowtoGuideDetailsStackScreen} />
        <Drawer.Screen name="HowtoGuideDetailsEdit" component={HowtoGuideDetailsEditStackScreen} />
        <Drawer.Screen name="CalendarScreen" component={CalendarStackScreen} />
        <Drawer.Screen name="WelcomeHomeGuide" component={WelcomeHomeGuideScreenStack} />
        <Drawer.Screen name="ClubDetails" component={ClubStackDetails} />
        <Drawer.Screen name="CreateReminder" component={CreateReminderStackScreen} />
        <Drawer.Screen name="HomePage" component={HomePageStackScreen} />
        <Drawer.Screen name="AlertsScreen" component={AlertsStackScreen} />
        <Drawer.Screen name="CreateReplyForum" component={CreateReplyForumStackScreen} />
        <Drawer.Screen name="Survey" component={SurveyStackScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileStackScreen} />
        <Drawer.Screen name="EditProfile" component={EditProfileStackScreen} />
        <Drawer.Screen name="StudyAreaScreen" component={StudyAreaStackScreen} />
        <Drawer.Screen name="AboutUs" component={AboutUsStackScreen} />
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
