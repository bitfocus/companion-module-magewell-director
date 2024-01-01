const API = require('./api.js')

const INDEXES_1_TO_100 = [
	{
		id: 'index',
		type: 'number',
		label: 'Index',
		default: 1,
		min: 1,
		max: 100,
	},
]

const TEXT_INPUT_NAME = [
	{
		id: 'name',
		type: 'textinput',
		label: 'Name',
	},
]

module.exports = function (self) {
	self.setActionDefinitions({
		// BGM Actions (Section 2)
		bgm_first: {
			name: 'BGM First',
			description: 'Jump to the first BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/first')
			},
		},
		bgm_last: {
			name: 'BGM Last',
			description: 'Jump to the last BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/last')
			},
		},
		bgm_next: {
			name: 'BGM Next',
			description: 'Jump to the next BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/next')
			},
		},
		bgm_pause: {
			name: 'BGM Pause',
			description: 'Pause the BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/pause')
			},
		},
		bgm_play: {
			name: 'BGM Play',
			description: 'Play the BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/play')
			},
		},
		bgm_previous: {
			name: 'BGM Previous',
			description: 'Jump to the previous BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/previous')
			},
		},

		// GFX Actions (Section 3)
		gfx_on_by_index: {
			name: 'GFX On By Index',
			description: 'Use the interface to enable GFX by index.',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `gfx/actionByIndex?index=${_action.options.index}&on=true`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		gfx_off_by_index: {
			name: 'GFX Off By Index',
			description: 'Use the interface to disable GFX by index.',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `gfx/actionByIndex?index=${_action.options.index}&on=false`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		gfx_on_by_name: {
			name: 'GFX On By Name',
			description: 'Use the interface to enable GFX by name.',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `gfx/actionByName?name=${_action.options.name}&on=true`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		gfx_off_by_name: {
			name: 'GFX Off By Name',
			description: 'Use the interface to disable GFX by name.',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `gfx/actionByName?name=${_action.options.name}&on=false`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		gfx_clear: {
			name: 'GFX Clear',
			description: 'Turn off all GFXs',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/clear')
			},
		},

		// Scoreboard Actions (Section 4)
		// FIXME: TO BE IMPLEMENTED
		// LOTS of Stuff here

		// Timer Actions (Section 5)
		timer_pause: {
			name: 'Timer Pause',
			description: 'Pause the timer',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/countdown/pause')
			},
		},
		timer_play: {
			name: 'Timer Play',
			description: 'Start or resume the timer',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/countdown/play')
			},
		},
		timer_reset: {
			name: 'Timer Reset',
			description: 'Reset the timer',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/countdown/reset')
			},
		},

		// StopWatch Actions (Section 6)
		// Technically these are GFX calls
		stopwatch_pause: {
			name: 'Pause Stopwatch',
			description: 'Pause the stopwatch',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/stopwatch/pause')
			},
		},
		stopwatch_play: {
			name: 'Play Stopwatch',
			description: 'Start or resume the stopwatch',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/stopwatch/play')
			},
		},
		stopwatch_reset: {
			name: 'Reset Stopwatch',
			description: 'Reset the stopwatch',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/stopwatch/reset')
			},
		},

		// Record Options (Section 7)
		screenshot: {
			name: 'Screenshot',
			description: 'Take a screenshot of the program output',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('record/screenshot')
			},
		},
		start_recording: {
			name: 'Start Recording',
			description: 'Start recording',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('record/start')
			},
		},
		stop_recording: {
			name: 'Stop Recording',
			description: 'Stop recording',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('record/stop')
			},
		},

		// Scene Actions (Section 8)
		next_scene: {
			name: 'Next Scene',
			description: 'Go to next scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/next')
			},
		},
		previous_scene: {
			name: 'Previous Scene',
			description: 'Go to previous scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/previous')
			},
		},
		first_scene: {
			name: 'First Scene',
			description: 'Go to first scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/first')
			},
		},
		last_scene: {
			name: 'Last Scene',
			description: 'Go to last scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/last')
			},
		},
		freeze_scene: {
			name: 'Freeze Scene',
			description: 'Freeze the current scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/freeze')
			},
		},
		unfreeze_scene: {
			name: 'Unfreeze Scene',
			description: 'Unfreeze the current scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/unfreeze')
			},
		},
		play_video: {
			name: 'Play Video',
			description: 'Play the video of the current scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/playVideo')
			},
		},
		pause_video: {
			name: 'Pause Video',
			description: 'Pause the video of the current scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/pauseVideo')
			},
		},
		toggle_off_ftb: {
			name: 'Toggle Off FTB',
			description: 'Disable the FTB',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/toggleOffFTB')
			},
		},
		toggle_on_ftb: {
			name: 'Toggle On FTB',
			description: 'Enable the FTB',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/toggleOnFTB')
			},
		},

		switch_by_index: {
			name: 'Scene Switch By Index',
			description: 'Switch the current scene by index',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `scene/switchByIndex?index=${_action.options.index}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		switch_by_name: {
			name: 'Scene Switch By Name',
			description: 'Switch the current scene by name',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `scene/switchByName?name=${_action.options.name}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		// Show (Section 9)

		// Stream (Section 10)
		stream_start_by_index: {
			name: 'Stream Start By Index',
			description: 'Start the Stream by index',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `stream/actionByIndex?index=${_action.options.index}&start=true`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		stream_stop_by_index: {
			name: 'Stream Stop By Index',
			description: 'Stop the Stream by Index',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `stream/actionByIndex?index=${_action.options.index}&start=false`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		stream_start_by_name: {
			name: 'Stream Start By Name',
			description: 'Start the Stream by Name',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `stream/actionByName?name=${_action.options.name}&start=true`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		stream_stop_by_name: {
			name: 'Stream Stop By Name',
			description: 'Stop the Stream by Name',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `stream/actionByName?name=${_action.options.name}&start=false`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		stream_stop_all: {
			name: 'Stream Stop All',
			description: 'Stop All Streaming Services',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('stream/stopAll')
			},
		},

		// System Actions (Section 11)
		reboot: {
			name: 'Reboot Director',
			description: 'Reboot the device',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('system/reboot')
			},
		},
		shutdown: {
			name: 'Shutdown Director',
			description: 'Power off the device',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('system/shutdown')
			},
		},
	})
}
