import {Platform,Dimensions}from 'react-native';
checkDeviceHeight = (n)=>{
	return Platform.OS === 'ios'?n:(Dimensions.get('window').height/1334*n);
}
checkDeviceWidth = (n)=>{
	return Platform.OS === 'ios'?n:(Dimensions.get('window').width/750*n);
}
export {checkDeviceHeight,checkDeviceWidth};
