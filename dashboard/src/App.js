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
    <div className= {`App ${isLight ? 'light' : ''}`}>
      <div className='container'>
        <div className = 'Title'>
          <div><h1 className={`${isLight ? 'light' : ''}`}>Social</h1><h5>Total Followers</h5>
          </div>
          <div className='toggle'>
            <p className={`theme ${isLight ? 'light' : ''}`}>Dark Mode</p>
            <div className = {`outerDiv ${isLight ? 'light' : ''}`} onClick = {handleToggle} >
            <div className={`circle ${isLight ? 'light' : ''}`} ></div>
            </div>
          </div>
        </div>

        <div className = "firstRow">
          
          <div className={`block ${isLight ? 'light' : ''}`}>
            <div className={`innerBlock ${isLight ? 'light' : ''}`}>
            <div className={`tag ${isLight ? 'light' : ''}`}><img src= {facebook}  alt = "icon"/> <p>@nathanf</p></div><h1 className={`${isLight ? 'light' : ''}`}>1987</h1><h5>F O L L O W E R S</h5>
            <div className='percentage'><img src={up} alt = "up"/><h6>12 Today</h6></div>
            </div>
          </div>
          

          <div className={`block ${isLight ? 'light' : ''}`}>
            <div className={`innerBlock ${isLight ? 'light' : ''}`}>
            <div className={`tag  ${isLight ? 'light' : ''}`}><img src= {twitter}  alt = "icon"/><p>@nathanf</p></div><h1 className={`${isLight ? 'light' : ''}`}>11044</h1><h5>F O L L O W E R S</h5><div className='percentage'><img src={up} alt = "up"/><h6>99 Today</h6></div>
            </div>
          </div>

          <div className={`block ${isLight ? 'light' : ''}`}>
            <div className={`innerBlock ${isLight ? 'light' : ''}`}>
            <div className={`tag  ${isLight ? 'light' : ''}`}><img src= {instagram}  alt = "icon"/> <p>@nialnathanf</p></div><h1 className={`${isLight ? 'light' : ''}`}>11k</h1><h5>F O L L O W E R S</h5><div className='percentage'><img src={up} alt = "up"/><h6>1099 Today</h6></div>
            </div>
          </div>

          <div className={`block ${isLight ? 'light' : ''}`}>
            <div className={`innerBlock ${isLight ? 'light' : ''}`}>
            <div className={`tag  ${isLight ? 'light' : ''}`}><img src= {youtube}  alt = "icon"/> <p>Nathan F.</p></div><h1 className={`${isLight ? 'light' : ''}`}>8239</h1><h5>S U B S C R I B E R S</h5><div className='percentage red'><img src={down} alt = "up"/><h6>144 Today Change</h6></div>
            </div>
          </div>

        </div>

        <div className='secondTitle'>
          <h5 >Overview - Today</h5>
        </div>
        <div className = "secondRow">

        <div className={`oblock ${isLight ? 'light' : ''}`}>
        <div className={`sblock ${isLight ? 'light' : ''}`}>
              <div className={`pageViews ${isLight ? 'light' : ''}`}><p>Page Views</p><img src= {facebook}  alt = "icon"/> </div>
              <div className={`stats ${isLight ? 'light' : ''}`}><p>87</p>
                <div className='percentage'>
                <img src= {up} alt= "up"/><p>3%</p></div>
              </div>
            </div>
            </div>
            
            <div className={`oblock ${isLight ? 'light' : ''}`}>
              <div className={`sblock ${isLight ? 'light' : ''}`}>
              <div className={`pageViews ${isLight ? 'light' : ''}`}>
                <p>Likes</p>
                <img src= {facebook}  alt = "icon"/> 
              </div>
              <div className={`stats ${isLight ? 'light' : ''}`}>
                <p>52</p>
                <div className='percentage red'>
                  <img src= {down} alt= "up"/><p>2%</p>
                </div>
              </div>
            </div>
            </div>
                         
            <div className={`oblock ${isLight ? 'light' : ''}`}>
            <div className={`sblock ${isLight ? 'light' : ''}`}>
              <div className={`pageViews ${isLight ? 'light' : ''}`}><p>Likes</p><img src= {instagram}  alt = "icon"/> </div>
              <div className={`stats ${isLight ? 'light' : ''}`}><p>5462</p>
              <div className='percentage'><img src= {up} alt= "up"/><p>2257%</p>
              </div>
              </div>
            </div>
            </div>
            
            
            <div className={`oblock ${isLight ? 'light' : ''}`}>
            <div className={`sblock ${isLight ? 'light' : ''}`}>
              <div className={`pageViews ${isLight ? 'light' : ''}`}>
                <p>Profile Views</p>
                <img src= {instagram}  alt = "icon"/>
              </div>
            <div className={`stats ${isLight ? 'light' : ''}`}>
              <p>52k</p> 
              <div className='percentage'>
                <img src= {up} alt= "up"/>
                <p>1375%</p>
              </div>
            </div>
            </div>
            </div>
            
        

            <div className={`oblock ${isLight ? 'light' : ''}`}>
              <div className={`sblock ${isLight ? 'light' : ''}`}>
                <div className={`pageViews ${isLight ? 'light' : ''}`}><p>Likes</p><img src= {twitter}  alt = "icon"/> </div>
                <div className={`stats ${isLight ? 'light' : ''}`}><p>507</p><div className='percentage'>
                <img src= {up} alt= "up"/><p>303%</p></div>
                </div>
              </div>
            </div>

            <div className={`oblock ${isLight ? 'light' : ''}`}>
            <div className={`sblock ${isLight ? 'light' : ''}`}>
              <div className={`pageViews ${isLight ? 'light' : ''}`}><p>Page Views</p><img src= {twitter}  alt = "icon"/> </div>
              <div className={`stats ${isLight ? 'light' : ''}`}><p>107</p><div className='percentage red'>
                <img src= {down} alt= "down"/>
                <p>553%</p></div>
            </div>
            </div>
            </div>

            <div className={`oblock ${isLight ? 'light' : ''}`}>
            <div className={`sblock ${isLight ? 'light' : ''}`}>
              <div className={`pageViews ${isLight ? 'light' : ''}`}><p>Profile Views</p><img src= {youtube}  alt = "icon"/> </div>
              <div className={`stats ${isLight ? 'light' : ''}`}><p>52k</p><div className='percentage'>
                <img src= {up} alt= "up"/><p>19%</p></div>
            </div>
            </div>
            </div>
            
            <div className={`oblock ${isLight ? 'light' : ''}`}>
            <div className={`sblock ${isLight ? 'light' : ''}`}> 
              <div className={`pageViews ${isLight ? 'light' : ''}`}><p>Page Views</p><img src= {youtube}  alt = "icon"/> </div>
              <div className={`stats ${isLight ? 'light' : ''}`}><p>1407</p>
              <div className='percentage red'>
                <img src= {up} alt= "up"/>
                <p>12%</p></div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
