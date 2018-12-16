import React from 'react';
import Tilt from 'react-tilt';
import tentacle from './tentacles-96.png'
import './Logo.css';
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt shadow-2" options={{ max : 55 }} style={{ height: 96, width: 96 }} >
        <div className="Tilt-inner">
          <img src={tentacle} alt="logo"/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;