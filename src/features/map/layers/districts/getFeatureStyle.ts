import Chart from "ol-ext/style/Chart";
import { Style, Stroke } from "ol/style";
import type { FeatureLike } from "ol/Feature";
import type { Geometry } from "ol/geom";
import { getCenter } from "ol/extent";
import Point from "ol/geom/Point";
const styleCache: Record<number, Style[]> = {};
type DistrictProperty = {
  id: number;
  dane1: number;
  dane2: number;
  dane3: number;
  dane4: number;
  geometry: Geometry;
};
function getFeatureStyle(feature: FeatureLike) {
  const properties = feature.getProperties() as DistrictProperty;
  if (!styleCache[properties.id]) {
    const radius = 15;
    // Create chart style
    styleCache[properties.id] = [
      new Style({
        stroke: new Stroke({ color: "black", width: 1 }),
      }),
      new Style({
        geometry: (feature) => {
          const geom = feature.getGeometry();
          if (!geom) return new Point([0, 0]);
          return new Point(getCenter(geom.getExtent()))
        },
        image: new Chart({
          type: "bar",
          radius,
          //@ts-expect-error this displacement works for bar type according to examples
          displacement: [0, radius],
          data: [
            properties.dane1,
            properties.dane2,
            properties.dane3,
            properties.dane4,
          ],
          colors: "classic",
          rotateWithView: false,
          stroke: new Stroke({
            color: "#000",
            width: 1,
          }),
        }),
      }),
    ];
  }
  return styleCache[properties.id];
}

export default getFeatureStyle;
