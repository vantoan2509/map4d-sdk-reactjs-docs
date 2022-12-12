import React from "react"
import { MFDataLayer, MFMap } from "react-map4d-map";

let geoJsonStr = `{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        "fill": "#ff0000",
        "fill-opacity": 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              106.62574768066405,
              10.83802680397086
            ],
            [
              106.6278076171875,
              10.814421958289003
            ],
            [
              106.66248321533203,
              10.814421958289003
            ],
            [
              106.69750213623047,
              10.840724382155452
            ],
            [
              106.69132232666016,
              10.845107894830463
            ],
            [
              106.64051055908203,
              10.865338658847957
            ],
            [
              106.62574768066405,
              10.83802680397086
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#0000ff",
        "stroke-width": 5,
        "stroke-opacity": 1
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            106.68067932128905,
            10.869721810427496
          ],
          [
            106.64634704589844,
            10.801269881015028
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.68823242187499,
          10.852947478433613
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.6926097869873,
          10.824538548432923
        ]
      }
    }
  ]
}`

const DemoDataLayer = () => {
  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <MFMap
          options={{
            center: { lat: 10.836719, lng: 106.656162 },
            zoom: 13,
            controls: true
          }}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
          version={"2.4"} >
          <MFDataLayer
            geoJsonString={geoJsonStr}
          />
        </MFMap>
      </div>
    </>
  )
}

DemoDataLayer.propTypes = {
};

export default DemoDataLayer