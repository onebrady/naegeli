"use client";

import { useState } from "react";
import InteractiveServiceMap from "./InteractiveServiceMap";

interface StateInfo {
  name: string;
  coverage: string;
  details: string;
}

const stateInformation: Record<string, StateInfo> = {
  "48": {
    name: "Texas",
    coverage: "Statewide Coverage",
    details: "Full-state service with Houston headquarters and extensive route network"
  },
  "22": {
    name: "Louisiana",
    coverage: "Regional Coverage",
    details: "Serving major corridors and industrial zones throughout the state"
  },
  "05": {
    name: "Arkansas",
    coverage: "Regional Coverage",
    details: "Strategic routes connecting to major transportation hubs"
  },
  "40": {
    name: "Oklahoma",
    coverage: "Regional Coverage",
    details: "Coverage across key industrial and energy sector routes"
  }
};

export default function ServiceArea() {
  const [selectedState, setSelectedState] = useState<StateInfo | null>(null);

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="mb-4">Service Area</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Comprehensive heavy haul transportation across Texas and the Gulf Coast region
          </p>
        </div>

        {/* Interactive Service Area Map */}
        <InteractiveServiceMap
          onStateSelect={setSelectedState}
          selectedState={selectedState}
        />

        {/* Selected State Details */}
        {selectedState && (
          <div
            className="mt-8 max-w-3xl mx-auto p-6 bg-gradient-to-r from-orange-50 to-orange-100/50 border-2 border-orange-500 rounded-xl"
            role="region"
            aria-live="polite"
            aria-label="Selected state information"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  {selectedState.name}
                </h3>
                <p className="text-orange-700 font-semibold mb-3">
                  {selectedState.coverage}
                </p>
                <p className="text-slate-700">
                  {selectedState.details}
                </p>
              </div>
              <button
                onClick={() => setSelectedState(null)}
                className="flex-shrink-0 p-2 hover:bg-orange-200 rounded-lg transition-colors"
                aria-label="Close state details"
              >
                <svg
                  className="w-5 h-5 text-slate-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Capabilities Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group text-center p-8 bg-slate-50 hover:bg-white border-2 border-slate-200 hover:border-orange-500 rounded-xl transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 group-hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
              <svg
                className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-xl mb-3 text-slate-900">Port Access</h4>
            <p className="text-slate-600">TWIC certified for secure facility access at Gulf Coast ports</p>
          </div>

          <div className="group text-center p-8 bg-slate-50 hover:bg-white border-2 border-slate-200 hover:border-orange-500 rounded-xl transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 group-hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
              <svg
                className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h4 className="font-semibold text-xl mb-3 text-slate-900">Storage Yards</h4>
            <p className="text-slate-600">Internal and external storage facilities available on-site</p>
          </div>

          <div className="group text-center p-8 bg-slate-50 hover:bg-white border-2 border-slate-200 hover:border-orange-500 rounded-xl transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 group-hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
              <svg
                className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-xl mb-3 text-slate-900">Certified Scale</h4>
            <p className="text-slate-600">Commercial truck scale on-site for accurate weight certification</p>
          </div>
        </div>
      </div>
    </section>
  );
}
