import buildMap from "./features/map/buildMap";
import useMapStore from "./store/store";
import { useEffect } from "react";
import Button from "./components/Button";
import handleToggleLayer from "./features/map/toggleLayer";
export default function App() {
  useEffect(() => {
    if (!useMapStore.getState().mapObject) buildMap("map");
  }, []);
  return (
    <>
      <h1>Enviro</h1>
      <div id="map" style={{ width: "100vw", height: "800px" }}></div>
      <Button variant="secondary" onClick={() => handleToggleLayer("lines")}>
        Toggle Lines
      </Button>
      <Button variant="secondary" onClick={() => handleToggleLayer("districts")}>
        Toggle Districts
      </Button>
    </>
  );
}
