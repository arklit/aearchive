import React from "react";
import Designers from "../Designers/designers";
import Header from "../Header/header";
import RafSimons from "../RafSimons/RafSimons";
function App() {
  const [isOpen, setIsOpen] = React.useState(
    localStorage.getItem('isHidden')
    ? JSON.parse(localStorage.getItem('isOpen'))
    : false
  );
  function handleOpen() {
    setIsOpen(true)
    localStorage.setItem("isHidden", JSON.stringify(isOpen))
    if(isOpen) {
      setIsOpen(false)
    }
  }
  
  React.useEffect(() => {
    handleOpen()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Designers handleClick={handleOpen}/>
      <RafSimons isOpen={isOpen}/>
    </div>
  );
}

export default App;
