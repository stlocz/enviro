import { useEffect } from "react";
import Button from "./components/Button";
import buildMap from "./features/map/buildMap";
import handleToggleLayer from "./features/map/toggleLayer";
import useMapStore from "./store/store";

export default function App() {
  useEffect(() => {
    if (!useMapStore.getState().mapObject) buildMap("map");
  }, []);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1 className="app-title">Enviro</h1>
          <p className="app-subtitle">
            Open Layers map with toggleable layers and charts
          </p>
        </div>
      </header>

      <main className="app-content">
        <aside className="control-panel" aria-label="Layer controls">
          <h2>Layers</h2>
          <p>Select the layers you'd like to explore.</p>
          <div className="layer-actions">
            <Button
              variant="secondary"
              onClick={() => handleToggleLayer("lines")}
            >
              Toggle Lines
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleToggleLayer("districts")}
            >
              Toggle Districts
            </Button>
          </div>
        </aside>

        <section className="map-wrapper">
          <div id="map" className="map-container" role="region" aria-label="Enviro map" />
        </section>
      </main>
    </div>
  );
}
