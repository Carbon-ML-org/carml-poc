import GoogleMapReact from "google-map-react";

/**
 * UIMap
 * -----------------------------------------------------------
 */
export default function UIMap({ zoom = 8, lat, lng }) {
  return (
    <div style={{ height: "130px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
        defaultCenter={{ lat, lng }}
        defaultZoom={zoom}
      />
    </div>
  );
}
