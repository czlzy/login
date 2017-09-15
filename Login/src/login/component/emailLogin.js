import React,{Component}from 'react';
import {ScrollView,View,TextInput,Text,Image,TouchableOpacity,StyleSheet,Dimensions,Alert,KeyboardAvoidingView}from 'react-native';
import {checkDeviceHeight,checkDeviceWidth} from './check';
import Main from './main';
import checkReg from './regExp';
export default class Login extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	phoneText:'',
		passWordText:'',
	  };
	}
	static navigationOptions ={
		header:null,
	}
	render(){
		return (
			<View style= {styles.container}>
				<TouchableOpacity style={styles.goBackBtn}  onPress = {()=>{this.props.navigation.goBack();}}><Text style = {styles.goBack}>返回</Text></TouchableOpacity>
				<View style = {styles.content}>
					<Text style= {styles.loginTitle}>QQ号/邮箱登录</Text>	
					
					<View style= {styles.inputBox}>
						<View style={styles.imageBox}>
							<Image style = {styles.loginImage} source = {require('../resource/emailLogin.png')}></Image>
						</View>
						<TextInput
						keyboardType = 'numeric'
						returnKeyType = 'done'
						style = {styles.textInput}
						placeholderTextColor = '#cecece' 
						placeholder = '请输入QQ/邮箱账号' 
						underlineColorAndroid= {'transparent'}
						onChangeText={(Text)=>{this.setState({phoneText:Text})}}
						></TextInput>
						
					</View>
					<View style = {styles.inputBox}>
						<View style={styles.imageBox}>
							<Image style = {styles.loginImage} source = {require('../resource/password.png')}></Image>
						</View>	
						<TextInput

						keyboardType = 'numeric'
						maxLength = {16}
						style = {styles.textInput} 
						placeholderTextColor = '#cecece' 
						secureTextEntry = {true} 
						placeholder = '请输入密码' 
						underlineColorAndroid= {'transparent'}
						onChangeText={(Text)=>{this.setState({passWordText:Text})}}
						></TextInput>
					</View>
					
					{
						this.state.phoneText && this.state.passWordText?
						(
							<TouchableOpacity activeOpacity = {0.8} style={styles.Login} onPress = {()=>{checkReg(2,this.state.phoneText)}}>
								<Text style = {styles.loginText}>登录</Text>
							</TouchableOpacity>)
						:(
							<Image style={[styles.Login,{backgroundColor:'transparent'}]} source = {require('../resource/notLogin.png')}></Image>
							)
					}
					<View style= {styles.footer}>
						<TouchableOpacity onPress = {()=>{this.props.navigation.goBack()}} activeOpacity = {0.8}><Text style= {[styles.footerText,{marginRight:checkDeviceWidth(110)}]}>其他方式登录</Text></TouchableOpacity>
						<TouchableOpacity activeOpacity = {0.8}><Text style= {styles.footerText}>登录遇到问题?</Text></TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
} 
const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		backgroundColor:'#ffffff',
	},
	goBack:{
		fontFamily:'PingFang',
		fontSize:22,
		color:'#0ebe0c',
	},
	goBackBtn:{
		alignSelf:'flex-start',
		marginLeft:checkDeviceWidth(20),
		marginTop:checkDeviceHeight(35),
	},
	loginTitle:{
		fontFamily:'PingFang',
		fontSize:31,
		marginTop:checkDeviceHeight(20),
		color:'#333333',
		marginBottom:checkDeviceHeight(110),
	},
	content:{
		alignItems:'center',
		width:Dimensions.get('window').width - checkDeviceWidth(80),
		flex:1,
	},
	
	inputBox:{
		height:checkDeviceHeight(80),
		width:Dimensions.get('window').width - checkDeviceWidth(80),
		flexDirection:'row',
		alignItems:'center',
		borderRadius:10,
		borderWidth:1,
		borderColor:'#ddddde',
		marginBottom:checkDeviceHeight(30),
	},
	loginImage:{
		width:checkDeviceWidth(35),
		height:checkDeviceHeight(45),
		borderRightWidth:1,
		borderColor:'#ddddde',
		resizeMode:'stretch',
	},
	imageBox:{
		width:checkDeviceWidth(125),
		height:checkDeviceHeight(80),
		alignItems:'center',
		marginRight:checkDeviceWidth(35),
		justifyContent:'center',
		borderRightWidth:1,
		borderColor:'#ddddde',
	},
	NumberBefore:{
		color:'#333333',
		fontSize:22,
	},
	textInput:{
		padding:0,
		flex:1,
		fontSize:22,
		marginLeft:-10
	},
	
	loginText:{
		color:'white',
		fontSize:22,
	},
	Login:{
		width:Dimensions.get('window').width - checkDeviceHeight(80),
		height:checkDeviceHeight(90),
		backgroundColor:'#1aad19',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:10,
		marginTop:checkDeviceHeight(30),
		marginBottom:checkDeviceHeight(580),
	},
	footer:{
		flexDirection:'row',
		alignItems:'center',
	},
	footerText:{
		color:'#6e7c99',
		fontSize:20,
	},
});
