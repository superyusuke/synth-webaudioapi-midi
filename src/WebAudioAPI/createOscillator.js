import convertMidiNoteToFrequency from '/src/Util/convertMidiNoteToFrequency'

const createOscillator = ({ audioContext, wave = 'sawtooth' }) => {
  return ({ midiNoteNumber }) => {
    const osc = audioContext.createOscillator()
    osc.type = wave
    osc.frequency.value = convertMidiNoteToFrequency(midiNoteNumber)
    return osc
  }
}

export default createOscillator
