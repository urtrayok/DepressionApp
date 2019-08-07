import React, { Component } from 'react';
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


export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        countdown: 3
    }


    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.push('Q1')
        }, 3000);

        setInterval(() => {
            this.setState({
                countdown: this.state.countdown - 1
            })
        }, 1000);

        const navigation = this.props.navigation;
        const prevState = navigation.getParam('questionare', '1');
        console.log(prevState);
    }

    render() {


        const { navigate } = this.props.navigation;
        return (

            <ImageBackground
                source={require('../src/assets/img/9quest.png')}
                resizeMode='cover'
                style={styles.container}>
                <View style={styles.container}>

                <Text style={styles.Text}>{this.state.countdown.toString()}</Text>

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

    Text: {
        color: "#fff",
        fontSize: 40,
        alignItems: 'center',
        justifyContent: "center",
    },

});

