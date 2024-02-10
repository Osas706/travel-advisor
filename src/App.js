import React, { useEffect, useState} from 'react';

import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

import { getPlacesData } from './api';

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCordinates] = useState({});
    const [bounds, setBounds] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: { latitude, longtitude} }) => {
           setCordinates({ lat: latitude, lng: longtitude})
        })
    }, []);

    useEffect(() => {
      console.log(coordinates, bounds);

      getPlacesData()
        .then((data) => {
            console.log(data);
            setPlaces(data);
        })
    }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />

      <Header />

      <Grid container spacing={3} style={{ width: '100%'}}>
         <Grid item xs={12} md={4}>
            <List />
         </Grid>

         <Grid item xs={12} md={8}>
            <Map 
              setCordinates={setCordinates}
              setBounds={setBounds}
              coordinates={coordinates}
            />
         </Grid>
      </Grid>
    </>
  )
}

export default App
