const getMIDIInputDevices = async () => {
  try {
    const access = await navigator.requestMIDIAccess({ sysex: false })
    const MidiInputDevices = Array.from(access.inputs.values())
    const MidiOutputDevice = Array.from(access.outputs.values())

    console.log(
      'midiIn and midiOut devices',
      MidiInputDevices,
      MidiOutputDevice
    )

    return MidiInputDevices
  } catch (error) {
    console.error('[ERROR] requestMIDIAccess()', error)

    return false
  }
}

export default getMIDIInputDevices
