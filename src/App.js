import React, {useState} from 'react';
import Context from "./Context";
//import Header from "./Components/Header"
import ItsBody from "./Components/ItsBody";

const App = () => {
  const themeHook = useState("light");
  return(
    <Context.Provider value={themeHook}>
      <div>
        
        <ItsBody />
      </div>
    </Context.Provider>
  )
  
}

export default App;
