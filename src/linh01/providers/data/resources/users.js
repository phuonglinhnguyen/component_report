import {
  GET_LIST,
  fetchJson,
} from '@dgtx/coreui';
import {
  API_ENDPOINT,
} from '../../../constants'
export default (type: string, resource: string, params: any) => {
  switch (type) {
      case GET_LIST: {
          const { data } = params;
          if(data){
              return fetchJson(`${API_ENDPOINT}/user-onlines`,
              { method: 'GET', body: JSON.stringify(data) })
          }
          else{
              return Promise.resolve(
                  {
                      status: 400,
                      headers: {},
                  }
              )
          }
      }
      default:
          break;
  }
  return Promise.reject(`Provider ${resource} method:${type} not yet supported!`)
};
