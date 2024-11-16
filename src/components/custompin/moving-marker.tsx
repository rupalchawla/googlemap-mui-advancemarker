import React, { useEffect, useState } from "react";
import { Marker, AdvancedMarker } from "@vis.gl/react-google-maps";

export const MovingMarker = () => {
  const [position, setPosition] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const t = performance.now();
      const lat = Math.sin(t / 2000) * 5;
      const lng = Math.cos(t / 3000) * 5;

      setPosition({ lat, lng });
    }, 300);

    return () => clearInterval(interval);
  });

  // return <Marker position={position}></Marker>;
  return (
  <AdvancedMarker position={position} title={"AdvancedMarker moving"}>
    <div style={{ color: "red", fontSize: 24 }}>✈️</div>
  </AdvancedMarker>

    );
};
