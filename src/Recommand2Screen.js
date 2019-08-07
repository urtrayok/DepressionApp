import React, {Component} from 'react';
import {
  Platform,
  Button,
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';

export default class Recommend2Screen extends Component {
  static navigationOptions ={
      header : null
  }
    render() {
        const { navigate } = this.props.navigation;
      return (

        <ImageBackground 
        source = {require('../src/assets/img/bgRe2.png')}
        resizeMode='cover'
        style={styles.container}>
              <View style={styles.styleBotton}>

                <View style={styles.top}>
                  <Text style={styles.header}> 
                  </Text>
                </View>

                <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('story')} style={styles.addButton}>
                    <Image 
                    resizeMode='cover'
                    source = {require('../src/assets/img/re.png')}
                    style={styles.ImageBotton}/>
                </TouchableOpacity> 
                

              </View>
        
        </ImageBackground>
      );
    }
  }
  
const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent:'center' 
    },
  
    Top:{
      height :'50%',
      alignItems: "center",
      justifyContent: "center",
      margin:100,
  
    },

    header:{
      fontSize :20,
      borderColor:'rgba(255,255,255,0)',
      borderWidth: 2,
      padding : 175,
      paddingLeft: 40,
      paddingRight :40,
      backgroundColor: 'rgba(255,255,255,0)',
      margin:10,
    },

    ImageBotton:{
      width: '100%',
      height: '100%',
    },

    Image:{
      flex: 1,
      alignItems: 'center',
      resizeMode:'cover',
      width: 350,
      height: 200,
      borderRadius: 12,
    },
    
    addButton: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      width: 200,
      height:85,
      borderRadius: 140,
      alignItems: "center",
      justifyContent: "center",
      margin:10,
    },
  
    addButtonText: {
      color: "#fff",
      fontSize: 18
    },
  
    Text :{
      color: "#fff",
      fontSize: 20,
      alignItems: 'center',
      justifyContent: "center",
    },
  
  });

