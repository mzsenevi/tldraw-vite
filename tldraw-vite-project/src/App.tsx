// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Tldraw } from 'tldraw'
import './App.css'
import './index.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw />
		</div>
  )
}

export default App
