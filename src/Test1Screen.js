import React, { Component } from 'react';
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

} from 'react-native';


export default class Test1Screen extends Component {
  static navigationOptions ={
    title:'Depression'
}


  state = {
    questionare: [],
    question: {
      title: 'test1',
      answer: '',
      value: ''
    }

  }


  navigateNext = (question) => {
    let questionare = this.state.questionare;
    questionare.push(question)

    this.setState({
      questionare: questionare
    })
    this.props.navigation.push();
    this.props.navigation.navigate('Test2', {
      questionare: this.state.questionare
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../src/assets/img/test1.png')}
        resizeMode='cover'
        style={styles.container}>
        <View style={styles.styleBotton}>

          <TouchableOpacity
            onPress={async () => {
              await this.setState({
                question: {
                  ...this.state.question,
                  answer: 'มี',
                  value: 1
                }
              })
              this.props.navigation.push();
              await this.navigateNext(this.state.question);
            }}>
            <Image
              resizeMode='contain'
              source={require('../src/assets/img/have.png')}
              style={styles.ImageBotton} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={async () => {
              await this.setState({
                question: {
                  ...this.state.question,
                  answer: 'ไม่มี',
                  value: 0
                }
              })
              this.props.navigation.push();
              await this.navigateNext(this.state.question);
            }} >
            <Image
              resizeMode='contain'
              source={require('../src/assets/img/no.png')}
              style={styles.ImageBotton} />
          </TouchableOpacity>

        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  Top: {
    height: '50%',
    alignItems: "center",
    justifyContent: "center",
    margin: 15,

  },

  header: {
    color: '#fff',
    fontSize: 20,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 80,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
    margin: 10,
  },
  Image: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'contain',
    width: 350,
    height: 200,
    borderRadius: 12,
  },

  ImageBotton: {
    width: 140,
    height: 40,
  },

  styleBotton: {
    flexDirection: "row",
  },

  addButton: {
    backgroundColor: "#330033",
    justifyContent: "space-between",
    //elevation: 20,
    borderRadius: 12,
    margin: 10,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 18
  },

  Buttonchoice: {
    backgroundColor: "#004d40",
    width: 210,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    margin: 10,
  },

  Text: {
    color: "#fff",
    fontSize: 20,
    alignItems: 'center',
    justifyContent: "center",
  },


});