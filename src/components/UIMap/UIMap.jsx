import GoogleMapReact from "google-map-react";

/**
 * UIMap
 * -----------------------------------------------------------
 */
export default function UIMap({ zoom = 8, lat, lng }) {
  return (
    <div style={{ height: "130px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA4Pz0dq3mnJp0cTkgXCznyWxDOMuVMXRk" }}
        center={{ lat, lng }}
        defaultZoom={zoom}
      />
    </div>
  );
}
