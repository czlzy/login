import * as types from '../action/ActionTypes';

const initialState = {
	loading:false,
	data:'',
}


export default function login(state=initialState,action) {
	switch(action.type) {
		case types.LOGIN_IN_DOING:
			return {
				...state,
				loading:false,
			}
		case types.LOGIN_IN_DONE:
			return {
				...state,
				loading:action.data
			}
		default:
			return state;
	}
}