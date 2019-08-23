import * as types from '../actions';
import { getDataObject } from '@dgtx/coreui';
import { callAPIGetData } from './call_api';
import { cloneDeep } from 'lodash'
export const onTest = () => async (dispatch, getState) => {
    const state = getDataObject(`core.resources.${types.NAME_REDUCER}.data`, cloneDeep(getState()));
    const test = getDataObject('test', state);
    dispatch({
        type: types.TEST_CONNECT_REDUCER,
        payload: {
            test: !test
        },
        meta: {
            resource: types.NAME_REDUCER
        }
    });
}
export const getData = (projectId: any) => async (dispatch: any) => {
    console.log("linh :))))");
    
    // const data = await dispatch(callAPIGetData({ projectId }));
    // console.log({data});
    
	// if (data.code) {
	// 	dispatch({
	// 		type: types.GET_DATA_USERS,
	// 		payload: {
	// 			data: [],
	// 		},
	// 		meta: {
	// 			resource: types.NAME_REDUCER
	// 		}
	// 	});
	// } else {
	// 	dispatch({
	// 		type: types.GET_DATA_USERS,
	// 		payload: {
	// 			users: data,
	// 		},
	// 		meta: {
	// 			resource: types.NAME_REDUCER
	// 		}
	// 	});
	// }
};