import './App.css';
import facebook from "./images/icon-facebook.svg"
import instagram from "./images/icon-instagram.svg"
import twitter from "./images/icon-twitter.svg"
import up from "./images/icon-up.svg"
import down from "./images/icon-down.svg"
import youtube from "./images/icon-youtube.svg"
import React, {useState} from 'react'

function App() {

  const [isLight, setIsLight] = useState(true);

  const handleToggle = () => {
    setIsLight(!isLight);
  };

  return (
    <div className="App">
      <div className='container'>
        <div className = 'Title'>
          <div><h1>Social</h1><h5>Total Followers</h5>
          </div>
          <div className='toggle'>
            <p>Dark Mode</p>
            <div className = "outerDiv" >
            <div className={`circle ${isLight ? 'light' : 'dark'}`} onClick = {handleToggle}></div>
            </div>
          </div>
        </div>

        <div className = "firstRow">
          
          <div className={`block ${isLight ? '' : 'dark'}`}>
            <div className='innerBlock'>
            <div className='tag'><img src= {facebook}  alt = "icon"/> <p>@nathanf</p></div><h1>1987</h1><h5>F O L L O W E R S</h5>
            <div className='percentage'><img src={up} alt = "up"/><h6>12 Today</h6></div>
            </div>
          </div>
          

          <div className='block'>
            <div className='innerBlock'>
            <div className='tag'><img src= {twitter}  alt = "icon"/><p>@nathanf</p></div><h1>1044</h1><h5>F O L L O W E R S</h5><div className='percentage'><img src={up} alt = "up"/><h6>99 Today</h6></div>
            </div>
          </div>

          <div className='block'>
            <div className='innerBlock'>
            <div className='tag'><img src= {instagram}  alt = "icon"/> <p>@nialnathanf</p></div><h1>11k</h1><h5>F O L L O W E R S</h5><div className='percentage'><img src={up} alt = "up"/><h6>1099 Today</h6></div>
            </div>
          </div>

          <div className='block'>
            <div className='innerBlock'>
            <div className='tag'><img src= {youtube}  alt = "icon"/> <p>Nathan F.</p></div><h1>8239</h1><h5>S U B S C R I B E R S</h5><div className='percentage red'><img src={down} alt = "up"/><h6>144 Today Change</h6></div>
            </div>
          </div>

        </div>

        <div className='secondTitle'>
          <p>Overview - Today</p>
        </div>
        <div className = "secondRow">
            <div className = "block">
              <div className='pageViews'><p>Page Views</p><img src= {facebook}  alt = "icon"/> </div>
              <div className='stats'><p>87</p>
                <div className='percentage'>
                <img src= {up} alt= "up"/><p>3%</p></div>
              </div>
            </div>
            

            <div className = "block">
              <div className='pageViews'>
                <p>Likes</p>
                <img src= {facebook}  alt = "icon"/> 
              </div>
              <div className='stats'>
                <p>52</p>
              <div className='percentage red'>
                <img src= {down} alt= "up"/><p>2%</p>
              </div>
            </div>
            </div>
                         

            <div className = "block">
              <div className='pageViews'><p>Likes</p><img src= {instagram}  alt = "icon"/> </div>
              <div className='stats'><p>5462</p>
              <div className='percentage'><img src= {up} alt= "up"/><p>2257%</p>
              </div>
              </div>
            </div>
            
            

            <div className = "block">
              <div className='pageViews'>
                <p>Profile Views</p>
                <img src= {instagram}  alt = "icon"/>
              </div>
            <div className='stats'>
              <p>52k</p> 
              <div className='percentage'>
                <img src= {up} alt= "up"/>
                <p>1375%</p>
              </div>
            </div>
            </div>
            
        

      
            <div className = "block">
              <div className='pageViews'><p>Likes</p><img src= {twitter}  alt = "icon"/> </div>
              <div className='stats'><p>507</p><div className='percentage'>
                <img src= {up} alt= "up"/><p>303%</p></div>
            </div>
            </div>

            <div className = "block">
              <div className='pageViews'><p>Page Views</p><img src= {twitter}  alt = "icon"/> </div>
              <div className='stats'><p>107</p><div className='percentage red'>
                <img src= {down} alt= "down"/>
                <p>553%</p></div>
            </div>
            </div>

            <div className = "block">
              <div className='pageViews'><p>Profile Views</p><img src= {youtube}  alt = "icon"/> </div>
              <div className='stats'><p>52k</p><div className='percentage'>
                <img src= {up} alt= "up"/><p>19%</p></div>
            </div>
            </div>

            <div className = "block">
              <div className='pageViews'><p>Page Views</p><img src= {youtube}  alt = "icon"/> </div>
              <div className='stats'><p>1407</p>
              <div className='percentage red'>
                <img src= {up} alt= "up"/>
                <p>12%</p></div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
