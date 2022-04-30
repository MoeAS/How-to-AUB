import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import colors from '../config/colors';


function Readmore({title, text, date})  {
  
  _handleTextReady = () => {
    console.log('ready!');
  }

    return (
      <View style={styles.container}>
        <View style={styles.card}>

          <Text style = {{fontSize: 20, marginBottom: 10, fontWeight: "bold", color: "white"}} >{title} </Text>

          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
             <Text style={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>

          </ReadMore>
          <Text style = {{left: Dimensions.get('window').width - 160, fontWeight: "bold", color: "white", marginTop: 15}}>{date} </Text>

        </View>
      </View>
    );
  

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgba(0,0,0,0.05)',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  card: {
    //marginHorizontal: 1,
   // padding: 1,
    //borderRadius: 3,
    //borderColor: 'rgba(0,0,0,0.1)',
    //borderWidth: 1,
    backgroundColor: colors.darkgray,
  },
  cardText: {
    fontSize: 14,
    color: colors.white,
  },
});

export default Readmore;