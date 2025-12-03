import React, { useEffect, useState } from 'react';

import Header from './features/Header';
import List from './features/List';
import Map from './features/Map/Map';

import { getPlacesData } from './api';
import Footer from './features/Footer';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  // Get user's current geolocation on first load
  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  // Filter places when rating changes
  useEffect(() => {
    // Only keep places with rating higher than selected rating
    const filteredPlaces = places.filter((place) => place.rating > rating);

    // Update filtered list
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  // Fetch places data when map bounds or place type changes
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      getPlacesData(type, bounds?.sw, bounds?.ne)
        .then((data) => {
          // Only keep places with both a name & at least 1 review
          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));

          setFilteredPlaces([]);
          setIsLoading(false);
        });
    }
  }, [type, bounds]);

  return (
    <div className="min-h-screen bg-gray-100 space-y-3">
      <Header setCoordinates={setCoordinates} />

      <div className="container mx-auto flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full md:w-1/3">
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </div>

        <div className="w-full md:w-2/3">
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
