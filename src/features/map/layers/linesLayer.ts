import WebGLVectorLayer from 'ol/layer/WebGLVector';
import linesSource from "../sources/linesSource";

const linesLayer = new WebGLVectorLayer({
  source: linesSource,
  style: {
    "stroke-color": [0, 0, 0, 4],
    "stroke-width": 0.25,
  }
});

export default linesLayer;
