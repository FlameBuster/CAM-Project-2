import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Location() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAAVJb2xY-Pl6_fXaW3bGLpzLuWDMxopLw",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 18.5840315, lng: 73.8373092 }), []);

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}
