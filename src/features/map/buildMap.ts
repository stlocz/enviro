import Map from "ol/Map";
import baseLayer from "./layers/baseLayer";
import districtsLayer from "./layers/districts/districtsLayer";
import linesLayer from "./layers/linesLayer";
import defaultView from "./views/defaultView";
import useMapStore from "../../store/store";
import setProjections from "./projections";
const buildMap = (mapContainer: string) => {
  setProjections();
  const map = new Map({
    target: mapContainer,
    layers: [baseLayer, districtsLayer, linesLayer],
    view: defaultView,
  });

  const mapState = useMapStore.getState();
  mapState.setMapObject(map);
};

export default buildMap;
