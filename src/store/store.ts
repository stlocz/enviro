import { create } from "zustand";
import { Map } from "ol";

export interface MapState {
  mapObject: Map | null;
  setMapObject: (map: Map) => void;
}
const useMapStore = create<MapState>((set) => ({
  mapObject: null,
  setMapObject: (map: Map) => set(() => ({ mapObject: map })),
}));

export default useMapStore;
