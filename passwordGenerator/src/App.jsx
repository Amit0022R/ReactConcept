import { useState , useCallback } from "react"

function App() {
  const [ length , setLength ] = useState(8);
  const [ numberAllowed , setnumberAllowed ] = useState(false);
  const [ charAllowed , setcharAllowed ] = useState(false);
  const [ password , setPassword ] = useState("");

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if( numberAllowed ) str += "0123456789"
    if( charAllowed ) str += "!@#$%^&*-_+=[]{}~`"

    // ab ek password banaba hai jo ki length chalega
    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
      setPassword(pass);

  } , [ length , numberAllowed , charAllowed , setPassword ])
 

  

  return (
    <>
    <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800  " >
      <h1 className="text-white text-center my-3 " >Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 " >
        <input
         type="text"
         value={password}
         className="outline-none w-full py-2 px-3 rounded-md  "
         placeholder="Password"
         readOnly
          /> 
          {/* readOnly se koi uske ander aake likh nhi skta */}

        <button 
          className="outline-none  bg-blue-600 text-white px-3 py-0.5 shrink-0 "
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2" >
          <div className="flex items-center gap-x-1 " >

          <input 
          type="range" 
          min={6}
          max={30}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)} } 
          />
            <label > Length: {length} </label>
          </div>

            <div className="flex items-center gap-x-1" >
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={ () => {
                setnumberAllowed( (prev) => !prev )
              } } 
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
              <div className="flex items-center gap-x-1" >
                <input type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={ () => {
                  setcharAllowed( ( prev ) => !prev )
                } } 
                />
                <label htmlFor="characterInput">Characters</label>
              </div>
      </div>
    </div>
    </>
  )
}

export default App