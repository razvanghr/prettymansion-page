import GoogleMapReact from "google-map-react";

function Map() {
  const defaultProps = {
    center: {
      lat: 46.84784446243363,
      lng: 21.714749552030028,
      //   46.84784446243363, 21.714749552030028
    },
    zoom: 17,
  };
  return (
    // Important! Always set the container height explicitly
    <div className="contact-map" style={{ height: "500px", width: "80%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
