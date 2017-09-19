import React,{Component}from 'react';
import {View,TextInput,Text,Image,TouchableOpacity,StyleSheet,Dimensions}from 'react-native';
import Login from './phoneLogin';
import Register from './register';
import {checkDeviceHeight,checkDeviceWidth} from './check';
import SQLite from '../sqlite/sqlite';

let sqlite = new SQLite();
let db;
export default class Main extends Component {
	componentWillUnmount() {
		sqlite.close();
	}
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	account:'',
	  };
	}

	static navigationOptions ={
		header:null,
	}
	componentWillMount() {
		if (!db) {
			db = sqlite.open();
		}
		db.transaction((tx)=>{
			tx.executeSql("select * from user",[],(tx,results)=>{
				var s = [];
				var b = {};
				var u = results.rows.item(0);
				b.userName = u.userName;
				b.passWord = u.passWord;
				s.push(b);
				this.setState({account:s},()=>{
					if(this.state.account){
						this.props.navigation.navigate('contentPage');
					}else{
						console.log(account);
					}
					return;
				});
			})
		})


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
		color:'white',
		fontSize:checkDeviceHeight(36),
	},
	registerText:{
		fontSize:checkDeviceHeight(36),
	},
});