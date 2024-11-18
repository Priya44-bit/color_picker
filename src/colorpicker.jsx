import  { useState } from "react";

// Sample color array
const colors = [
  { hex: "#FF5733", name: "Red" },
  { hex: "#33FF57", name: "Green" },
  { hex: "#3357FF", name: "Blue" },
  { hex: "#FF33A1", name: "Pink" },
  { hex: "#F5FF33", name: "Yellow" },
  { hex: "#33FFF1", name: "Teal" },
];

function ColorPicker() {
  const [hoveredColor, setHoveredColor] = useState("");
  const [selectedColor, setSelectedColor] = useState(""); // State to store selected color
  const [clickedColor, setClickedColor] = useState(null); // State to track the clicked color box

  // Function to handle color click
  const handleColorClick = (color) => {
    setSelectedColor(color.hex); // Set the clicked color's hex value to background
    setClickedColor(color.hex);  // Set the clicked color for animation
  };

  return (
    <div
      style={{ ...styles.container, backgroundColor: selectedColor }} // Change background color based on selected color
    >
      <h2>Select a Color</h2>
      <div style={styles.colorBoxContainer}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              ...styles.colorBox,
              backgroundColor: color.hex,
              border: clickedColor === color.hex ? "5px solid #000" : "none", // Add border on click
              transform: clickedColor === color.hex ? "scale(1.1)" : "scale(1)", // Click animation: Enlarge on click
            }}
            onMouseEnter={() => setHoveredColor(color.name)}
            onMouseLeave={() => setHoveredColor("")}
            onClick={() => handleColorClick(color)} // On click, change background color
          >
            {hoveredColor === color.name && (
              <div style={styles.colorName}>{color.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh", // Full screen height
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    transition: "background-color 0.3s ease", // Smooth transition for background color change
  },
  colorBoxContainer: {
    display: "flex",           // Flexbox for horizontal alignment
    justifyContent: "center",  // Centers the color boxes
    alignItems: "center",      // Centers the boxes vertically (if needed)
    gap: "15px",               // Space between the boxes
    marginTop: "20px",
    flexWrap: "wrap",          // Allows the boxes to wrap to the next line if needed
  },
  colorBox: {
    width: "120px",
    height: "120px",
    borderRadius: "10px",
    position: "relative",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease", // Added transition for border and scale
    cursor: "pointer",
  },
  colorName: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

export default ColorPicker;