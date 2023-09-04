import React from 'react';
import './App.css';
import LoginScreen from './components/login';
import {ComponentProps} from './model/ComponentProps';

const App: React.FC<ComponentProps> = ({...props}) => {
  return (
    <React.Fragment>
      <LoginScreen {...props} />
    </React.Fragment>
  );
}

export default App;
