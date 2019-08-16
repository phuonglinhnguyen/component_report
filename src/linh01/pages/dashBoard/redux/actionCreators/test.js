import * as types from '../actions';
import { getDataObject } from '@dgtx/coreui';
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