import React from "react";

function Main() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="p-5 w-8/10">
          <h1 className="font-bold text-2xl">Explore destinations</h1>
          <p>
            Not sure where to go? Use our interactive map to find flights to
            great destinations.
          </p>
          <div className="bg-red-200 p-1 my-3 rounded border-red-900">
            Sorry, no results have been found. Please enter a different origin
            location or expand your search area.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
