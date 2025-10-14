import { View } from "ol";
import { fromLonLat } from "ol/proj";
const defaultView = new View({
  center: fromLonLat([20.5, 52.5]),
  zoom: 5,
});

export default defaultView;
