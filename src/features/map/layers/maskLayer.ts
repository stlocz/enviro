import useMapStore from "../../../store/store";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import districtsSource from "../sources/districtsSource";
import { Fill, Style } from "ol/style";
import { Feature } from "ol";
import { Polygon, MultiPolygon } from "ol/geom";
import { get as getProjection } from "ol/proj";

const maskLayer = new VectorLayer({
  source: new VectorSource(),
  style: new Style({
    fill: new Fill({ color: "rgba(9, 21, 41, 0.88)" }),
  }),
});
maskLayer.setZIndex(99);

function buildMask(withDistricts: boolean = true) {
  const map = useMapStore.getState().mapObject;
  if (!map) return;

  if (!map.getLayers().getArray().includes(maskLayer)) map.addLayer(maskLayer);

  const source = maskLayer.getSource();
  if (!source) return;

  const extent = getProjection(
    map.getView().getProjection().getCode()
  )!.getExtent();
  const outer = [
    [extent[0], extent[1]],
    [extent[0], extent[3]],
    [extent[2], extent[3]],
    [extent[2], extent[1]],
    [extent[0], extent[1]],
  ];

  if (districtsSource.getFeatures().length === 0) return;

  const holes = !withDistricts
    ? []
    : districtsSource
        .getFeatures()
        .flatMap((feature) =>
          (feature.getGeometry() as MultiPolygon)
            .getPolygons()
            .map((polygon) => polygon.getCoordinates()[0].slice().reverse())
        );

  source.clear(true);
  source.addFeature(new Feature(new Polygon([outer, ...holes])));
}

function removeMask() {
  const map = useMapStore.getState().mapObject;
  if (!map) return;
  const layers = map.getLayers().getArray();
  if (layers.includes(maskLayer)) map.removeLayer(maskLayer);
  maskLayer.getSource()?.clear(true);
}

export { buildMask, removeMask };
