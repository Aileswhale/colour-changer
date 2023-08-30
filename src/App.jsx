import { useState } from 'react'
// import Simplechanger from './component/Simplechanger'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [colorName, setColorName] = useState('White');

  const changeBackgroundColor = () => {
    const { color, name } = getRandomColor();
    setBackgroundColor(color);
    setColorName(name);
  };

  const getRandomColor = () => {
    const colors = [
      { name: 'Red', color: '#FF0000' },
      { name: 'Green', color: '#00FF00' },
      { name: 'Blue', color: '#0000FF' },
      { name: 'Yellow', color: '#FFFF00' },
      { name: 'gray', color: '#808080' },
      { name: 'Purple', color: '#800080' },
      { name: 'Orange', color: '#FFA500' },
      { name: 'Brown', color: '#A52A2A' },
      { name: 'Cyan', color: '#00FFFF' },
      { name: 'Indigo', color: '#4B0082' },
      { name: 'Lime', color: '#00FF00' },
      { name: 'Navy', color: '#000080' },
      { name: 'Maroon', color: '#800000' },
      { name: 'Silver', color: '#C0C0C0' },
      { name: 'Aquamarine', color: '#7FFFD4' },
    ];
      const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  

  return (
    <>
    <div id='simple' style={{ backgroundColor }}>
      <header className="color-header">
          <h2>Color Flipper</h2>
          <ul className='nav'>
            <li><a href="#simple">Simple</a></li>
            <li><a href="">HEX</a></li>
          </ul>
      </header>
        <div className="mainBody">
          <h2>Background Color: {colorName}</h2>
        <button onClick={changeBackgroundColor}>Change Color</button></div>
    </div>
    </>
  )
}

export default App
