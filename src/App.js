import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';


const hexColors = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function App() {

 
 const [color, setColor] = useState('#eb9dfe');

 function getRandomColors() {
   return Math.floor(Math.random() * hexColors.length);
 }

 function changeColor() {
   let hex = '#';

   for (let i = 0; i < 6; i++) {
     hex += hexColors[getRandomColors()];
   }
   setColor(hex);
 } 

  return (
    <div className="App" style={{ backgroundColor: color }}>

     <div className='container-flipper'>

       <CopyToClipboard text={ color }>
         
       <h1 className='span-color' onClick={() => toast('Color copied!')}>
         <span>{ color }</span></h1>
       
       </CopyToClipboard>
       <Toaster />

       <h2 className='text'>Press the button bellow to generate new colors</h2>

       <Button 
        handleClick={ changeColor }
        value='Generate new color' />

     </div>

    </div>
  );
}

export default App;
