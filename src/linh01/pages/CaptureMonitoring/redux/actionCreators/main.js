import * as types from '../actions';
import { getDataObject } from '@dgtx/coreui';
import { cloneDeep } from 'lodash';
import {getDataCaptuteMonitor} from '../../../../../providers/data/mockData/capture_monitoring_mock'

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
};

export const getData = () => async (dispatch) => {
  const data = getDataCaptuteMonitor();
  
	dispatch({
		type: types.GET_LIST_DATA_CAPTURE_MONITORING,
		payload: {
			data:data
		},
		meta: {
			resource: types.NAME_REDUCER
		}
	});
};
 