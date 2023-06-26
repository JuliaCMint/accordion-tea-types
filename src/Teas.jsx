import React, { useState } from "react";
import Tea from "./Tea";

const Teas = ({ teas, activeId, toggleTea }) => {
  return (
    <div className="container">
      <h1>Types of green tea</h1>
      {teas.map((tea) => {
        return (
          <Tea
            key={tea.id}
            {...tea}
            activeId={activeId}
            toggleTea={toggleTea}
          />
        );
      })}
    </div>
  );
};

export default Teas;
