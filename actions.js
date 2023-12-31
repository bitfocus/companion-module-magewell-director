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

// Audio Type	Description
// 0x0001	Monitor
// 0x0003	Program
// 0x0700	HDMI 1
// 0x0800	HDMI 2
// 0x0200	Microphone
// 0x0002	Video Clip
// 0x0300	Bluetooth
// 0x0600	BGM

// Hex to Decimal
const AUDIO_DEVICES = [
	{
		type: 'dropdown',
		label: 'Audio Channel',
		id: 'audioChannel',
		default: '1',
		tooltip: 'Which audio device?',
		choices: [
			{ id: '1', label: 'Monitor' },
			{ id: '3', label: 'Program' },
			{ id: '1792', label: 'HDMI 1' },
			{ id: '2048', label: 'HDMI 2' },
			{ id: '512', label: 'Mic' },
			{ id: '2', label: 'Video Clip' },
			{ id: '768', label: 'Bluetooth' },
			{ id: '1536', label: 'BGM' },
		],
		minChoicesForSearch: 0,
	},
]

const MAX_VOLUME = 10
const MIN_VOLUME = -40

const AUDIO_LEVELS = [
	{
		id: 'volume',
		type: 'number',
		label: 'Volume',
		default: 0,
		min: MIN_VOLUME,
		max: MAX_VOLUME,
	},
]

const AUDIO_DEVICES_AND_LEVELS = AUDIO_DEVICES.concat(AUDIO_LEVELS)

module.exports = function (self) {
	self.setActionDefinitions({
		// BGM Actions (Section 2)
		bgm_first: {
			name: 'BGM: First',
			description: 'Jump to the first BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/first')
			},
		},
		bgm_last: {
			name: 'BGM: Last',
			description: 'Jump to the last BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/last')
			},
		},
		bgm_next: {
			name: 'BGM: Next',
			description: 'Jump to the next BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/next')
			},
		},
		bgm_pause: {
			name: 'BGM: Pause',
			description: 'Pause the BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/pause')
			},
		},
		bgm_play: {
			name: 'BGM: Play',
			description: 'Play the BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/play')
			},
		},
		bgm_previous: {
			name: 'BGM: Previous',
			description: 'Jump to the previous BGM',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('bgm/previous')
			},
		},

		// GFX Actions (Section 3)
		gfx_on_by_index: {
			name: 'GFX: On By Index',
			description: 'Use the interface to enable GFX by index.',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `gfx/actionByIndex?index=${_action.options.index}&on=true`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		gfx_off_by_index: {
			name: 'GFX: Off By Index',
			description: 'Use the interface to disable GFX by index.',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `gfx/actionByIndex?index=${_action.options.index}&on=false`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		gfx_on_by_name: {
			name: 'GFX: On By Name',
			description: 'Use the interface to enable GFX by name.',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `gfx/actionByName?name=${_action.options.name}&on=true`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		gfx_off_by_name: {
			name: 'GFX: Off By Name',
			description: 'Use the interface to disable GFX by name.',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `gfx/actionByName?name=${_action.options.name}&on=false`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		gfx_clear: {
			name: 'GFX: Clear',
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
			description: 'Pause the countdown timer',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/countdown/pause')
			},
		},
		timer_play: {
			name: 'Timer Play',
			description: 'Start or resume the countdown timer',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/countdown/play')
			},
		},
		timer_reset: {
			name: 'Timer Reset',
			description: 'Reset the countdown timer to initial value',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/countdown/reset')
			},
		},

		// StopWatch Actions (Section 6)
		// Technically these are GFX calls
		stopwatch_pause: {
			name: 'Stopwatch Pause',
			description: 'Pause the stopwatch',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/stopwatch/pause')
			},
		},
		stopwatch_play: {
			name: 'Stopwatch Play',
			description: 'Start or resume the stopwatch',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('gfx/stopwatch/play')
			},
		},
		stopwatch_reset: {
			name: 'Stopwatch Reset',
			description: 'Reset the stopwatch to zero',
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
		scene_next: {
			name: 'Scene: Next',
			description: 'Go to next scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/next')
			},
		},
		scene_previous: {
			name: 'Scene: Previous',
			description: 'Go to previous scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/previous')
			},
		},
		scene_first: {
			name: 'Scene: First',
			description: 'Go to first scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/first')
			},
		},
		scene_last: {
			name: 'Scene: Last',
			description: 'Go to last scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/last')
			},
		},
		scene_freeze: {
			name: 'Scene: Freeze',
			description: 'Freeze the current scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/freeze')
			},
		},
		scene_unfreeze: {
			name: 'Scene: Unfreeze',
			description: 'Unfreeze the current scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/unfreeze')
			},
		},
		scene_play_video: {
			name: 'Scene: Play Video',
			description: 'Play the video of the current scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/playVideo')
			},
		},
		scene_pause_video: {
			name: 'Scene: Pause Video',
			description: 'Pause the video of the current scene',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/pauseVideo')
			},
		},
		scene_toggle_off_ftb: {
			name: 'Scene: Toggle Off FTB',
			description: 'Disable Fade To Black',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/toggleOffFTB')
			},
		},
		scene_toggle_on_ftb: {
			name: 'Scene: Toggle On FTB',
			description: 'Enable Fade To Black',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('scene/toggleOnFTB')
			},
		},

		scene_switch_by_index: {
			name: 'Scene: Switch By Index',
			description: 'Switch the current scene by index',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `scene/switchByIndex?index=${_action.options.index}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		scene_switch_by_name: {
			name: 'Scene: Switch By Name',
			description: 'Switch the current scene by name',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `scene/switchByName?name=${_action.options.name}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		// Show (Section 9)
		show_switch_by_index: {
			name: 'Show: Switch By Index',
			description: 'Switch the current show by index',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `show/switchByIndex?index=${_action.options.index}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		show_switch_by_name: {
			name: 'Show: Switch By Name',
			description: 'Switch the current show by name',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `show/switchByName?name=${_action.options.name}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		// Stream (Section 10)
		stream_start_by_index: {
			name: 'Stream: Start By Index',
			description: 'Start the Stream by index',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `stream/actionByIndex?index=${_action.options.index}&start=true`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		stream_stop_by_index: {
			name: 'Stream: Stop By Index',
			description: 'Stop the Stream by Index',
			options: INDEXES_1_TO_100,
			callback: async (_action) => {
				const cmd = `stream/actionByIndex?index=${_action.options.index}&start=false`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		stream_start_by_name: {
			name: 'Stream: Start By Name',
			description: 'Start the Stream by Name',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `stream/actionByName?name=${_action.options.name}&start=true`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		stream_stop_by_name: {
			name: 'Stream: Stop By Name',
			description: 'Stop the Stream by Name',
			options: TEXT_INPUT_NAME,
			callback: async (_action) => {
				const cmd = `stream/actionByName?name=${_action.options.name}&start=false`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		stream_stop_all: {
			name: 'Stream: Stop All',
			description: 'Stop All Streaming Services',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('stream/stopAll')
			},
		},

		// System Actions (Section 11)
		reboot: {
			name: 'System: Reboot Director',
			description: 'Reboot the device',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('system/reboot')
			},
		},
		shutdown: {
			name: 'System: Shutdown Director',
			description: 'Power off the device',
			callback: async (_action) => {
				const connection = new API(self.config)
				await connection.sendRequest('system/shutdown')
			},
		},

		// Volume Actions (Section 12)

		// monitorMicInput
		// setMonitorDevice
		// setStreamAudioState
		// setStreamAudioVolume

		set_volume_mute: {
			name: 'Volume: Mute Channel',
			description: 'Mute an audio channel',
			options: AUDIO_DEVICES,
			callback: async (_action) => {
				const cmd = `volume/setState?type=${_action.options.audioChannel}&state=1`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		set_volume_unmute: {
			name: 'Volume: Unmute Channel',
			description: 'Unmute an audio channel',
			options: AUDIO_DEVICES,
			callback: async (_action) => {
				const cmd = `volume/setState?type=${_action.options.audioChannel}&state=0`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		set_volume_afv: {
			name: 'Volume: Enable AFV on Channel',
			description: 'Set an audio channel to AFV mode',
			options: AUDIO_DEVICES,
			callback: async (_action) => {
				const cmd = `volume/setState?type=${_action.options.audioChannel}&state=2`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		set_volume_zero: {
			name: 'Volume: Set Volume to Zero',
			description: 'Set the volume of an audio channel to 0 (line)',
			options: AUDIO_DEVICES,
			callback: async (_action) => {
				const cmd = `volume/setVolume?type=${_action.options.audioChannel}&volume=0`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
		set_volume_level: {
			name: 'Volume: Set Volume to a Level between -40 and 10',
			description: 'Set the volume of an audio channel',
			options: AUDIO_DEVICES_AND_LEVELS,
			callback: async (_action) => {
				const cmd = `volume/setVolume?type=${_action.options.audioChannel}&volume=${_action.options.volume}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		volume_increase_step: {
			name: 'Volume: Increase Volume Step',
			description: 'Increase the volume step size for volume adjustments',
			options: [],
			callback: () => {
				var newStep = self.getVariableValue('VolumeStep') + 1
				newStep = Math.min(30, newStep)
				self.setVariableValues({
					VolumeStep: parseInt(newStep),
				})
			},
		},

		volume_decrease_step: {
			name: 'Volume: Decrease Volume Step',
			description: 'Decrease the volume step size for volume adjustments',
			options: [],
			callback: () => {
				var newStep = self.getVariableValue('VolumeStep') - 1
				newStep = Math.max(1, newStep)
				self.setVariableValues({
					VolumeStep: parseInt(newStep),
				})
			},
		},

		volume_increase_channel: {
			name: 'Volume: Increase Channel Volume By Step',
			description: 'Increase a channel volume by the step amount',
			options: AUDIO_DEVICES,
			callback: async (_action) => {
				// Volume Variable hack
				var volumeVariable = `Volume${_action.options.audioChannel}`
				var currentVolume = self.getVariableValue(volumeVariable) ?? 0
				var newVolume = currentVolume + self.getVariableValue('VolumeStep')
				newVolume = Math.max(MIN_VOLUME, Math.min(MAX_VOLUME, newVolume))
				self.setVariableValues({ [volumeVariable]: parseInt(newVolume) })
				const cmd = `volume/setVolume?type=${_action.options.audioChannel}&volume=${newVolume}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},

		volume_decrease_channel: {
			name: 'Volume: Decrease Channel Volume By Step',
			description: 'Decrease a channel volume by the step amount',
			options: AUDIO_DEVICES,
			callback: async (_action) => {
				// Volume Variable hack
				var volumeVariable = `Volume${_action.options.audioChannel}`
				var currentVolume = self.getVariableValue(volumeVariable) ?? 0
				var newVolume = currentVolume - self.getVariableValue('VolumeStep')
				newVolume = Math.max(MIN_VOLUME, Math.min(MAX_VOLUME, newVolume))
				self.setVariableValues({ [volumeVariable]: parseInt(newVolume) })
				const cmd = `volume/setVolume?type=${_action.options.audioChannel}&volume=${newVolume}`
				const connection = new API(self.config)
				await connection.sendRequest(cmd)
			},
		},
	})
}
