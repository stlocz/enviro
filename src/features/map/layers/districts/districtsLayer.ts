import districtsSource from "../../sources/districtsSource"
import VectorLayer from "ol/layer/Vector"
import type { FeatureLike } from "ol/Feature"
import getFeatureStyle from "./getFeatureStyle"
const districtsLayer = new VectorLayer ({
    source: districtsSource,
    style: (feature: FeatureLike) => getFeatureStyle(feature),
})

export default districtsLayer
