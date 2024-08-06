import { useRef } from "react";


const App = () => {

  // useRef is used in alternate to js document.getElementById method
  //not suitable for referencing multiple elements at once
let greet = useRef();
let testGreet = useRef();

const handleGreet = ()=>{
  greet.current.innerText = "Welcome";
}

const handleGreet2= ()=> {
  greet.current.innerHTML = "<ul><li>A</li><li>B</li></ul>" //current returns first reference
}


const handleTestGreet = () => {
  testGreet.innerText = "woola";
}
  return (
    <div>
      <h1 ref ={greet}>Hello there</h1>
      <button onClick={handleGreet}>CLick</button>
      <button onClick={handleGreet2}>CLick Me</button>
      
      <h2 ref ={(h2)=>testGreet=h2}>Hello there</h2>
      <h2 ref ={(abc)=>testGreet=abc}>Hello there</h2>
      <button onClick={handleTestGreet}>CLick Me</button>
      <h2 ref ={(abc)=>testGreet=abc}>HI there</h2>
    </div>
  );
};

export default App;