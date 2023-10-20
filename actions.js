const API = require('./api.js')

module.exports = function (self) {
	self.setActionDefinitions({
		next_scene: {
			name: 'Next Scene',
			description: 'Go to next scene',
			options: [],
			callback: async (_action) => {
				const cmd = 'scene/next'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		previous_scene: {
			name: 'Previous Scene',
			description: 'Go to previous scene',
			options: [],
			callback: async (_action) => {
				const cmd = 'scene/previous'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		first_scene: {
			name: 'First Scene',
			description: 'Go to first scene',
			options: [],
			callback: async (_action) => {
				const cmd = 'scene/first'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		last_scene: {
			name: 'Last Scene',
			description: 'Go to last scene',
			options: [],
			callback: async (_action) => {
				const cmd = 'scene/last'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
	})
}
