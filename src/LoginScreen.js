import React, {Component} from 'react';
import {
  Platform,
  Button,
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView

} from 'react-native';

export default class LoginScreen extends Component {
  
  render() {
    return (
            
              <View style={styles.container}>
                  <Text>Tell you love me..</Text>

              </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center' 
  },

});