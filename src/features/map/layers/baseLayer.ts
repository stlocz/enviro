import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
const baseLayer = new TileLayer({
    source: new OSM()
})

export default baseLayer;
