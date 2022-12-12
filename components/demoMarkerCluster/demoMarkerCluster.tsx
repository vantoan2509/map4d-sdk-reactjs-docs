import React from "react"
import { MFMap, MFMarker, MFMarkerCluster } from "react-map4d-map"

const locations = [
  [106.754497, 10.769589],
  [106.704497, 10.769589],
  [106.404497, 10.769589],
  [106.204497, 10.749589]
]

const DemoMarkerCluster = () => {
  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <MFMap
          options={{
            center: { lat: 10.845502, lng: 106.523784 },
            zoom: 9,
            controls: true
          }}
          accessKey={'d69ab3c4b70818de546a1b1bb15aeaa7'}
          version={"2.4"} >
          <MFMarkerCluster
            minZoom={0}
            maxZoom={10}
            radius={150}
            zoomOnClick
          >
            {
              locations?.map((loc, index) => {
                return (
                  <MFMarker position={loc} label={index.toString()} key={index} />
                )
              })
            }
          </MFMarkerCluster>

        </MFMap>
      </div>
    </>
  )
}

DemoMarkerCluster.propTypes = {
};

export default DemoMarkerCluster