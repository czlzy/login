import React,{Component}from 'react';
import {View,TextInput,Text,Image,TouchableOpacity,StyleSheet,Dimensions,Alert}from 'react-native';
import SQLite from '../sqlite/sqlite';

let sqlite = new SQLite();
let db;
export default class ContentPage extends Component {
	componentWillUnmount() {
		sqlite.close();
	}
	static navigationOptions ={
		header:null,
	}
	loginOut=()=>{
		this.props.navigation.goBack();
		sqlite.deleteData();
	}
	render(){
		return (
			<View>
				<Text>呵呵呵呵 登录进来咯</Text>
				<TouchableOpacity onPress = {()=>{this.loginOut()}}><Text>登出</Text></TouchableOpacity>
			</View>

			)
	}
}