import Synth from '/src/Synth'
import createAudioContext from '/src/WebAudioAPI/createAudioContext'
import getMIDIInputDevices from '/src/MIDI/getMIDIInputDevices'
import getMIDIMessage from '/src/MIDI/getMIDIMessage'

const audioContext = createAudioContext()
const destination = audioContext.destination

// synth インスタンスを作成
const synth = new Synth({
  audioContext,
  nextNode: destination,
})

// MIDI device にアクセスして、
// MIDI message を受け取った際のハンドラを登録する
const start = async () => {
  // MIDI デバイスを取得する
  const MidiInputDevices = await getMIDIInputDevices()
  console.log({ MidiInputDevices })
  if (MidiInputDevices) {
    // 全ての MIDI デバイスの
    // MIDI  メッセージを受け取った際にハンドラを付与する
    // getMIDIMessage がハンドラ
    // ハンドラで使用する synth インスタンスを渡す
    MidiInputDevices.forEach(o => (o.onmidimessage = getMIDIMessage(synth)))
  }
}

export default start
