
import React, { useState, useEffect, createRef } from "react";
import { Loader, Loader2, Map } from 'lucide-react';
import PlaceDetail from "./PlaceDetail";

const List = ({ places, childClicked, isLoading, type, setType, setRating, rating }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <div className="p-6 h-screen overflow-y-auto">
      <h4 className="text-2xl font-bold mb-6 text-gray-800">
        Restaurants, Hotels & Attractions around you
      </h4>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="animate-spin text-primary-900" size={30} />
        </div>
      ) : (
        <>
          {/* filters */}
          <div className=" w-full flex items-center gap-2 mb-5">
            {/* filter by type */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </div>

            {/* filter by rating */}
            <div className=" w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value={0}>All</option>
                <option value={3}>Above 3.0</option>
                <option value={4}>Above 4.0</option>
                <option value={4.5}>Above 4.5</option>
              </select>
            </div>
          </div>

          {/* PlaceDetail */}
          <div className="space-y-4">
            {places?.map((place, i) => (
              <div key={i}>
                <PlaceDetail
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  ref={elRefs[i]}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
