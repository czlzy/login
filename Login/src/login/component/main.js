import React,{Component}from 'react';
import {View,TextInput,Text,Image,TouchableOpacity,StyleSheet,Dimensions}from 'react-native';
import Login from './phoneLogin';
import Register from './register';
import {checkDeviceHeight,checkDeviceWidth} from './check';
import {
    Navigator
} from 'react-native-deprecated-custom-components';

export default class Main extends Component {
	componentWillUnmount() {
		sqlite.close();
	}
	render(){
		return (
			<View style={styles.container}>
				<Image style = {styles.banner} source = {require('../resource/mainBanner.jpg')}>
					<TouchableOpacity activeOpacity = {0.8} style={styles.Login} onPress = {()=>{this.props.navigator.push({
						sceneConfig: Navigator.SceneConfigs.FloatFromRight,
                        component: Login,
					})}}>
						<Text style = {styles.loginText}>登录</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity = {0.8} style={styles.register} onPress = {()=>{this.props.navigator.push({
						sceneConfig: Navigator.SceneConfigs.FloatFromRight,
                        component: Register,
                    	})}}>
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
		color:'white',
		fontSize:checkDeviceHeight(36),
	},
	registerText:{
		fontSize:checkDeviceHeight(36),
	},
});