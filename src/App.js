import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import BottomSheet from './components/BottomSheet';
import TextExample from './components/TextExample';
import BlackOverlay from './components/BlackOverlay';

import { useState } from 'react';

function App() {

  const [isVisable, setVisability] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <div className="App">
      <Button text="Toggle BottomSheet" clickFunc={() => {setVisability(!isVisable)}}/>
      {isVisable && <BlackOverlay />} 
      <BottomSheet 
        isVisable={isVisable}
        isCollapsed={isCollapsed}
        close={() => {setVisability(!isVisable)}}
      >
        <TextExample />
      </BottomSheet>
    </div>
  );
}

export default App;
