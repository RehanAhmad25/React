import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      {/* 1st {} → "writing JavaScript inside JSX."
      "2nd {}-> create a JavaScript object, and backgroundColor is an object property whose value comes from the "color" variable." */}

      {/* onclick requires a function, if it is not given then it directly executes */}
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>RED</button>
          <button onClick={()=> setColor("green")} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>GREEN</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>BLUE</button>
          <button onClick={()=> setColor("yellow")} className='outline-none px-3 py-2 rounded-full text-black shadow-lg' style={{backgroundColor:"yellow"}}>YELLOW</button>
          <button onClick={()=> setColor("pink")} className='outline-none px-3 py-2 rounded-full text-black shadow-lg' style={{backgroundColor:"pink"}}>PINK</button>
          <button onClick={()=>{setColor("brown")}} className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:'brown'}}>Brown</button>
        </div>
      </div>

    </div>
  )
}

export default App
