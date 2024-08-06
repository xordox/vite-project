import { useRef } from "react";


const App = () => {

  // useRef is used in alternate to js document.getElementById method
  //not suitable for referencing multiple elements at once

  //if you want to declare all useRef variables in one place, change the ref parameter of html element to fat arrow syntax instead of useRef variable name. Also remove the current keyword while accessing useRef variable value.
let greet = useRef();
let testGreet = useRef();
let myImg = useRef();
let firstName = useRef();
let lastName = useRef();
let fullName = useRef();
let dummyText = useRef();
let testP = useRef();
let APIData = useRef(null);



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

const showFullName = () => {
  fullName.current.innerText = firstName.current.value +" "+ lastName.current.value
}

const seeMagic = () => {
dummyText.current.classList.remove("text-success");
dummyText.current.classList.add("text-danger");
}


const fetchData = async() => {
const response = await fetch("https://dummyjson.com/products");
APIData.current = await response.json();

}

const showData = () => {
  testP.current.innerText = JSON.stringify(APIData);

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
      <button onClick={updateImage}>Click Me</button><br/>

      <input ref = {firstName} placeholder="firstName"/>
      <input ref = {lastName} placeholder="lastName"/>
      <h2 ref={fullName}></h2>
      <button onClick = {showFullName}>CLick Me</button>

      <h2 className="text-success" ref = {dummyText}>This is learning phase</h2>
      <button onClick={seeMagic}>Click Me</button>

      <p ref = {testP}></p>
      <button  onClick={fetchData}>Fetch Data</button>
      <button onClick={showData}>Show Data</button>

    </div>
  );
};

export default App;