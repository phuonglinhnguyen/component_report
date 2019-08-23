import * as types from './actions';
const initialState = {
	test: false,
	users: []
};
export default {
	name: types.NAME_REDUCER,
	reducer: (state = initialState, action) => {
		switch (action.type) {
			case types.TEST_CONNECT_REDUCER:
			case types.GET_DATA_USERS:
				return {
					...state,
					...action.payload
				};
			default:
				return state;
		}
	}
};
