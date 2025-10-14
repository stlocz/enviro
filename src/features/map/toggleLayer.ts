import useMapStore from "../../store/store";
import VectorLayer from "ol/layer/Vector";
import WebGLVectorLayer from "ol/layer/WebGLVector";
import VectorSource from "ol/source/Vector";
import linesLayer from "./layers/linesLayer";
import districtsLayer from "./layers/districts/districtsLayer";
import { buildMask } from "./layers/maskLayer";

type TogglableLayerName = "lines" | "districts";

const toggleLayer = (layer: VectorLayer<VectorSource> | WebGLVectorLayer<VectorSource>) => {
  const map = useMapStore.getState().mapObject;
  if (!map) return;
  if (map.getLayers().getArray().includes(layer)) {
    map.removeLayer(layer);
  } else {
    map.addLayer(layer);
  }
};

const handleToggleLayer = (layer: TogglableLayerName) => {
  switch (layer) {
    case "lines":
      toggleLayer(linesLayer);
      break;
    case "districts":
      toggleLayer(districtsLayer);
      buildMask(districtsLayer.getVisible());
      break;
  }
};

export default handleToggleLayer;
