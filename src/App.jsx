import React, { useState } from 'react';
import ObjectDescription from './components/objectDescription.jsx';
import Module from './components/module.jsx';
import TextInpBox from './components/textInpBox.jsx';
import './scss/css/origin.css';
import './scss/css/style.css';

function App() {
  const [rotationAngle, setRotationAngle] = useState({ x: 0, y: 0, z: 0 });
  const [object, setObject] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <ObjectDescription propsName={object} descriptionContent={description} />
      <Module
        rotationAngle={rotationAngle}
        setRotationAngle={setRotationAngle}
        setObjectChildModule={setObject}
        setDescriptionChildModule={setDescription}
      />
    </>
  );
}

export default App;
