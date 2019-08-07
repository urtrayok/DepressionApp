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


export default class Q7Screen extends Component {
  static navigationOptions ={
    title:'Depression'
}

  state = {
    questionare: [],
    question: {
      title: 'Q7',
      answer: '',
      value: '',
      score:''
    }

  }
  componentDidMount(){
      const navigation = this.props.navigation;
      const prevState = navigation.getParam('questionare', '');
      console.log(prevState);
      this.setState({
        questionare: prevState
      })
  }
  
  navigateNext = (question) => {
    let questionare = this.state.questionare;
    questionare.push(question)

    this.setState({
      questionare: questionare
    })
    this.props.navigation.push();
    this.props.navigation.navigate('Q8', {
      questionare: this.state.questionare
    })
  
}

  
    render() {
        const { navigate } = this.props.navigation;
      return (

        <ImageBackground 
        source = {require('../src/assets/img/Q7.png')}
        resizeMode='cover'
        style={styles.container}>
              <View style={styles.container}>

              
              <TouchableOpacity 
                  onPress={ async () => {
                    await this.setState({
                      question: {
                      ...this.state.question,
                      answer: 'ไม่มีเลย',
                      value: 0,
                      score: 0
                     }
                    })
                    this.props.navigation.push();
                    await this.navigateNext(this.state.question);
                 }}style={styles.addButton}>
                  <Image 
                    resizeMode='contain'
                    source = {require('../src/assets/img/0.png')}
                    style={styles.ImageBotton}/>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={ async () => {
                    await this.setState({
                      question: {
                      ...this.state.question,
                      answer: 'เป็นบางวัน',
                      value: 1,
                      score: 1
                     }
                    })
                    this.props.navigation.push();
                    await this.navigateNext(this.state.question);
                 }}style={styles.addButton}>
                  <Image 
                    resizeMode='contain'
                    source = {require('../src/assets/img/1.png')}
                    style={styles.ImageBotton}/>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={ async () => {
                    await this.setState({
                      question: {
                      ...this.state.question,
                      answer: 'เป็นบ่อย',
                      value: 2,
                      score: 2
                     }
                    })
                    this.props.navigation.push();
                    await this.navigateNext(this.state.question);
                 }}style={styles.addButton}>
                  <Image 
                    resizeMode='contain'
                    source = {require('../src/assets/img/2.png')}
                    style={styles.ImageBotton}/>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={ async () => {
                    await this.setState({
                      question: {
                      ...this.state.question,
                      answer: 'เป็นทุกวัน',
                      value: 3,
                      score: 3
                     }
                    })
                    this.props.navigation.push();
                    await this.navigateNext(this.state.question);
                 }}style={styles.addButton}>
                  <Image 
                    resizeMode='contain'
                    source = {require('../src/assets/img/3.png')}
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

    ImageBotton:{
      alignItems: 'center',
      resizeMode:'cover',
      borderRadius: 20,
      width: 160,
      height: 50,
    },
  
    addButton: {
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      margin:10,
    },
  
  });

