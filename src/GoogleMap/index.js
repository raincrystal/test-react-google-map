import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

const GoogleMap = ({google}) => {
  const addresses = [
    { lat: 37.761326, lng: -122.424681 },
    { lat: 37.764556, lng: -122.426643 },
    { lat: 37.768425, lng: -122.420215 },
    { lat: 37.767518, lng: -122.415952 },
    { lat: 37.765122, lng: -122.4103 },
    { lat: 37.764609, lng: -122.410264 },
    { lat: 37.764465, lng: -122.409145 },
    { lat: 37.764508, lng: -122.408136 },
    { lat: 37.766544, lng: -122.408485 },
    { lat: 37.763681, lng: -122.408139 },
    { lat: 37.764085, lng: -122.411032 },
    { lat: 37.766515, lng: -122.41082 }
  ];

  return (
    <Map
      google={google}
      zoom={14}
      initialCenter={{
        lat: 37.773972,
        lng: -122.431297
      }}
    >
      {
        addresses.map(address => (
          <Marker
            position={{
              lat: address.lat,
              lng: address.lng
            }}
          />
        ))
      }
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyPqAkq2s9Z75QzarTAQHSHTxaNnVDqeE'
})(GoogleMap)
