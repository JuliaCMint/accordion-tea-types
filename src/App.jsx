import { useState } from "react";
import teaTypes from "./data";
import Teas from "./Teas";

const App = ({}) => {
  const [teas, setTeas] = useState(teaTypes);
  const [activeId, setActiveId] = useState(null);

  const toggleTea = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <section className="main">
      <Teas teas={teas} activeId={activeId} toggleTea={toggleTea} />;
    </section>
  );
};
export default App;
