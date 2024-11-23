/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  AdvancedMarker,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";
import { Circle } from "./circle";
import config from "../../../config";

type Poi = { key: string; location: google.maps.LatLngLiteral };
const locations: Poi[] = [
  { key: "operaHouse", location: { lat: -33.8567844, lng: 151.213108 } },
  { key: "tarongaZoo", location: { lat: -33.8472767, lng: 151.2188164 } },
  { key: "manlyBeach", location: { lat: -33.8209738, lng: 151.2563253 } },
  { key: "hyderPark", location: { lat: -33.8690081, lng: 151.2052393 } },
  { key: "theRocks", location: { lat: -33.8587568, lng: 151.2058246 } },
  { key: "circularQuay", location: { lat: -33.858761, lng: 151.2055688 } },
  { key: "harbourBridge", location: { lat: -33.852228, lng: 151.2038374 } },
  { key: "kingsCross", location: { lat: -33.8737375, lng: 151.222569 } },
  { key: "botanicGardens", location: { lat: -33.864167, lng: 151.216387 } },
  { key: "museumOfSydney", location: { lat: -33.8636005, lng: 151.2092542 } },
  { key: "maritimeMuseum", location: { lat: -33.869395, lng: 151.198648 } },
  { key: "kingStreetWharf", location: { lat: -33.8665445, lng: 151.1989808 } },
  { key: "aquarium", location: { lat: -33.869627, lng: 151.202146 } },
  { key: "darlingHarbour", location: { lat: -33.87488, lng: 151.1987113 } },
  { key: "barangaroo", location: { lat: -33.8605523, lng: 151.1972205 } },
];
const MAP_ID = config.MAP_ID;

const MultiplePin = () => {
  const DEFAULT_LAT = -33.860664;
  const DEFAULT_LNG = 151.209400;
  const [lat, setLat] = React.useState(DEFAULT_LAT);
  const [lng, setLng] = React.useState(DEFAULT_LNG);
  const [zoom, setZoom] = React.useState(13);

  //Get longitude and latitude from the users current location
  //If the user does not allow location access, the default location is used
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setZoom(15);
      });
    }
  });
  


  const callBack = (lat?: number, lng?: number) => {
    setLat(lat ?? DEFAULT_LAT);
    setLng(lng ?? DEFAULT_LNG);
    setZoom(15);
  };

  return (
    <Map
      defaultZoom={zoom}
      defaultCenter={{ lat: lat, lng: lng }}
      center={{ lat: lat, lng: lng }}
      zoom={zoom}
      mapId={MAP_ID}
      onCameraChanged={(ev: MapCameraChangedEvent) =>
        console.log(
          "camera changed:",
          ev.detail.center,
          "zoom:",
          ev.detail.zoom
        )
      }
    >
      <Circle
        center={{ lat: lat, lng: lng }}
        radius={500}
        options={{
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }}  
      />
      <PoiMarkers pois={locations} callBack={callBack} />
    </Map>
  );
};

const PoiMarkers = ({pois, callBack}: { pois: Poi[], callBack: (lat?: number, lng?: number) => void }) => {
  return (
    <>
      {pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          clickable={true}
          onClick={() => callBack(poi.location.lat, poi.location.lng)}
        >
          <Pin
            background={"#f44336"}
            glyphColor={"#ffffff"}
            borderColor={"#ffffff"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

// const root = createRoot(document.getElementById("app"));
// root.render(<App />);

export default MultiplePin;
