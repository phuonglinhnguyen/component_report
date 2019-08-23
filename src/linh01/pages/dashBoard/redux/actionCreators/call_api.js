import { crudGetList, getDataObject } from '@dgtx/coreui';

export const callAPIGetData = (input: any) => async (dispatch: any) => {
	const { projectId } = input;
	let data = await new Promise((resolve, reject) => {
    console.log(data);
    
		// dispatch(
		// 	crudGetList(
		// 		'users',
		// 		{ projectId },
		// 		{
		// 			onSuccess: ({ result: { data } }: any) => {
		// 				resolve(data);
		// 			},
		// 			onFailure: (data: any) => {
		// 				const code = getDataObject('result.body.Code', data) || 404;
		// 				const message = getDataObject('result.body.Error', data) || 'get_data_error';
		// 				resolve({ code, message });
		// 			}
		// 		}
		// 	)
		// );
	});
	return data;
};
