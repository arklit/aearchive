import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import Designers from "../Designers/designers";
import About from "./About/About";
function App() {
  const [isRafOpen, setIsRafOpen] = React.useState(
    localStorage.getItem('isRafHidden')
    ? JSON.parse(localStorage.getItem('isRafHidden'))
    : false
  );
  const [isUndercoverOpen, setIsUndercoverOpen] = React.useState(
    localStorage.getItem('isUndercoverHidden')
    ? JSON.parse(localStorage.getItem('isUndercoverHidden'))
    : false
  );
  function handleRafOpen() {
    setIsRafOpen(true)
    localStorage.setItem("isRafHidden", JSON.stringify(isRafOpen))
    if(isRafOpen) {
      setIsRafOpen(false)
    }
  };
  function handleUndercoverOpen() {
    setIsUndercoverOpen(true)
    localStorage.setItem("isUndercoverHidden", JSON.stringify(isUndercoverOpen))
    if(isUndercoverOpen) {
      setIsUndercoverOpen(false)
    }
  };
  
  React.useEffect(() => {
    handleRafOpen()
    handleUndercoverOpen()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Designers
          isRafOpen={isRafOpen} 
          RafClick={handleRafOpen}
          isUndercoverOpen={isUndercoverOpen}
          UndercoverClick={handleUndercoverOpen}/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
