import { crudGetList, getDataObject } from '@dgtx/coreui';
import { setUsersAssign } from './test';
export const callAPIGetData = () => async (dispatch) => {
	let data = await fetch('https://sit-apollo.digi-texx.vn/socket-io/api/user-onlines', {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyZWZyZXNoVG9rZW4iOiJjNTQwNTk0MWMzMzVkMGE2ZjZjZDYwMTMzOThlNjZlNmU1OTllOTM5IiwicmVmcmVzaFRva2VuRXhwaXJlc0F0IjoiMjAxOS0wOC0yNlQxMjoyMTo0Ny4yOTRaIiwiY2xpZW50IjoiZWxyb25kIiwidXNlciI6ImxpbmhucCIsInVzZXJuYW1lIjoibGluaG5wIiwiZGlzcGxheU5hbWUiOiJMaW5oIE5ndXllbiBQaHVvbmciLCJlbWFpbCI6IiIsImlzX2NoYW5nZV9wYXNzIjpmYWxzZSwiZmlyc3RfbG9naW4iOmZhbHNlfQ.CeEGat94MV1h4Pe-y62Gh0o3cOcsepLGIDrvgKR4IHaBPb-Hjg7Pche_kcUmXa0Zc-zI8z7zllJAPQM9PcuDYD2YnLkEtoR2tOhxmHanZPGoCkYMZfNevezd14eFCWGjr_6nSo84xPaK4aUv-D3JrRgjVXPXG825cxKBj0rW8ur0Et8F5PIKUvMNXWdvVA-b9Id3xiIjkLtERZT_XSgf_ufTPAK4Fh-cvKH2QUOouNDqrhd6fdciiF7YNihOt60xwkjUpeEWQRMjFccxBfJXsnfSwGLhlQ_4s33EkXYtauv4ci1uz98L1l-mg7rnIarNbhO9TqvHvE4vqWyibx3_qQ'
		})
	})
		.then((response) => response.json())
		.then((user_online) => {
			return user_online;
		})
		.catch((error) => console.error(error));
	return data;
};

export const callAPIGetDataUsers = () => async (dispatch) => {
	let data = fetch('https://sit-apollo.digi-texx.vn/api/oauth/access-controls/users', {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyZWZyZXNoVG9rZW4iOiJjNTQwNTk0MWMzMzVkMGE2ZjZjZDYwMTMzOThlNjZlNmU1OTllOTM5IiwicmVmcmVzaFRva2VuRXhwaXJlc0F0IjoiMjAxOS0wOC0yNlQxMjoyMTo0Ny4yOTRaIiwiY2xpZW50IjoiZWxyb25kIiwidXNlciI6ImxpbmhucCIsInVzZXJuYW1lIjoibGluaG5wIiwiZGlzcGxheU5hbWUiOiJMaW5oIE5ndXllbiBQaHVvbmciLCJlbWFpbCI6IiIsImlzX2NoYW5nZV9wYXNzIjpmYWxzZSwiZmlyc3RfbG9naW4iOmZhbHNlfQ.CeEGat94MV1h4Pe-y62Gh0o3cOcsepLGIDrvgKR4IHaBPb-Hjg7Pche_kcUmXa0Zc-zI8z7zllJAPQM9PcuDYD2YnLkEtoR2tOhxmHanZPGoCkYMZfNevezd14eFCWGjr_6nSo84xPaK4aUv-D3JrRgjVXPXG825cxKBj0rW8ur0Et8F5PIKUvMNXWdvVA-b9Id3xiIjkLtERZT_XSgf_ufTPAK4Fh-cvKH2QUOouNDqrhd6fdciiF7YNihOt60xwkjUpeEWQRMjFccxBfJXsnfSwGLhlQ_4s33EkXYtauv4ci1uz98L1l-mg7rnIarNbhO9TqvHvE4vqWyibx3_qQ'
		})
	})
		.then((response) => response.json())
		.then((user) => {
			return user;
		})
		.catch((error) => console.error(error));
	return data;
};

export const callAPIGetDataUsersAssign = () => async (dispatch) => {
	let data = await fetch(
		'https://sit-apollo.digi-texx.vn/api/oauth/access-controls/apps/production/projects/5d495de5ea6d66005d49e4d7/tasks-assigned',
		{
			method: 'GET',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyZWZyZXNoVG9rZW4iOiJjNTQwNTk0MWMzMzVkMGE2ZjZjZDYwMTMzOThlNjZlNmU1OTllOTM5IiwicmVmcmVzaFRva2VuRXhwaXJlc0F0IjoiMjAxOS0wOC0yNlQxMjoyMTo0Ny4yOTRaIiwiY2xpZW50IjoiZWxyb25kIiwidXNlciI6ImxpbmhucCIsInVzZXJuYW1lIjoibGluaG5wIiwiZGlzcGxheU5hbWUiOiJMaW5oIE5ndXllbiBQaHVvbmciLCJlbWFpbCI6IiIsImlzX2NoYW5nZV9wYXNzIjpmYWxzZSwiZmlyc3RfbG9naW4iOmZhbHNlfQ.CeEGat94MV1h4Pe-y62Gh0o3cOcsepLGIDrvgKR4IHaBPb-Hjg7Pche_kcUmXa0Zc-zI8z7zllJAPQM9PcuDYD2YnLkEtoR2tOhxmHanZPGoCkYMZfNevezd14eFCWGjr_6nSo84xPaK4aUv-D3JrRgjVXPXG825cxKBj0rW8ur0Et8F5PIKUvMNXWdvVA-b9Id3xiIjkLtERZT_XSgf_ufTPAK4Fh-cvKH2QUOouNDqrhd6fdciiF7YNihOt60xwkjUpeEWQRMjFccxBfJXsnfSwGLhlQ_4s33EkXYtauv4ci1uz98L1l-mg7rnIarNbhO9TqvHvE4vqWyibx3_qQ'
			})
		}
	)
		.then((res) => res.json())
		.then((userAssign) => {
			return userAssign;
		})
		.catch((error) => console.error(error));
	return data;
};
