import * as types from './ActionTypes';

export function doLogin(username,password){
	return (dispatch)=>{
		dispatch(isLogining());
		if(username == '18875018531'&&password ==='123456') {
			dispatch(loginFinish(true));
		}else {
			dispatch(loginFinish(false));
		}

	}
}

//正在登录
function isLogining(){
	return {
		type:types.LOGIN_IN_DOING
	}
}

//登陆完成
function loginFinish(result) {
	return {
		type:types.LOGIN_IN_DONE,
		data:result,
		
	}
}