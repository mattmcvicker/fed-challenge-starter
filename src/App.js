import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card"


// Image imports
import LakeInniscarraThumb from "./assets/lake-inniscarra-thumb.jpg";
import LakeInniscarraTrainer from "./assets/lake-inniscarra-trainer.jpg";

function App() {
  return (
    <div className="App">
      <Card
        thumbSrc={LakeInniscarraThumb}
        trainerIcon={LakeInniscarraTrainer}
        cardTitle={"Lake inniscarra, Ireland—Pyramid"}>
      </Card>
    </div>
  );
}

export default App;
