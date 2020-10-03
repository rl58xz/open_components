import React from 'react';
import logo from './logo.svg';
import Button ,{ButtonSize,ButtonType}from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Danger}>aaa</Button>
        <Button btnType={ButtonType.Primary}>aaa</Button>
        <Button btnType={ButtonType.Default}>aaa</Button>
        <Button btnType={ButtonType.Link}>aaa</Button>

        <Button btnType={ButtonType.Link} size={ButtonSize.Large}>aaa</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small}>aaa</Button>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
