import { useState } from "react"
import './App.css'
function App() {
  var [color, setColor] = useState("light");
 

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
    >
      <div className="flex items-center justify-center h-screen text-5xl">Click My Buttons I will change myself for you </div>
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button className="outline-none px-4 py-1 rounded-full text-white "
          style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>

          <button className="outline-none px-4 py-1 rounded-full text-white "
          style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>

          <button className="outline-none px-4 py-1 rounded-full text-white "
          style={{backgroundColor: "blue"}}onClick={()=> setColor("blue")}>Blue</button>

          <button className="outline-none px-4 py-1 rounded-full text-white "
          style={{backgroundColor: "olive"}} onClick={()=> setColor("olive")}>Olive</button>


          <button className="outline-none px-4 py-1 rounded-full text-white "
          style={{backgroundColor: "black"}} onClick={()=> setColor("black")}>Dark</button>


          <button className="outline-none px-4 py-1 rounded-full text-black "
          style={{backgroundColor: "pink"}} onClick={()=> setColor("pink")}>Pink</button>


          <button className="outline-none px-4 py-1 rounded-full text-black "
          style={{backgroundColor: "lavender"}} onClick={()=> setColor("lavender")}>Lavender</button>


          <button className="outline-none px-4 py-1 rounded-full text-white "
          style={{backgroundColor: "orange"}} onClick={()=> setColor("orange")}>Orange</button>


          <button className="outline-none px-4 py-1 rounded-full text-black "
          style={{backgroundColor: "yellow"}} onClick={()=> setColor("yellow")}>Yellow</button>


          <button className="outline-none px-4 py-1 rounded-full text-white "
          style={{backgroundColor: "darkgreen"}} onClick={()=> setColor("darkgreen")}>Dark green</button>


          <button className="outline-none px-4 py-1 rounded-full text-white "
          style={{backgroundColor: "darkred"}} onClick={()=> setColor("darkred")}>dark red</button>


        </div>
      </div>
    </div>
      
     
  )
}

export default App
