module.exports = async function (self) {
	self.setVariableDefinitions([
		{ variableId: 'VolumeStep', name: 'Volume Change Step' },
		{ variableId: 'Volume1', name: 'Monitor Volume' },
		{ variableId: 'Volume2', name: 'Video Clip Volume' },
		{ variableId: 'Volume3', name: 'Program Volume' },
		{ variableId: 'Volume512', name: 'Mic Volume' },
		{ variableId: 'Volume768', name: 'BlueTooth Volume' },
		{ variableId: 'Volume1536', name: 'BGM Volume' },
		{ variableId: 'Volume1792', name: 'HDMI 1 Volume' },
		{ variableId: 'Volume2048', name: 'HDMI 2 Volume' },
	])
}
