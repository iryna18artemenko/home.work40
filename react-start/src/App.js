import React, { useState } from 'react';
import './App.css';



function App() {
  const [smiles, setSmiles] = useState([ 
  {id: 0, name: "Smile 1", counter: 0, src: "images/smail0.jpg", alt:"smile0"},
  {id: 1, name: "Smile 2", counter: 0, src: "images/smail1.jpg", alt:"smile1"},
  {id: 2, name: "Smile 3", counter: 0, src: "images/smail2.jpg", alt:"smile2"},
  {id: 3, name: "Smile 4", counter: 0, src: "images/smail3.jpg", alt:"smile3"},
  {id: 4, name: "Smile 5", counter: 0, src: "images/smail4.jpg", alt:"smile4"}]);

  const [winner, setWinner] = useState(-1);
  

  function findWinner () {
    const winSmile = Math.max(...smiles.map(smile => smile.counter));
    const winnerId = smiles.find(smile => smile.counter === winSmile);
    setWinner(winnerId.id);
  };

  function hendelClick (id) {

    setSmiles(smiles.filter (smile => {
      if (smile.id === id) {
        smile.counter++
      } 
      return smile;}))
  };


  return (
    <div>
      <h1>Smile Competition</h1>
      <div style={{display:"flex"}}>
        {winner > -1 ? (
         <div className='images'> 
            <h2>Winner:</h2>
            <img className='img'  src={`images/smail${winner}.jpg`} alt={`smail${winner}`} /> 
         </div>
         ) : smiles.map((smile, id)=>( 
            <div className='images' key={id}>
                <p>{smile.name}</p>
                <img className='img' onClick={() => hendelClick(id)} src={smile.src} alt={smile.alt} />
                <p>Count {smile.counter}</p>
            </div>))}
      </div>
       {winner < 0 ? (<button onClick={() => findWinner()}>Show winner</button>) : null}
    </div>
   
  );
}


export default App;
