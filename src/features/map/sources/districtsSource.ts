import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import districtsGeoJsonUrl from '../../../assets/wojewodztwa.geojson?url'
import useMapStore from "../../../store/store";
import { buildMask } from "../layers/maskLayer";
const districtsSource = new VectorSource({
  url: districtsGeoJsonUrl,
  format: new GeoJSON(),
});

districtsSource.once("change", () => {
  if (districtsSource.getState() === "ready") {
    const map = useMapStore.getState().mapObject;
    if (!map) return;
    map.getView().fit(districtsSource.getExtent());
    buildMask();
    map.on("moveend", () => buildMask());
  }
});

export default districtsSource;
