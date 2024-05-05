import React from 'react'
import Counter from './Counter/Counter'
import ColorPicker from './ColorPicker/ColorPicker'
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'

const App = () => {
  return (
    <div>
      <Counter />
      <ColorPicker/>
      <ToggleSwitch/>
    </div>
  )
}

export default App