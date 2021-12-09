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

      <div className="App-header">
        <h1>Building a `BottomSheet` component</h1>
        <p>Click below to show the BottomSheet and play with it's behavior!</p>
        <Button text="Toggle BottomSheet" clickFunc={() => {setVisability(!isVisable)}}/>
        <Button text="Toggle Debug Information" clickFunc={() => console.log('Debug')}/>
      </div>
      



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
