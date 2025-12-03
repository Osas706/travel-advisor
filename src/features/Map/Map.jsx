import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapPin } from 'lucide-react';
import StarRating from '../StarRating';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }) => {
  const isDesktop = window.innerWidth >= 768;

  return (
    <div className="h-[calc(100vh-12rem)] md:h-full w-full md:p-4 bg-white rounded-lg border border-gray-300">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoonControl: true, }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <MapPin
                className="text-red-600"
                size={20}
                fill="#fca5a5"
              />
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-2 w-32 cursor-pointer hover:shadow-xl transition-shadow">
                <p className="text-xs font-medium text-gray-800 mb-1 truncate">
                  {place?.name}
                </p>

                <img
                  className="w-full h-16 object-cover rounded mb-1"
                  src={place?.photo ? place?.photo?.images?.large.url : 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                  alt=''
                />

                <StarRating size={12} value={Number(place.rating)} readOnly />
              </div>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
