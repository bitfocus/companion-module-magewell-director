# companion-module-magewell-director

Controls a [Magewell Director Mini](https://www.magewell.com/director-mini) swithching/encoding/streaming device.

APIs in this code apply to Director Mini (Firmware version: 2.3.576).

Read [Magewell Director Mini API](https://www.magewell.com/api-docs/director-mini-api/) for more information.

## API Implementation and Status

### BGM - Background Music (Section 2)

- First, Last, Next, Pause, Play, Previous

### GFX (Section 3)

- Toggle On/Off By Index or Name, Clear

### Scoreboard (Section 4)

- FIXME: To be Done

### Timer - Countdown Timer (Section 5)

- Pause, Play, and Reset

### Stopwatch (Section 6)

- Pause, Play, and Reset

### Record (Section 7)

- Screenshot, Start, Stop

### Scene (Section 8)

- First, Last, Next, Pause, Play, Previous
- Freeze, Unfreeze
- Switch By Index and Name
- Toggle On/Off FTB
- FIXME: QuickSwitch, Transitions

### Show (Section 9)

- Switch By Index and Name

### Stream (Section 10)

- Toggle On/Off By Index or Name
- Stop All

### System (Section 11)

- Reboot, Shutdown

### Volume

- Mute, Unmute, AFV Toggle, Set to level 0, Set explicit level per channel.
- Raise/Lower Volume levels on main inputs (HDMI, MIC) (using awkward variables and defaulting to 0)
- FIXME:  To be done: monitorMicInput, setMonitorDevice, setStreamAudioState, setStreamAudioVolume

See [HELP.md](./companion/HELP.md) and [LICENSE](./LICENSE)
