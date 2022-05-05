import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function DrawerContent(props){

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
  }


  return(
    <View style={{flex:1}}>

      <DrawerContentScrollView {...props}>
        <View style = {styles.drawerContent}>
            <View style = {styles.userInfoSection}>
              <View style = {{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
              source = {{
                uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
              }}
              size = {50}
              />
              <View style = {{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style = {styles.title}>Full Name</Title>
                  <Caption style = {styles.caption}>ID</Caption>
              </View>
            </View>
            </View>

            <Drawer.Section style = {styles.drawerSection}>
                <DrawerItem
                icon = {({color, size}) => (
                  <Icon
                  name = "home-outline"
                  color = {color}
                  size = {size}
                  />
                )}
                label = "Home"
                onPress={() => {props.navigation.navigate('HomePage')}}
                />

                <DrawerItem
                icon = {({color, size}) => (
                  <Icon
                  name = "account-outline"
                  color = {color}
                  size = {size}
                  />
                )}
                label = "Profile"
                onPress={() => {props.navigation.navigate('ProfileScreen')}}
                />

                <DrawerItem
                icon = {({color, size}) => (
                  <Icon
                  name = "map"
                  color = {color}
                  size = {size}
                  />
                )}
                label = "Notifications"
                onPress={() => {props.navigation.navigate('AlertsScreen')}}
                />

                <DrawerItem
                icon = {({color, size}) => (
                  <Icon
                  name = "book-account-outline"
                  color = {color}
                  size = {size}
                  />
                )}
                label = "How to Guide"
                onPress={() => {props.navigation.navigate('WelcomeHomeGuide')}}
                />

                <DrawerItem
                icon = {({color, size}) => (
                  <Icon
                  name = "map"
                  color = {color}
                  size = {size}
                  />
                )}
                label = "AUBSIS"
                onPress={() => {props.navigation.navigate('AUBSIS')}}
                />

                <DrawerItem
                icon = {({color, size}) => (
                  <Icon
                  name = "map"
                  color = {color}
                  size = {size}
                  />
                )}
                label = "AUB MOODLE"
                onPress={() => {props.navigation.navigate('AUBMOODLE')}}
                />

                <DrawerItem
                icon = {({color, size}) => (
                  <Icon
                  name = "map"
                  color = {color}
                  size = {size}
                  />
                )}
                label = "AUB 3D Map"
                onPress={() => {props.navigation.navigate('AUB 3D Map')}}
                />

                <DrawerItem
                icon = {({color, size}) => (
                  <Icon
                  name = "settings-helper"
                  color = {color}
                  size = {size}
                  />
                )}
                label = "Settings"
                onPress={() => {}}
                />

                <DrawerItem
                icon = {({color, size}) => (
                  <Icon
                  name = "head-question-outline"
                  color = {color}
                  size = {size}
                  />
                )}
                label = "About Us"
                onPress={() => {}}
                />
            </Drawer.Section>

            <Drawer.Section title = "Pereferences">
                <TouchableRipple onPress = {() => {toggleTheme()}}>
                    <View style = {styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents = "none">
                          <Switch value={isDarkTheme}/>
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section>

        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
        icon = {({color, size}) => (
          <Icon
          name = "exit-to-app"
          color = {color}
          size = {size}
          />
        )}
        label = "Sign Out"
        onPress={() => {}}
        />
      </Drawer.Section>

    </View>
  );
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
