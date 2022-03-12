import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import Designers from "../Designers/designers";
import About from "../About/About";
import Header from "../Header/header";
import NotFound from "../NotFound/NotFound";
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
  const [isRickOpen, setIsRickOpen] = React.useState(
    localStorage.getItem('isRickHidden')
    ? JSON.parse(localStorage.getItem('isRickHidden'))
    : false
  );
  function handleRickOpen() {
    setIsRickOpen(true)
    localStorage.setItem("isRickHidden", JSON.stringify(isRickOpen))
    if(isRickOpen) {
      setIsRickOpen(false)
    }
  };

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
  }, [])
  React.useEffect(() => {
    handleUndercoverOpen()
  }, [])
  React.useEffect(() => {
    handleRickOpen()
  }, [])


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Designers
          isRafOpen={isRafOpen} 
          RafClick={handleRafOpen}
          isUndercoverOpen={isUndercoverOpen}
          UndercoverClick={handleUndercoverOpen}
          isRickOpen={isRickOpen}
          RickClick={handleRickOpen}/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
