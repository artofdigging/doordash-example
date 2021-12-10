import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import BottomSheet from './components/BottomSheet';
import TextExample from './components/TextExample';
import BlackOverlay from './components/BlackOverlay';

import { useState } from 'react';

function App() {
  const [isVisable, setVisability] = useState(false);

  const handleClose = event => {
    event.stopPropagation();
    setVisability(!isVisable)
    console.log('click close')
  };

  return (
    
    <div className="App">

      <div className="App-header" style={{color: isVisable ? '#ffffff' : '#000000'}}>
        <h1>Building a `BottomSheet` component</h1>
        <p>Click below to show the BottomSheet and play with it's behavior!</p>
        <Button text="Toggle BottomSheet" clickFunc={() => {setVisability(!isVisable)}}/>
        <Button text="Toggle Debug Information" clickFunc={() => console.log('Debug')}/>
      </div>
      
      {isVisable && <BlackOverlay />} 

      <BottomSheet 
        isVisable={isVisable}
        close={handleClose}
        title="My Custom Title"
        subTitle="Some more information here"
      >
        <TextExample />
      </BottomSheet>
    </div>
  );
}

export default App;
