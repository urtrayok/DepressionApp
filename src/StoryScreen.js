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

export default class StoryScreen extends Component {
  static navigationOptions ={
    header : null
}
  render() {
   const { navigate } = this.props.navigation;
    return (
        <ScrollView>

            <ImageBackground 
                source = {require('../src/assets/img/storyy.png')}
                style={{
                  width: 420,
                  height: 1000}}>

                    
              <View style={styles.top}>
                  <Text style={styles.header}> 
                  
                   </Text>
              </View>

            <View style={styles.styleBotton}>

              <TouchableOpacity 
                  onPress={() => {
                      this.props.navigation.navigate('Test1');
                    }}>
                  <Image 
                    resizeMode='contain'
                    source = {require('../src/assets/img/y.png')}
                    style={styles.ImageBotton}/>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => this.props.navigation.goBack()} >
                  <Image 
                    resizeMode='contain'
                    source = {require('../src/assets/img/n.png')}
                    style={styles.ImageBotton}/>
                </TouchableOpacity>

              </View>
            
            </ImageBackground>
        </ScrollView>
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
    margin:15,

  },
  Top:{
    height :'50%',
    alignItems: "center",
    justifyContent: "center",
    margin:15,

  },

  header:{
    fontSize :20,
    borderColor:'rgba(255,255,255,0)',
    borderWidth: 2,
    padding : 415,
    paddingLeft: 30,
    paddingRight :30,
    backgroundColor: 'rgba(255,255,255,0)',
    margin:10,
  },

  Image:{
    flex: 1,
    alignItems: 'center',
    resizeMode:'cover',
    justifyContent: "center",
  },

  ImageBotton:{
    width: 140,
    height: 40,
  },

  styleBotton:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    margin:50,
  },

  addButton: {
    backgroundColor: "#330033",
    justifyContent: "space-between",
    borderRadius: 12,
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