// import { useState , useCallback, useEffect, useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
// const [length , setLength] = useState(8);
// const [numberAllowed , setNumberAllowed] = useState(false);
// const [charAllowed , setCharAllowed] = useState(false);
// const [password , setPassword] = useState("");
// const passwordRef = useRef(null);

// const passwordGenerator = useEffect(()=>{
//   let pass = "";
//   let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   if(numberAllowed) str += "0123456789";
//   if(charAllowed) str += "!@#$%^&*";
//   for(let i = 1 ; i <= length ; i++){
//     let char = Math.floor(Math.random() * str.length + 1);
//     pass += str.charAt(char); 
//     // pass =+ str[char];
//   }
//   setPassword(pass);
// },[length, numberAllowed, charAllowed, setPassword])

// const copyToClipboard = () =>{
//   navigator.clipboard.writeText(passwordRef.current.value);
//   passwordRef.current.focus();
//   passwordRef.current.select();
//   passwordRef.current.setSelectionRange(0,12);
// }

//   return (
//     <>
//     <div>
//       <div>
//         <h1 className='text-2xl font-bold bg-white p-4 rounded-xl mb-3'>Password Generator</h1>
//         <input
//          type="text" 
//          value={password}
//          readOnly
//          className='text-2xl font-bold bg-white p-4 rounded-xl mb-3'
//          placeholder='Password'
//          ref={passwordRef}
//          />
//          <button
//         //  onClick={() => navigator.clipboard.writeText(passwordRef.current.value)}
//         // onClick={() => navigator.clipboard.writeText(password)}
//         onClick={copyToClipboard}
//          >copy</button>
//       </div>
//       <div>
//         <input
//          type="range" 
//          min={6}
//          max={16}
//          value={length}
//          onChange={(e) => setLength(e.target.value)}
//          className='text-2xl font-bold bg-white p-4 rounded-xl mb-3'
//          />
//          <label >
//             Length{ length}
//          </label>
//       </div>
//       <div>
//         <input
//          type="checkbox" 
//          defaultChecked={numberAllowed}
//          onChange={() => setNumberAllowed(!numberAllowed)}
//          className='text-2xl font-bold bg-white p-4 rounded-xl mb-3'
//          />
//          <label >
//             Number
//          </label>
//       </div>
//       <div>
//         <input
//          type="checkbox" 
//          defaultChecked={charAllowed}
//          onChange={() => setCharAllowed(!charAllowed)}
//          className='text-2xl font-bold bg-white p-4 rounded-xl mb-3'
//          />
//          <label >
//             Character
//          </label>
//       </div>
//     </div>
//     </>
//   )
// }

// export default App



import { useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // Password Generator
  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Password Generator
        </h1>

        {/* Password Field */}
        <div className="flex mb-6">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none text-gray-700"
            placeholder="Generated password"
          />
          <button
            onClick={copyToClipboard}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg transition-colors"
          >
            Copy
          </button>
        </div>

        {/* Length */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">
            Length: {length}
          </label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
        </div>

        {/* Number checkbox */}
        <label className="flex items-center gap-2 cursor-pointer mb-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="accent-indigo-600"
          />
          <span className="text-gray-700">Include Numbers</span>
        </label>

        {/* Special characters checkbox */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="accent-indigo-600"
          />
          <span className="text-gray-700">Include Special Characters</span>
        </label>
      </div>
    </div>
  );
}

export default App;
