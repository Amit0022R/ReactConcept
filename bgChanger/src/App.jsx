import { useState } from "react"


function App() {
    const [ color , setColor ] = useState("olive");

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor: color}} > 
   {/* already double curly braces the toh sidha state likh diya mtlb ->> color */}

    {/* set the position */}
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 " >
      {/* inset tailwind property hai jo apko left right se kitne pixel chiye wo deta */}
    
    {/* bar */}
      <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl " >

        <button onClick={() => setColor("red")} className="italic outline-none px-4 py-2 rounded-full text-white shadow-lg text-lg font-bold transition-transform duration-300 hover:scale-110 " style={{backgroundColor: "red"}} >Red</button>

        <button onClick={() => setColor("pink")} className="italic outline-none px-4 py-2 rounded-full text-white shadow-lg text-lg font-bold transition-transform duration-300 hover:scale-110 " style={{backgroundColor: "pink"}} >Pink</button>

        <button onClick={() => setColor("brown")} className="italic outline-none px-4 py-2 rounded-full text-white shadow-lg text-lg font-bold transition-transform duration-300 hover:scale-110 " style={{backgroundColor: "brown"}} >Brown</button>

        <button onClick={() => setColor("purple")} className="italic outline-none px-4 py-2 rounded-full text-white shadow-lg text-lg font-bold transition-transform duration-300 hover:scale-110 " style={{backgroundColor: "purple"}} >Purple</button>
        
        <button onClick={() => setColor("blue")} className="italic outline-none px-4 py-2 rounded-full text-white shadow-lg text-lg font-bold transition-transform duration-300 hover:scale-110 " style={{backgroundColor: "blue"}} >Blue</button>

      </div>
    </div>

   </div>
  )
}

export default App
