import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import linesGeoJsonUrl from '../../../assets/linie.geojson?url'
const linesSource = new VectorSource({
  url: linesGeoJsonUrl,
  format: new GeoJSON(),
});

export default linesSource;
