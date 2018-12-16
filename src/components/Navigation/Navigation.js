import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    isSignedIn
    ? <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <input
          onClick={() => onRouteChange('signout')}
          className="f3 link dim black pa3 pointer bg-transparent b--transparent underline"
          type="submit"
          value="Sign Out"
        />
      </nav>
    : <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <input
          onClick={() => onRouteChange('signin')}
          className="f3 link dim black pa3 pointer bg-transparent b--transparent underline"
          type="submit"
          value="Sign In"
        />
        <input
          onClick={() => onRouteChange('register')}
          className="f3 link dim black pa3 pointer bg-transparent b--transparent underline"
          type="submit"
          value="Register"
        />
      </nav>
    )
  
}

export default Navigation;