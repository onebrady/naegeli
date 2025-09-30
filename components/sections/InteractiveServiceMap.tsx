"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Service area state IDs (from TopoJSON)
const serviceStates = ["48", "22", "05", "40"]; // TX, LA, AR, OK

// State names mapping
const stateNames: Record<string, string> = {
  "48": "Texas",
  "22": "Louisiana",
  "05": "Arkansas",
  "40": "Oklahoma"
};

// Houston HQ coordinates
const houstonCoords: [number, number] = [-95.3698, 29.7604];

interface StateInfo {
  name: string;
  coverage: string;
  details: string;
}

interface InteractiveServiceMapProps {
  onStateSelect: (state: StateInfo | null) => void;
  selectedState: StateInfo | null;
}

export default function InteractiveServiceMap({ onStateSelect, selectedState }: InteractiveServiceMapProps) {
  const [tooltipContent, setTooltipContent] = useState<string>("");
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleStateClick = (geo: any) => {
    if (serviceStates.includes(geo.id)) {
      const stateInfo: StateInfo = {
        name: stateNames[geo.id] || geo.properties.name,
        coverage: geo.id === "48" ? "Statewide Coverage" : "Regional Coverage",
        details: geo.id === "48"
          ? "Full-state service with Houston headquarters and extensive route network"
          : `Serving major corridors and industrial zones throughout ${stateNames[geo.id]}`
      };
      onStateSelect(stateInfo);
    }
  };

  const handleMouseEnter = (geo: any, event: any) => {
    const stateName = stateNames[geo.id] || geo.properties.name;
    const isServiceArea = serviceStates.includes(geo.id);

    if (isServiceArea) {
      setTooltipContent(`${stateName} - Click for details`);
    } else {
      setTooltipContent(stateName);
    }
  };

  const handleMouseMove = (event: any) => {
    const mapContainer = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: event.clientX - mapContainer.left,
      y: event.clientY - mapContainer.top
    });
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden shadow-lg">
      <div
        className="relative"
        onMouseMove={handleMouseMove}
        role="img"
        aria-label="Interactive service area map showing coverage across Texas, Louisiana, Arkansas, and Oklahoma"
      >
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{
            scale: 800,
          }}
          width={800}
          height={500}
          className="w-full h-auto"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isServiceArea = serviceStates.includes(geo.id);
                const isSelected = selectedState?.name === (stateNames[geo.id] || geo.properties.name);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleStateClick(geo)}
                    onMouseEnter={(event) => handleMouseEnter(geo, event)}
                    onMouseLeave={handleMouseLeave}
                    tabIndex={isServiceArea ? 0 : -1}
                    aria-label={
                      isServiceArea
                        ? `${stateNames[geo.id]}, service area state, click for details`
                        : `${geo.properties.name}`
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleStateClick(geo);
                      }
                    }}
                    style={{
                      default: {
                        fill: isServiceArea
                          ? isSelected
                            ? "#ea580c"
                            : "#ff6b00"
                          : "#e2e8f0",
                        stroke: isSelected ? "#c2410c" : "#fff",
                        strokeWidth: isSelected ? 1.5 : 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: isServiceArea ? "#ff8533" : "#cbd5e1",
                        stroke: isServiceArea ? "#c2410c" : "#94a3b8",
                        strokeWidth: isServiceArea ? 1.2 : 0.5,
                        outline: "none",
                        cursor: isServiceArea ? "pointer" : "default",
                      },
                      pressed: {
                        fill: isServiceArea ? "#ea580c" : "#e2e8f0",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Houston HQ Marker */}
          <Marker coordinates={houstonCoords}>
            <g role="img" aria-label="Houston headquarters location">
              {/* Outer pulse ring */}
              <circle
                r={8}
                fill="#ff6b00"
                fillOpacity={0.2}
                className="animate-ping"
              />
              {/* Main marker */}
              <circle r={5} fill="#ff6b00" stroke="#fff" strokeWidth={2} />
              {/* Center dot */}
              <circle r={2} fill="#fff" />
            </g>
            <text
              textAnchor="middle"
              y={-12}
              className="text-xs font-semibold fill-slate-900 pointer-events-none"
              style={{ fontSize: "10px", fontWeight: 600 }}
            >
              Houston HQ
            </text>
          </Marker>
        </ComposableMap>

        {/* Tooltip */}
        {tooltipContent && (
          <div
            className="absolute pointer-events-none z-50 px-3 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg shadow-xl"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y - 40}px`,
              transform: "translateX(-50%)",
            }}
            role="tooltip"
            aria-live="polite"
          >
            {tooltipContent}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="bg-white border-t-2 border-slate-200 px-6 py-5">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-orange-500 rounded shadow-sm" aria-hidden="true"></div>
            <span className="text-slate-700 font-semibold">Service Coverage</span>
            <span className="text-slate-500 text-xs">(4 states)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-slate-300 rounded shadow-sm" aria-hidden="true"></div>
            <span className="text-slate-700 font-medium">Outside Service Area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative" aria-hidden="true">
              <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-sm"></div>
              <div className="absolute inset-0 w-4 h-4 bg-orange-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-slate-700 font-medium">Houston Headquarters</span>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-3">
          Hover over states for names • Click service states for coverage details
        </p>
      </div>
    </div>
  );
}
