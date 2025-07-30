import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const reactElement = {
//     type : "a",
//     props :{
//         href :"https://google.com",
//         target :"_blank"
//     },
//     Children : " click me"
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">click me to vist google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {href : 'https://google.com', target : '_blank'},
//   'click to vist google | shuraim'
// )

function MyApp(){
  return(
    <div>
      <h2>chai aur react | shuraim</h2>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  // anotherElement
  // reactElement
  // myApp()
  <MyApp/>
);
