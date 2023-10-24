import React, { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(0);

  function clickImg () {
    setValue (prevState => prevState + 1)
  };

  function result () {
  
        console.log (Math.max(value))
  
  }

  return (
    <div className="App">
      <div className="conteiner">
          <div className="images">
            <img id="img1" className="img" src="images/smail1.jpg" alt="smail1" onClick = {clickImg}/>
            <div id="num1" className="num">{value}</div>
          </div>
          <div className="images">
            <img id="img2" className="img" src="images/smail2.jpg" alt="smail2" onClick = {clickImg}/>
            <div id="num2" className="num">{value}</div>
          </div>
          <div className="images">
            <img id="img3" className="img" src="images/smail3.jpg" alt="smail3" onClick = {clickImg}/>
            <div id="num3" className="num">{value}</div>
          </div>
          <div className="images">
            <img id="img4" className="img" src="images/smail4.jpg" alt="smail4" onClick = {clickImg}/>
            <div id="num4" className="num">{value}</div>
          </div>
          <div className="images">
            <img id="img5" className="img" src="images/smail5.jpg" alt="smail5" onClick = {clickImg}/>
            <div id="num5" className="num">{value}</div>
          </div>
       </div>
          <button className="btn" onClick={result} >Show results</button>
          
    </div>
  );
}

export default App;
