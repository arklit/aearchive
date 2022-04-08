import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import Designers from "../Designers/designers";
import About from "../About/About";
import Header from "../Header/header";
function App() {
  const [isAw96Open, setIsAw96Open] = React.useState(false);
  const [isSs97Open, setIsSs97Open] = React.useState(false);
  const [isSs98Open, setIsSs98Open] = React.useState(false);
  const [isSs99Open, setIsSs99Open] = React.useState(false);
  const [isAw98Open, setIsAw98Open] = React.useState(false);
  const [isAw99Open, setIsAw99Open] = React.useState(false)
  const [isAw00Open, setIsAw00Open] = React.useState(false);
  const [isAw01Open, setIsAw01Open] = React.useState(false);
  const [isAw02Open, setIsAw02Open] = React.useState(false);
  const [isAw03Open, setIsAw03Open] = React.useState(false);
  const [isAw04Open, setIsAw04Open] = React.useState(false);
  const [isAw05Open, setIsAw05Open] = React.useState(false);
  const [isAw06Open, setIsAw06Open] = React.useState(false);
  const [isAw08Open, setIsAw08Open] = React.useState(false);
  const [isAw10Open, setIsAw10Open] = React.useState(false);
  const [isAw11Open, setIsAw11Open] = React.useState(false);
  const [isAw14Open, setIsAw14Open] = React.useState(false);
  const [isAw16Open, setIsAw16Open] = React.useState(false);
  const [isAw17Open, setIsAw17Open] = React.useState(false);
  const [isAw18Open, setIsAw18Open] = React.useState(false);
  const [isSs00Open, setIsSs00Open] = React.useState(false);
  const [isSs02Open, setIsSs02Open] = React.useState(false);
  const [isSs03Open, setIsSs03Open] = React.useState(false);
  const [isSs04Open, setIsSs04Open] = React.useState(false);
  const [isSs05Open, setIsSs05Open] = React.useState(false);
  const [isSs06Open, setIsSs06Open] = React.useState(false);
  const [isSs09Open, setIsSs09Open] = React.useState(false);
  const [isSs10Open, setIsSs10Open] = React.useState(false);
  const [isSs18Open, setIsSs18Open] = React.useState(false);

  const [isRafOpen, setIsRafOpen] = React.useState(false);
  const [isUndercoverOpen, setIsUndercoverOpen] = React.useState(false);
  const [isRickOpen, setIsRickOpen] = React.useState(false);
  const [isNumberNineOpen, setIsNumberNineOpen] = React.useState(false);
  const [isCCPopen, setIsCCPopen] = React.useState(false);
  const [isMargielaOpen, setIsMargielaOpen] = React.useState(false);
  const [isCDGOpen , setIsCDGOpen] = React.useState(false)
  function handleCDGOpen() {
    closeAll()
    setIsCDGOpen(true)
    if(isCDGOpen) {
      setIsCDGOpen(false)
    }
  }
  function handleMargielaOpen() {
    closeAll()
    setIsMargielaOpen(true)
    if(isMargielaOpen) {
      setIsMargielaOpen(false)
    }
  };

  function handleCCPOpen() {
    closeAll()
    setIsCCPopen(true)
    if(isCCPopen) {
      setIsCCPopen(false)
    }
  };
  function handleNumberNineOpen() {
    closeAll()
    setIsNumberNineOpen(true)
    if(isNumberNineOpen) {
      setIsNumberNineOpen(false)
    }
  };
  function handleRickOpen() {
    closeAll()
    setIsRickOpen(true)
    if(isRickOpen) {
      setIsRickOpen(false)
    }
  };

  function handleRafOpen() {
    closeAll()
    setIsRafOpen(true)
    if(isRafOpen) {
      setIsRafOpen(false)
    }
  };
  function handleUndercoverOpen() {
    closeAll()
    setIsUndercoverOpen(true)
    if(isUndercoverOpen) {
      setIsUndercoverOpen(false)
    }
  };
  function closeAll() {
    setIsCCPopen(false)
    setIsCDGOpen(false)
    setIsMargielaOpen(false)
    setIsNumberNineOpen(false)
    setIsRafOpen(false)
    setIsUndercoverOpen(false)
    setIsRickOpen(false)
  }
  const handleAw96Open = () =>  setIsAw96Open(true)
  const handleSs97Open = () =>  setIsSs97Open(true)
  const handleSs98Open = () =>  setIsSs98Open(true)
  const handleSs99Open = () =>  setIsSs99Open(true) 
  const handleSs00Open = () =>  setIsSs00Open(true) 
  const handleSs02Open = () =>  setIsSs02Open(true) 
  const handleSs03Open = () =>  setIsSs03Open(true) 
  const handleSs04Open = () =>  setIsSs04Open(true) 
  const handleSs05Open = () =>  setIsSs05Open(true) 
  const handleSs06Open = () =>  setIsSs06Open(true) 
  const handleSs09Open = () =>  setIsSs09Open(true) 
  const handleSs10Open = () =>  setIsSs10Open(true) 
  const handleSs18Open = () =>  setIsSs18Open(true) 
  const handleAw98Open = () =>  setIsAw98Open(true) 
  const handleAw99Open = () =>  setIsAw99Open(true) 
  const handleAw00Open = () =>  setIsAw00Open(true) 
  const handleAw01Open = () =>  setIsAw01Open(true)
  const handleAw02Open = () =>  setIsAw02Open(true) 
  const handleAw03Open = () =>  setIsAw03Open(true) 
  const handleAw04Open = () =>  setIsAw04Open(true) 
  const handleAw05Open = () =>  setIsAw05Open(true) 
  const handleAw06Open = () =>  setIsAw06Open(true)  
  const handleAw08Open = () =>  setIsAw08Open(true)  
  const handleAw10Open = () =>  setIsAw10Open(true) 
  const handleAw11Open = () =>  setIsAw11Open(true) 
  const handleAw14Open = () =>  setIsAw14Open(true)  
  const handleAw16Open = () =>  setIsAw16Open(true) 
  const handleAw17Open = () =>  setIsAw17Open(true)
  const handleAw18Open = () =>  setIsAw18Open(true)

  function closeAllRaf() {
    setIsAw96Open(false)
    setIsSs97Open(false)
    setIsSs98Open(false)
    setIsSs99Open(false)
    setIsAw98Open(false)
    setIsAw99Open(false)
    setIsAw00Open(false)
    setIsAw01Open(false)
    setIsAw02Open(false)
    setIsAw03Open(false)
    setIsAw04Open(false)
    setIsAw05Open(false)
    setIsAw06Open(false)
    setIsAw08Open(false)
    setIsAw10Open(false)
    setIsAw11Open(false)
    setIsAw14Open(false)
    setIsAw16Open(false)
    setIsAw17Open(false)
    setIsAw18Open(false)
    setIsSs00Open(false)
    setIsSs02Open(false)
    setIsSs03Open(false)
    setIsSs04Open(false)
    setIsSs05Open(false)
    setIsSs06Open(false)
    setIsSs09Open(false)
    setIsSs10Open(false)
    setIsSs18Open(false)
  }


  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllRaf();
      }
    }
    document.addEventListener('keydown', handleEscClose)
    return () => {
      document.removeEventListener('keydown', handleEscClose)
    };
  }, [])


  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="archive/*" element={<Designers
          isRafOpen={isRafOpen}
          isAw96Open={isAw96Open}
          isSs97Open={isSs97Open}
          isSs98Open={isSs98Open}
          isSs99Open={isSs99Open}
          isSs00Open={isSs00Open}
          isSs02Open={isSs02Open}
          isSs03Open={isSs03Open}
          isSs04Open={isSs04Open}
          isSs05Open={isSs05Open}
          isSs06Open={isSs06Open}
          isSs09Open={isSs09Open}
          isSs10Open={isSs10Open}
          isSs18Open={isSs18Open}
          isAw98Open={isAw98Open}
          isAw99Open={isAw99Open}
          isAw00Open={isAw00Open}
          isAw01Open={isAw01Open}
          isAw02Open={isAw02Open}
          isAw03Open={isAw03Open}
          isAw04Open={isAw04Open}
          isAw05Open={isAw05Open}
          isAw06Open={isAw06Open}
          isAw08Open={isAw08Open}
          isAw10Open={isAw10Open}
          isAw11Open={isAw11Open}
          isAw14Open={isAw14Open}
          isAw16Open={isAw16Open}
          isAw17Open={isAw17Open}
          isAw18Open={isAw18Open}
          handleAw18Open={handleAw18Open}
          handleAw17Open={handleAw17Open}
          handleAw16Open={handleAw16Open}
          handleAw14Open={handleAw14Open}
          handleAw11Open={handleAw11Open}
          handleAw10Open={handleAw10Open}
          handleAw08Open={handleAw08Open}
          handleAw06Open={handleAw06Open}
          handleAw05Open={handleAw05Open}
          handleAw04Open={handleAw04Open}
          handleAw03Open={handleAw03Open}
          handleAw02Open={handleAw02Open}
          handleAw01Open={handleAw01Open}
          handleAw00Open={handleAw00Open}
          handleAw99Open={handleAw99Open}
          handleAw98Open={handleAw98Open}
          handleSs18Open={handleSs18Open}
          handleSs10Open={handleSs10Open}
          handleSs09Open={handleSs09Open}
          handleSs06Open={handleSs06Open}
          handleSs05Open={handleSs05Open}
          handleSs04Open={handleSs04Open}
          handleSs03Open={handleSs03Open}
          handleSs02Open={handleSs02Open}
          handleSs97Open={handleSs97Open}
          handleSs99Open={handleSs99Open}
          handleSs98Open={handleSs98Open}
          handleAw96Open={handleAw96Open}
          handleSs00Open={handleSs00Open}
          RafClick={handleRafOpen}
          closeModal={closeAllRaf}
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
