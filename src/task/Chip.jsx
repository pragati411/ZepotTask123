import React from "react";
import { MdClose } from "react-icons/md";

const Chip = ({ item, onRemove }) => {
  const styles = {
    chip: {
      backgroundColor: "#e0e0e0",
      margin: "4px",
      borderRadius: "20px",
      paddingRight: "12px",
      display: "flex",
      gap: "6px",
      alignItems: "center",
    },
    chipText: {
      marginRight: "8px",
    },
    chipRemove: {
      cursor: "pointer",
      color: "#666",
      height: "18px",
    },
  };

  return (
    <div style={styles.chip}>
      <span style={{ backgroundColor: "blue", width: "32px", height: "32px", borderRadius: "50%", display: "grid", placeItems: "center", color: "#fff" }}>IC</span>
      <span style={styles.chipText}>{item}</span>
      <span onClick={() => onRemove(item)} style={styles.chipRemove}>
        <MdClose />
      </span>
    </div>
  );
};

export default Chip;
