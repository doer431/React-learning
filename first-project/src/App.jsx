import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState('red')

  return (
    <>
      <div className=" bg-red-500 h-screen w-screen flex justify-center items-end  " style={{ backgroundColor: color }}>
        <div className="change-btn bg-slate-50 rounded-full p-3 w-auto mb-10 " >
          <div className='flex gap-3'>
              <button className='  bg-red-500'  onClick={() => setColor('red')}>red</button>
              <button className='  bg-green-500'  onClick={() => setColor('green')}>green</button>
              <button className='  bg-blue-500'  onClick={() => setColor('blue')}>blue</button>
              <button className='  bg-orange-500 '  onClick={() => setColor('orange')}>orange</button>
              <button className='  bg-yellow-500 '  onClick={() => setColor('yellow')}>yellow</button>
              <button className='  bg-purple-500 '  onClick={() => setColor('purple')}>purple</button>
              <button className='  bg-pink-500 '  onClick={() => setColor('pink')}>pink</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
