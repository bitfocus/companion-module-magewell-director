const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const UpgradeScripts = require('./upgrades')
const UpdateActions = require('./actions')
const UpdateFeedbacks = require('./feedbacks')
const UpdateVariableDefinitions = require('./variables')

class DirectorInstance extends InstanceBase {
	//   constructor (internal) {
	//     super(internal)
	//   }

	async init(config) {
		this.config = config

		this.updateStatus(InstanceStatus.Ok)
		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updateVariableDefinitions() // export variable definitions

		this.setVariableValues({
			VolumeStep: 2,
		})
	}

	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
	}

	async configUpdated(config) {
		this.config = config
	}

	// Return config fields for web config
	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'Director Mini IP',
				width: 8,
				regex: Regex.IP,
				default: '192.168.7.146',
			},
			{
				type: 'number',
				id: 'httpPort',
				label: 'Port',
				width: 6,
				default: 8080,
				min: 1,
				max: 65535,
				step: 1,
				regex: Regex.PORT,
			},
		]
	}

	updateActions() {
		UpdateActions(this)
	}

	updateFeedbacks() {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions() {
		UpdateVariableDefinitions(this)
	}
}

runEntrypoint(DirectorInstance, UpgradeScripts)
