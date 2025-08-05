import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='text-2xl font-bold bg-green-400 p-4 rounded-xl mb-3' > Tailwind css</h2>
      <Card  userName="mohammed shuraim"  btnName="read more"/>
    </>
  )
}

export default App
