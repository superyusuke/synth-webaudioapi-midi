import convertMidiNoteToFrequency from '/src/Util/convertMidiNoteToFrequency'

const createOscillator = ({ audioContext, wave }) => {
  return ({ midiNoteNumber }) => {
    const osc = audioContext.createOscillator()
    osc.type = wave
    osc.frequency.value = convertMidiNoteToFrequency(midiNoteNumber)
    return osc
  }
}

export default createOscillator
