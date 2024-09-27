import { useState } from "react";
// Write your Color component here
const Color = ({ color, setSelectedColor, isSelected }) => {
  const className = isSelected ? `${color} selected` : color;

  return <div className={className} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor} isSelected={selectedColor === "violet"} />
        <Color color="yellow" setSelectedColor={setSelectedColor} isSelected={selectedColor === "yellow"} />
        <Color color="blue" setSelectedColor={setSelectedColor} isSelected={selectedColor === "blue"} />
      </div>
    </div>
  );
};

export default App;
