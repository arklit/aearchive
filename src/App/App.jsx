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
  const [isCDGOpen , setIsCDGOpen] = React.useState(
    localStorage.getItem('isCDGHidden')
    ? JSON.parse(localStorage.getItem('isCDGHidden'))
    : false
  )
  function handleCDGOpen() {
    closeAll()
    setIsCDGOpen(true)
    localStorage.setItem('IsCDGHidden', JSON.stringify(isCDGOpen))
    if(isCDGOpen) {
      setIsCDGOpen(false)
    }
  }
  function handleMargielaOpen() {
    closeAll()
    setIsMargielaOpen(true)
    localStorage.setItem("isMargielaHidden", JSON.stringify(isMargielaOpen))
    if(isMargielaOpen) {
      setIsMargielaOpen(false)
    }
  };

  function handleCCPOpen() {
    closeAll()
    setIsCCPopen(true)
    localStorage.setItem("isCCPHidden", JSON.stringify(isCCPopen))
    if(isCCPopen) {
      setIsCCPopen(false)
    }
  };
  function handleNumberNineOpen() {
    closeAll()
    setIsNumberNineOpen(true)
    localStorage.setItem("isNumberNineHidden", JSON.stringify(isNumberNineOpen))
    if(isNumberNineOpen) {
      setIsNumberNineOpen(false)
    }
  };
  function handleRickOpen() {
    closeAll()
    setIsRickOpen(true)
    localStorage.setItem("isRickHidden", JSON.stringify(isRickOpen))
    if(isRickOpen) {
      setIsRickOpen(false)
    }
  };

  function handleRafOpen() {
    closeAll()
    setIsRafOpen(true)
    localStorage.setItem("isRafHidden", JSON.stringify(isRafOpen))
    if(isRafOpen) {
      setIsRafOpen(false)
    }
  };
  function handleUndercoverOpen() {
    closeAll()
    setIsUndercoverOpen(true)
    localStorage.setItem("isUndercoverHidden", JSON.stringify(isUndercoverOpen))
    if(isUndercoverOpen) {
      setIsUndercoverOpen(false)
    }
  };
  React.useEffect(() => {
    handleRafOpen()
    handleUndercoverOpen()
    handleRickOpen()
    handleNumberNineOpen()
    handleMargielaOpen()
    handleCCPOpen()
  }, [])
  function closeAll() {
    setIsCCPopen(false)
    setIsCDGOpen(false)
    setIsMargielaOpen(false)
    setIsNumberNineOpen(false)
    setIsRafOpen(false)
    setIsUndercoverOpen(false)
    setIsRickOpen(false)
  }


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
          MargielaClick={handleMargielaOpen}
          isCDGOpen={isCDGOpen}
          CDGClick={handleCDGOpen}/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<Navigate to="/archive"/>}/>
      </Routes>
    </div>
  );
}

export default App;
