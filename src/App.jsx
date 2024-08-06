import { useRef } from "react";


const App = () => {

  // useRef is used in alternate to js document.getElementById method
  //not suitable for referencing multiple elements at once
let greet = useRef();
let testGreet = useRef();
let myImg = useRef();

const handleGreet = ()=>{
  greet.current.innerText = "Welcome";
}

const handleGreet2= ()=> {
  greet.current.innerHTML = "<ul><li>A</li><li>B</li></ul>" //current returns first reference
}


const handleTestGreet = () => {
  testGreet.innerText = "woola";
}

const updateImage = ()=> {
  myImg.current.src = "https://placehold.co/600x400/cccccc/ffffff/png";
  myImg.current.setAttribute("height","200px");
  myImg.current.setAttribute("width","200px");
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

      <img ref = {myImg} src = "https://placehold.co/600x400/000000/FFFFFF/png"/>
      <button onClick={updateImage}>Click Me</button>
    </div>
  );
};

export default App;