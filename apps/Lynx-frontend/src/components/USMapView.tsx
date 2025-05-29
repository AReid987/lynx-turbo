import React from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const colorScale = scaleLinear<string>().domain([0, 100, 200, 300, 400, 500]).range(["#FA4119", "#FA9C19", "#FAF219", "#64FA19", "#19FA7E", "#19FAF2"]);
// Mock data - in real app this would come from API
const mockStateData: {
  [key: string]: number;
} = {
  CA: 450,
  NY: 380,
  TX: 290,
  FL: 200,
  IL: 150
  // ... add more states as needed
};
interface USMapViewProps {
  onStateSelect: (state: string) => void;
}
export function USMapView({
  onStateSelect
}: USMapViewProps) {
  return <div className="w-full aspect-[4/3] p-4">
      <ComposableMap projection="geoAlbersUsa">
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({
            geographies
          }) => geographies.map(geo => {
            const stateId = geo.properties.postal;
            const leads = mockStateData[stateId] || 0;
            return <Geography key={geo.rsmKey} geography={geo} onClick={() => onStateSelect(stateId)} style={{
              default: {
                fill: colorScale(leads),
                outline: "none"
              },
              hover: {
                fill: "#19FAF2",
                outline: "none"
              },
              pressed: {
                fill: "#19FAF2",
                outline: "none"
              }
            }} />;
          })}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>;
}