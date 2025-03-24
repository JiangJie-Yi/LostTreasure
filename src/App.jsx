import React, { useState } from 'react';
import Message from './components/message.jsx';
import Module from './components/module.jsx';
import TextInpBox from './components/textInpBox.jsx';
import './scss/css/origin.css';
import './scss/css/style.css';

function App() {
  const [rotationAngle, setRotationAngle] = useState({ x: 0, y: 0, z: 0 });
  const [description, setDescription] = useState('');
  const [object, setObject] = useState('');

  return (
    <>
      <Message descriptionCt={description} objectName={object} />
      <Module
        rotationAngle={rotationAngle}
        setRotationAngle={setRotationAngle}
        setObject={setObject}
        setDescription={setDescription}
      />
      {/* <TextInpBox /> */}
    </>
  );
}

export default App;
