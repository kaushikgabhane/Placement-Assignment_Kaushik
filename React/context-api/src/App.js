import React from "react";
import { createContext , useState} from "react";
import Signup from "./Components/Signup";

export const themeContext = createContext(null);
function App() {
  
  
  const [dark,setDark] = useState(false);
  return (
    <div className="App flex justify-center align-middle bg-slate-700 h-screen">
      <themeContext.Provider value={{dark ,setDark}}>
        <Signup />
      </themeContext.Provider>
    </div>
  );
}

export default App;
