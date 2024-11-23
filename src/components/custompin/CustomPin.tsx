import React from "react";

import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";

import ControlPanel from "./control-panel";
import { MovingMarker } from "./moving-marker";
import { MarkerWithInfowindow } from "./MarkerWithInfowindow";
import config from "../../../config";
import HomeIcon from "@mui/icons-material/Home";
import { InfoWindowMUICard } from "./InfoWindowMUICard";
import { OnClickOpenDialog } from "./OnClickOpenDialog";

const API_KEY = config.API_KEY;
const MAP_ID = config.MAP_ID;

const CustomPin = () => {
  const map = useMap();

  return (
    <>
      <Map
        mapId={MAP_ID}
        defaultZoom={3}
        maxZoom={17}
        minZoom={3}
        defaultCenter={{ lat: 12, lng: 0 }}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        {/* Marker with click event */}
        <OnClickOpenDialog />

        {/* advanced marker with customized pin */}
        <AdvancedMarker
          position={{ lat: 20, lng: 10 }}
          title={"AdvancedMarker with customized pin."}
        >
          <Pin
            background={"#22ccff"}
            borderColor={"#1e89a1"}
            glyphColor={"#0f677a"}
          ></Pin>
        </AdvancedMarker>

        {/* advanced marker MUI Home Icon */}
        <AdvancedMarker
          position={{ lat: 15, lng: 20 }}
          title={"AdvancedMarker with customized pin."}
        >
          <Pin background={"#22ccff"} borderColor={"#ffffff"} scale={1.4}>
            {/* children are rendered as 'glyph' of pin */}
            <HomeIcon style={{ fontSize: 24, color: "#ffffff" }} />
          </Pin>
        </AdvancedMarker>

        {/* advanced marker with Green circle */}
        <AdvancedMarker
          position={{ lat: 30, lng: 10 }}
          title={"AdvancedMarker with custom html content."}
        >
          <div
            style={{
              width: 16,
              height: 16,
              position: "absolute",
              top: 0,
              left: 0,
              background: "#1dbe80",
              border: "2px solid #0e6443",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </AdvancedMarker>

        {/* simple infowindow without Pin */}
        <InfoWindowMUICard />

        {/* continously updated marker */}
        <MovingMarker />

        {/* simple stateful infowindow */}
        <MarkerWithInfowindow />
      </Map>
      <ControlPanel />
    </>
  );
};

export default CustomPin;
