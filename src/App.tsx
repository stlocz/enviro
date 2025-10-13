import Map from "ol/map";
import "./App.css";
import { Feature, View } from "ol";
import { OSM } from "ol/source";
import TileLayer from "ol/layer/Tile";
import { useEffect } from "react";
import { fromLonLat } from "ol/proj";
import { Polygon } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";

function App() {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([19.462294119009783, 52.071228530217766]),
        zoom: 6.125,
      }),
      controls: [],
      interactions: [],
    });

    const extent = map.getView().calculateExtent(map.getSize());
    const [minX, minY, maxX, maxY] = extent;

    const mapBottomLeft = [minX, minY];
    const mapBottomRight = [maxX, minY];
    const mapTopRight = [maxX, maxY];
    const mapTopLeft = [minX, maxY];

    const coverPolygon = [mapBottomLeft, mapBottomRight, mapTopRight, mapTopLeft, mapBottomLeft];

    const maskPolygon = new Polygon([coverPolygon]);
    const maskFeature = new Feature(maskPolygon);

    const maskLayer = new VectorLayer({
      source: new VectorSource({
        features: [maskFeature],
      })
      ,
      style: new Style({
        fill: new Fill({color: 'rgba(255, 255, 255, 1)'}),
        stroke: new Stroke({color: '#000', width: 0})
      })
    })


    map.addLayer(maskLayer);

    return () => map.setTarget(undefined);


  }, []);

  return (
    <>
      <h1>Enviro</h1>
      <div id="map" style={{ width: "100vw", height: "800px" }}></div>
    </>
  );
}

export default App;
