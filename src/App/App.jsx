import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import Designers from "../Designers/designers";
import About from "../About/About";
import Header from "../Header/header";
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
  const [isNumberNineOpen, setIsNumberNineOpen] = React.useState(
    localStorage.getItem('isNumberNineHidden')
    ? JSON.parse(localStorage.getItem('isNumberNineHidden'))
    : false
  );
  const [isCCPopen, setIsCCPopen] = React.useState(
    localStorage.getItem('isCCPHidden')
    ? JSON.parse(localStorage.getItem('isCCPHidden'))
    : false
  );
  const [isMargielaOpen, setIsMargielaOpen] = React.useState(
    localStorage.getItem('isMargielaHidden')
    ? JSON.parse(localStorage.getItem('isMargielaHidden'))
    : false
  );
  function handleMargielaOpen() {
    setIsMargielaOpen(true)
    localStorage.setItem("isMargielaHidden", JSON.stringify(isMargielaOpen))
    if(isMargielaOpen) {
      setIsMargielaOpen(false)
    }
  };

  function handleCCPOpen() {
    setIsCCPopen(true)
    localStorage.setItem("isCCPHidden", JSON.stringify(isCCPopen))
    if(isCCPopen) {
      setIsCCPopen(false)
    }
  };
  function handleNumberNineOpen() {
    setIsNumberNineOpen(true)
    localStorage.setItem("isNumberNineHidden", JSON.stringify(isNumberNineOpen))
    if(isNumberNineOpen) {
      setIsNumberNineOpen(false)
    }
  };
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
  React.useEffect(() => {
    handleNumberNineOpen()
  }, [])
  React.useEffect(() => {
    handleCCPOpen()
  }, [])


  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="archive/*" element={<Designers
          isRafOpen={isRafOpen} 
          RafClick={handleRafOpen}
          isUndercoverOpen={isUndercoverOpen}
          UndercoverClick={handleUndercoverOpen}
          isRickOpen={isRickOpen}
          RickClick={handleRickOpen}
          NumberNineClick={handleNumberNineOpen}
          isNumberNineOpen={isNumberNineOpen}
          isCCPopen={isCCPopen}
          CCPclick={handleCCPOpen}
          isMaisonMargielaOpen={isMargielaOpen}
          MargielaClick={handleMargielaOpen}/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<Navigate to="/archive"/>}/>
      </Routes>
    </div>
  );
}

export default App;
