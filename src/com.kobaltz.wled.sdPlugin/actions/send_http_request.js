const sendHttpRequestAction = new Action('com.kobaltz.wled.sendhttprequest');

sendHttpRequestAction.onKeyUp(({ action, context, device, event, payload }) => {
	let wled_paylod = {
		"on": true,
		"v": true,
		"ps": payload.settings.preset,
		"bri": payload.settings.brightness
	}
	fetch(`http://${payload.settings.ip_address}/win&${payload.settings.endpoint}`, {
		method: 'GET'
	}).then(response => response.json())
		.then(data => {
			updateImage(data, payload)
		})
})