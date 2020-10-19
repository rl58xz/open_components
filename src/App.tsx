import React from 'react';
import logo from './logo.svg';
import Button ,{ButtonSize,ButtonType}from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/munuitem';

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
        
        <Menu>
          <MenuItem index={0}>sss</MenuItem>
          <MenuItem index={1}>aaa</MenuItem>
          <MenuItem index={2}>bbb</MenuItem>
        </Menu>

        <Menu mode='vertical'>
          <MenuItem index={0}>sss</MenuItem>
          <MenuItem index={1}>aaa</MenuItem>
          <MenuItem index={2}>bbb</MenuItem>
        </Menu>
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
