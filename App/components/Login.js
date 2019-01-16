import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,TextInput} from 'react-native';

export default class Login extends Component<Props> {
    render(){
        return(
            <View style={style.main}>
                <TextInput underlineColorIos={'transparent'} placeholder={'Email'} style={style.textinput}/>
                <TextInput underlineColorIos={'transparent'} placeholder={'Password'} style={style.textinput}/>

                <TouchableOpacity style={style.loginbtn}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.registerbtn}>
                    <Text>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.forgotbtn}>
                    <Text>Forgot Password</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style=StyleSheet.create({
    main:{
        width: "90%",
        maxWidth: 400,
        marginBottom: 18,
        padding: 12,
        marginTop:50
    },
    textinput:{
        color: '#fff',
        padding: 12,
        marginBottom: 18,
        alignSelf: 'stretch',
        backgroundColor:'rgba(255,255,255,0.2)',
        borderColor:'white',
        borderWidth: 0.6,

    },
    forgotbtn:{
        alignSelf: 'stretch',
        alignItems:'center',
        backgroundColor: '#c5df2d',
        padding:14,
        marginTop: 10,
    },
    loginbtn:{
        alignSelf: 'stretch',
        alignItems:'center',
        backgroundColor: '#c5df2d',
        padding:14,
        marginTop: 10,
    },
    registerbtn:{
        alignSelf: 'stretch',
        alignItems:'center',
        backgroundColor: '#c5df2d',
        padding:14,
        marginTop: 10,
    },
});