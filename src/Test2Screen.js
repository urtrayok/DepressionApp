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

export default class Test2Screen extends Component {
  
  static navigationOptions ={
    title:'Depression'
}

  state = {
    questionare: [],
    question: {
      title: 'test2',
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


    let validate = false;
    for (let i in this.state.questionare) {
      // 1,1 go q1
      // 0,1 go q1
      // 1,0 go q1

      // 0,0 go story
      if (this.state.questionare[i].value >=1) {
        validate = true
      }
    }

    if (validate) {
      // go q1
      this.props.navigation.push();
      this.props.navigation.navigate('Q1', {
        questionare: this.state.questionare
      })
    } else {
      // go story
      this.props.navigation.push();
      this.props.navigation.navigate('Story')
    }

  }

  componentDidMount() {
    const navigation = this.props.navigation;
    const prevState = navigation.getParam('questionare', '');
    this.setState({
      questionare: prevState
    })
    console.log(prevState);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../src/assets/img/test2.png')}
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

  ImageBotton: {
    width: 140,
    height: 40,
  },

  styleBotton: {
    flexDirection: "row",
  },

  addButtonText: {
    color: "#fff",
    fontSize: 18
  },


});