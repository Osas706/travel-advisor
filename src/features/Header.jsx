import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Footprints, Navigation, Search } from 'lucide-react';

const Header = ({ setCoordinates }) => {
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng })
  }

  return (
    <header className="bg-primary-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="flex items-center gap-1 text-2xl font-bold text-white">
          <Footprints className="w-7 h-7 text-red-500" />
          PathGuide
        </h1>


        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
          <h2 className="text-xs md:text-sm text-white font-semibold">
            Explore new places
          </h2>

          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>

              <input
                type="text"
                placeholder="Search ..."
                className="pl-10 px-4 py-2 max-w-sm md:w-80 rounded-md border border-gray-300 focus:outline-none outline-none focus:border-transparent"
              />
            </div>
          </Autocomplete>
        </div>
      </div>
    </header>
  );
};

export default Header;
