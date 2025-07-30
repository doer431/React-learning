
import Chai from "./Chai"
function App() {
  const userName = "mohammed shuraim";
  return (
    <>
      <Chai/>
      <h1>Chai aur react with vite | {userName}</h1>
      {/* we cant write if() statements here {} cause this is an evaluted expression if you wan to write any conditionl statements write outside the jsx then use the variable in this syntax {variableName }   */}
      {/* we can t use direct variables in jsx we have to use {variableName} syntax */}
    </>
  )
}

export default App
