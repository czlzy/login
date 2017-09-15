import React,{Component}from 'react';
import {View,TextInput,Text,Image,TouchableOpacity,StyleSheet,Dimensions,Alert}from 'react-native';
import {checkDeviceHeight,checkDeviceWidth} from './check';
import Main from './main';
import checkReg from './regExp';
import Confirm from './confirm';
export default class Login extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	phoneText:'',//账号框的内容
		passWordText:'',//密码框的内容
		showConfirm:false,//是否显示确认电话号码组件 false:不显示 true:显示
		changeLoginWay:1,//1表示密码登录，2表示验证码登录
	  };
	}
	static navigationOptions ={
		header:null,
	}
	//当点击短信验证的时候检测手机号码的方法
	changeShowConfirm=()=>{
		if((/^1[34578]\d{9}$/.test(this.state.phoneText))){
			this.setState({
				showConfirm:true,
			});
		}else{
			alert('手机号码错误');
		}
	}

	//子组件修改showConfirm
	cancelSend = (hideConfirm)=>{
		this.setState({
			showConfirm:hideConfirm
		})
	}
	render(){
		return (

			<View style= {styles.container}>
				<TouchableOpacity style={styles.goBackBtn}  onPress = {()=>{this.props.navigation.goBack();}}><Text style = {styles.goBack}>返回</Text></TouchableOpacity>
				<View style = {styles.content}>
					<Text style= {styles.loginTitle}>使用手机号登录</Text>	
					<TouchableOpacity onPress={()=>{Alert.alert('更换地区')}}>
						<View style = {styles.area}>
							<Text style = {styles.areaTitle}>国家/地区</Text>
							<Text style = {styles.country}>中国</Text>
							<Image style= {styles.rightLogo} source = {require('../resource/jiantou.png')}></Image>
						</View>
					</TouchableOpacity>
					<View style= {styles.inputBox}>
						<View style={styles.imageBox}>
							<Image style = {styles.loginImage} source = {require('../resource/ipone.png')}></Image>
						</View>
						<Text style = {styles.NumberBefore}>+86</Text>
						<TextInput
						style = {styles.textInput}
						maxLength = {11}
						placeholderTextColor = '#cecece' 
						placeholder = '请输入手机号码' 
						underlineColorAndroid= {'transparent'}
						onChangeText={(Text)=>{this.setState({phoneText:Text})}}
						></TextInput>
						
					</View>
					<View style = {styles.inputBox}>
						<View style={styles.imageBox}>
							<Image style = {[styles.loginImage,{width:checkDeviceWidth(35),}]} source = {require('../resource/password.png')}></Image>
						</View>	
						<TextInput
						maxLength = {16}
						style = {[styles.textInput,{marginLeft:-10,}]} 
						placeholderTextColor = '#cecece' 
						secureTextEntry = {true} 
						placeholder = '请输入密码' 
						underlineColorAndroid= {'transparent'}
						onChangeText={(Text)=>{this.setState({passWordText:Text})}}
						></TextInput>
					</View>
					<TouchableOpacity activeOpacity = {0.8} onPress = {()=>{this.changeShowConfirm()}} >
						<Text style = {styles.changeLogin}>通过短信验证码登录</Text>
					</TouchableOpacity>
					{
						this.state.phoneText && this.state.passWordText?
						(
							<TouchableOpacity activeOpacity = {0.8} style={styles.Login} onPress = {()=>{checkReg(1,this.state.phoneText)}}>
								<Text style = {styles.loginText}>登录</Text>
							</TouchableOpacity>)
						:(
							<Image style={[styles.Login,{backgroundColor:'transparent'}]} source = {require('../resource/notLogin.png')}></Image>
							)
					}
				<View style= {styles.footer}>
					<TouchableOpacity onPress = {()=>{this.props.navigation.navigate('emailLogin')}} activeOpacity = {0.8}><Text style= {[styles.footerText,{marginRight:checkDeviceWidth(110)}]}>其他方式登录</Text></TouchableOpacity>
					<TouchableOpacity activeOpacity = {0.8}><Text style= {styles.footerText}>登录遇到问题?</Text></TouchableOpacity>
				</View>
				</View>
				{
					this.state.showConfirm?<Confirm 
											phoneText = {this.state.phoneText}
											cancelSend = {this.cancelSend}
											></Confirm>:null
				}
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
		width:Dimensions.get('window').width - checkDeviceHeight(80),
		flex:1,
	},
	area:{
		width:Dimensions.get('window').width - checkDeviceHeight(80),
		flexDirection:'row',
		marginBottom:checkDeviceWidth(30),
		alignItems:'center',
	},
	inputBox:{
		height:checkDeviceHeight(80),
		width:Dimensions.get('window').width - checkDeviceWidth(80),
		flexDirection:'row',
		alignItems:'center',
		borderRadius:10,
		borderWidth:1,
		borderColor:'#ddddde',
		marginBottom:checkDeviceWidth(30),
	},
	areaTitle:{
		fontSize:22,
		color:'#333333',
		marginRight:checkDeviceWidth(35),
	},
	country:{
		fontSize:22,
		color:'#333333',
	},
	rightLogo:{
		width:checkDeviceWidth(15),
		height:checkDeviceHeight(30),
		resizeMode:'contain',
		position:'absolute',
		right:0,
	},
	loginImage:{
		width:checkDeviceWidth(25),
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
		fontSize:22,
		flex:1,
		
	},
	changeLogin:{
		color:'#6e7c99',
		fontSize:20,
		marginBottom:checkDeviceHeight(60),
	},
	loginText:{
		color:'white',
		fontSize:22,
	},
	Login:{
		width:Dimensions.get('window').width - checkDeviceWidth(80),
		height:checkDeviceHeight(90),
		backgroundColor:'#1aad19',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:10,
		marginBottom:checkDeviceHeight(460)-30,
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
