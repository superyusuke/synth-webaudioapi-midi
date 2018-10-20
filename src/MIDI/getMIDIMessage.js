const getMIDIMessage = synth => message => {
  const command = message.data[0]
  const midiNoteNumber = message.data[1]
  // command が 128 の時は
  // noteoff 信号が来ているので velocity = 0 をかえす
  // それ以外の時には data[2] に velocity が入っている
  const velocity = command !== 128 ? message.data[2] : 0

  console.log(
    {
      command: message.data[0],
      midiNoteNumber: message.data[1],
      velocity: message.data[2],
    },
    'got midi message!!'
  )

  switch (command) {
    case 144: // noteOn
      if (velocity === 0) {
        const option = {
          midiNoteNumber,
        }
        synth.stop(option)
        return option
      }

      {
        const option = {
          midiNoteNumber,
          wave: 'sawtooth',
          velocity,
        }

        synth.play(option)
        return option
      }

    case 128: // noteOff
      const option = {
        midiNoteNumber,
      }
      synth.stop(option)
      return option

    default:
      return 'default case'
  }
}

export default getMIDIMessage
