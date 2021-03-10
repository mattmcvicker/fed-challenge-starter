import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card"
import { ThemeProvider, createMuiTheme, formatMs } from '@material-ui/core/styles';
// Image imports
import LakeInniscarraThumb from "./assets/lake-inniscarra-thumb.jpg";
import LakeInniscarraTrainer from "./assets/lake-inniscarra-trainer.jpg";
import PerformanceSeriesThumb from "./assets/performance-series-thumb.jpg";
import PerformanceSeriesTrainer from "./assets/performance-series-trainer.jpg";
import SlowPullsThumb from "./assets/slow-pulls-thumb.jpg";
import SlowPullsTrainer from "./assets/slow-pulls-trainer.jpg";
import TwentyMinutesThumb from "./assets/20-minutes-to-toned-thumb.jpg";
import TwentyMinutesTrainer from "./assets/20-minutes-to-toned-trainer.jpg";
import CharlesRaceThumb from "./assets/charles-race-thumb.jpg";
import CharlesRaceTrainer from "./assets/charles-race-trainer.jpg";
import FullBodyThumb from "./assets/full-body-hiit-thumb.jpg";
import FullBodyTrainer from "./assets/full-body-hiit-trainer.jpg";
import RiverThumb from "./assets/kafue-river-thumb.jpg";
import RiverTrainer from "./assets/kafue-river-trainer.jpg";
import ShredThumb from "./assets/shred-and-burn-thumb.jpg";
import ShredTrainer from "./assets/shred-and-burn-trainer.jpg";

function App() {
  const font = "'Open Sans', sans-serif";;
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Open sans',
        'sans-serif'
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App"
        style={{
          display: "flex",
          flexFlow: "row wrap",
          width: "1200px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ paddingBottom: 15 }}>
          <Card
            thumbSrc={LakeInniscarraThumb}
            trainerIcon={LakeInniscarraTrainer}
            cardTitle={"Lake Inniscarra, Ireland—Pyramid"}
            time={"30:53"}
            meters={"6,248 M"}
            viewDetails={true}
          >
            {/* in future, pass in data for view details rather than boolean */}
          </Card>
        </div>
        <Card
          thumbSrc={PerformanceSeriesThumb}
          trainerIcon={PerformanceSeriesTrainer}
          cardTitle={"Performance Series"}
          viewDetails={false}
          workouts={9}
        >
        </Card>
        <Card
          thumbSrc={SlowPullsThumb}
          trainerIcon={SlowPullsTrainer}
          cardTitle={"Slow Pulls and Fast Intervals"}
          time={"44:13"}
          meters={"9,948 M"}
          viewDetails={false}>
          {/* in future, pass in data for view details rather than boolean */}
        </Card>
        <Card
          thumbSrc={TwentyMinutesThumb}
          trainerIcon={TwentyMinutesTrainer}
          cardTitle={"20 Minutes to Toned"}
          viewDetails={false}
          workouts={12}
        >
        </Card>
        <Card
          thumbSrc={CharlesRaceThumb}
          trainerIcon={CharlesRaceTrainer}
          cardTitle={"Charles Race, Boston, Massachusetts"}
          time={"36:22"}
          meters={"8,648 M"}
          viewDetails={false}>
        </Card>
        <Card
          thumbSrc={FullBodyThumb}
          trainerIcon={FullBodyTrainer}
          cardTitle={"Full-Body HIIT Series"}
          viewDetails={false}
          workouts={12}
        >
        </Card>
        <Card
          thumbSrc={RiverThumb}
          trainerIcon={RiverTrainer}
          cardTitle={"Kafue River, Zambia—Power Stroke Pyramid"}
          time={"22:22"}
          meters={"4,660 M"}
          viewDetails={false}>
        </Card>
        <Card
          thumbSrc={ShredThumb}
          trainerIcon={ShredTrainer}
          cardTitle={"Shred & Burn Series"}
          viewDetails={false}
          workouts={16}
        >
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
