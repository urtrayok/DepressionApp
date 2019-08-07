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

export default class ShowScoreScreen extends Component {
  static navigationOptions ={
      header : null
  }

    state = {
        questionare: [],
        question: {
        title: 'Total',
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

    /*  let validateA = false;
      let validateB = false;
      let validateC = false;

    for (let i in this.state.questionare){
      
      if (this.state.questionare[i].sum >=19) {
        validateA = true

      }else if (this.state.questionare[i].sum >=13) {
        validateB = true

      }else if (this.state.questionare[i].sum >=7) {
        validateC = true
      }

    }

    if (validateA) {
      // go q1
      this.props.navigation.push();
      this.props.navigation.navigate('Doctor', {
        questionare: this.state.questionare
      })
    } else if (validateB){
      // go story
      this.props.navigation.push();
      this.props.navigation.navigate('Recommend2', {
        questionare: this.state.questionare
      })

    }else if (validateC){
      // go story
      this.props.navigation.push();
      this.props.navigation.navigate('Recommend', {
        questionare: this.state.questionare
      })
    }else {
      // go story
      this.props.navigation.push();
      this.props.navigation.navigate('Story')
    }

*/

    }


    render() {
        const { navigate } = this.props.navigation;
        
        let sum = 0
        this.state.questionare.forEach(element => {
        sum = sum + element.score
        return sum;
        });
        
      console.log(sum)

      
  
      return (
        <ImageBackground 
        source = {require('../src/assets/img/story.png')}
        resizeMode='cover'
        style={styles.container}>
              <View style={styles.styleBotton}>
                <View style={styles.top}>
                    <Text style={styles.header}> 
                    </Text>
                </View>

                  <Text style={styles.addButtonText} >Score:{sum}</Text>

                <TouchableOpacity 
                  onPress={() => this.navigateNext(this.state.question)} style={styles.addButton}>
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
      margin:60,
  
    },

    header:{
      fontSize :20,
      borderColor:'rgba(255,255,255,0)',
      borderWidth: 2,
      padding : 100,
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
      fontSize: 30
    },
  
  });

