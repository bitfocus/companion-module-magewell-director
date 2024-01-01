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
			options: [],
			callback: async (_action) => {
				const cmd = 'bgm/first'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		bgm_last: {
			name: 'BGM Last',
			description: 'Jump to the last BGM',
			options: [],
			callback: async (_action) => {
				const cmd = 'bgm/last'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		bgm_next: {
			name: 'BGM Next',
			description: 'Jump to the next BGM',
			options: [],
			callback: async (_action) => {
				const cmd = 'bgm/next'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		bgm_pause: {
			name: 'BGM Pause',
			description: 'Pause the BGM',
			options: [],
			callback: async (_action) => {
				const cmd = 'bgm/pause'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		bgm_play: {
			name: 'BGM Play',
			description: 'Play the BGM',
			options: [],
			callback: async (_action) => {
				const cmd = 'bgm/play'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		bgm_previous: {
			name: 'BGM Previous',
			description: 'Jump to the previous BGM',
			options: [],
			callback: async (_action) => {
				const cmd = 'bgm/previous'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
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
			options: [],
			callback: async (_action) => {
				const cmd = 'gfx/clear'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		// Scoreboard Actions (Section 4)
		// FIXME: TO BE IMPLEMENTED
		// LOTS of Stuff here

		// Timer Actions (Section 5)
		timer_pause: {
			name: 'Timer Pause',
			description: 'Pause the timer',
			options: [],
			callback: async (_action) => {
				const cmd = 'countdown/pause'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		timer_play: {
			name: 'Timer Play',
			description: 'Start or resume the timer',
			options: [],
			callback: async (_action) => {
				const cmd = 'countdown/play'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		timer_reset: {
			name: 'Timer Reset',
			description: 'Reset the timer',
			options: [],
			callback: async (_action) => {
				const cmd = 'countdown/reset'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		// StopWatch Actions (Section 6)
		stopwatch_pause: {
			name: 'Pause Stopwatch',
			description: 'Pause the stopwatch',
			options: [],
			callback: async (_action) => {
				const cmd = 'stopwatch/pause'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		stopwatch_play: {
			name: 'Play Stopwatch',
			description: 'Start or resume the stopwatch',
			options: [],
			callback: async (_action) => {
				const cmd = 'stopwatch/play'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		stopwatch_reset: {
			name: 'Reset Stopwatch',
			description: 'Reset the stopwatch',
			options: [],
			callback: async (_action) => {
				const cmd = 'stopwatch/reset'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		// Record Options (Section 7)
		screenshot: {
			name: 'Screenshot',
			description: 'Take a screenshot of the program output',
			options: [],
			callback: async (_action) => {
				const cmd = 'record/screenshot'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		start_recording: {
			name: 'Start Recording',
			description: 'Start recording',
			options: [],
			callback: async (_action) => {
				const cmd = 'record/start'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		stop_recording: {
			name: 'Stop Recording',
			description: 'Stop recording',
			options: [],
			callback: async (_action) => {
				const cmd = 'record/stop'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		// Scene Actions (Section 8)
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
		freeze_scene: {
			name: 'Freeze Scene',
			description: 'Freeze the current scene',
			options: [],
			callback: async (_action) => {
				const cmd = 'scene/freeze'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		unfreeze_scene: {
			name: 'Unfreeze Scene',
			description: 'Unfreeze the current scene',
			options: [],
			callback: async (_action) => {
				const cmd = 'scene/unfreeze'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		play_video: {
			name: 'Play Video',
			description: 'Play the video of the current scene',
			options: [],
			callback: async (_action) => {
				const cmd = 'scene/playVideo'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		pause_video: {
			name: 'Pause Video',
			description: 'Pause the video of the current scene',
			options: [],
			callback: async (_action) => {
				const cmd = 'scene/pauseVideo'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		toggle_off_ftb: {
			name: 'Toggle Off FTB',
			description: 'Disable the FTB',
			options: [],
			callback: async (_action) => {
				const cmd = 'scene/toggleOffFTB'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		toggle_on_ftb: {
			name: 'Toggle On FTB',
			description: 'Enable the FTB',
			options: [],
			callback: async (_action) => {
				const cmd = 'scene/toggleOnFTB'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		switch_by_index: {
			name: 'Switch By Index',
			description: 'Switch the current scene by index',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `scene/switchByIndex?index=${_action.options.index}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		switch_by_name: {
			name: 'Switch By Name',
			description: 'Switch the current scene by name',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `scene/switchByName?name=${_action.options.name}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

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
			options: [],
			callback: async (_action) => {
				const cmd = 'stream/stopAll'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		// System Actions (Section 11)
		reboot: {
			name: 'Reboot Director',
			description: 'Reboot the device',
			options: [],
			callback: async (_action) => {
				const cmd = 'system/reboot'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		shutdown: {
			name: 'Shutdown Director',
			description: 'Power off the device',
			options: [],
			callback: async (_action) => {
				const cmd = 'system/shutdown'
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
	})
}
