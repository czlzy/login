import React,{Component}from 'react';
import {View,TextInput,Text,Image,TouchableOpacity,StyleSheet,Dimensions}from 'react-native';
import Login from './phoneLogin';
import Register from './register';
import {checkDeviceHeight,checkDeviceWidth} from './check';
export default class Main extends Component {
	static navigationOptions ={
		header:null,
	}
	
	render(){
		return (
			<View style={styles.container}>
				<Image style = {styles.banner} source = {require('../resource/mainBanner.jpg')}>
					<TouchableOpacity activeOpacity = {0.8} style={styles.Login} onPress = {()=>{this.props.navigation.navigate('Login')}}>
						<Text style = {styles.loginText}>登录</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity = {0.8} style={styles.register} onPress = {()=>{this.props.navigation.navigate('Register')}}>
						<Text style = {styles.registerText}>注册</Text>
					</TouchableOpacity>
				</Image>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	banner:{
		width:Dimensions.get('window').width,
		flex:1,
		alignItems:'center',
		justifyContent:'flex-end',
	},
	Login:{
		width:checkDeviceWidth(500),
		height:checkDeviceHeight(90),
		backgroundColor:'#1aad19',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:10,
		marginBottom:checkDeviceHeight(45),

	},
	register:{
		width:checkDeviceWidth(500),
		height:checkDeviceHeight(90),
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#ffffff',
		borderRadius:10,
		marginBottom:checkDeviceHeight(90),
		
	},
	loginText:{
		fontFamily:'PingFang',
		color:'white',
		fontSize:22,
	},
	registerText:{
		fontFamily:'VINCHAND',
		fontSize:22,
	},
});