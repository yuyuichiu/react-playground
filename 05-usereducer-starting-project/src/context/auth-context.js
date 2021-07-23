import React from 'react';

// Context returns an object that contain a component
const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;