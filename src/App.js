import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [person, setperson] = useState({
    fullname: "amine ch",
    prof: "ingenieur",
    show: false,
  });

  return <div className="App">
<button onClick={()=>setperson({...person,show:!person.show})}>show</button>
{
person.show==true?(
  <>
  <h1>{person.fullname}</h1>
  <h2>{person.prof}</h2>
  </>
):null

}
  </div>;

}

export default App;
