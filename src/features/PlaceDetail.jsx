import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import StarRating from './StarRating';

const PlaceDetail = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
      <img
        className="w-full h-[350px] object-cover"
        src={place?.photo ? place?.photo?.images?.large.url : 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        alt={place.name}
      />

      <div className="p-4">
        <h5 className="text-xl font-semibold mb-3">{place.name}</h5>

        <div className="flex justify-between items-center mb-3">
          <StarRating value={Number(place.rating)} readOnly />
          <p className="text-sm text-gray-600">Out of {place?.num_reviews} reviews</p>
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Price</span>
          <span className="text-sm text-gray-700">₦{place?.price}</span>
        </div>

        <div className="flex justify-between mb-3">
          <span className="text-sm font-medium">Ranking</span>
          <span className="text-sm text-gray-700">{place?.ranking}</span>
        </div>

        {place?.awards?.map((award, index) => (
          <div key={index} className="flex justify-between items-center my-2">
            <img src={award.images.small} alt='' className="h-8" />
            <span className="text-xs text-gray-600">{award.display_name}</span>
          </div>
        ))}

        <div className="flex flex-wrap gap-2 my-3">
          {place?.cuisine?.map(({ name }) => (
            <span key={name} className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border border-gray-300">
              {name}
            </span>
          ))}
        </div>

        {place?.address && (
          <p className="text-sm text-gray-600 flex items-center gap-1 mt-3">
            <MapPin size={16} className="text-gray-500" />
            {place.address}
          </p>
        )}

        {place?.phone && (
          <p className="text-sm text-gray-600 flex items-center gap-1 mt-2">
            <Phone size={16} className="text-gray-500" />
            {place.phone}
          </p>
        )}

        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-primary-900 hover:bg-primary-800 rounded transition-colors"
            onClick={() => window.open(place.web_url, '_blank')}
          >
            View on Tripadvisor
          </button>

          <button
            className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-primary-900 hover:bg-primary-800 rounded transition-colors"
            onClick={() => window.open(place.website, '_blank')}
          >
            Visit Website
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetail
