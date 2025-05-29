import React, { useState } from "react";
import { USMapView } from "../components/USMapView";
import { CRMTable } from "../components/CRMTable";
export function Dashboard() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  return <div className="p-6 space-y-6 pt-20">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Lead Generation Dashboard</h1>
        {selectedState && <p className="text-muted-foreground">
            Viewing leads for {selectedState}
          </p>}
      </div>
      <div className="rounded-lg border bg-card">
        <USMapView onStateSelect={setSelectedState} />
      </div>
      <div className="rounded-lg border bg-card p-4">
        <CRMTable selectedState={selectedState} />
      </div>
    </div>;
}