const axios = require('axios')

class API {
	constructor(config) {
		const self = this

		const apiHost = config.host
		const apiPort = config.httpPort
		const apiVersion = 'V1.0'

		self.baseUrl = `http://${apiHost}:${apiPort}/${apiVersion}/`
	}

	async sendRequest(cmd) {
		const self = this

		const requestUrl = self.baseUrl + cmd
		// console.log('Request URL:', requestUrl)
		try {
			const response = await axios.get(requestUrl)
			// self.updateStatus(InstanceStatus.Ok);
			return {
				status: 'ok',
				response,
			}
		} catch (err) {
			console.log(err)
			return {
				status: 'Request failed',
			}
		}
	}
}

module.exports = API
