import React from "react";
import Chip from "./Chip";

const ChipsContainer = ({ selectedItems, onChipRemove }) => {
  const styles = {
    chipContainer: {
      display: "flex",
      flexWrap: "wrap",
    },
  };

  return (
    <div style={styles.chipContainer}>
      {selectedItems.map((item, index) => (
        <Chip key={index} item={item} onRemove={onChipRemove} />
      ))}
    </div>
  );
};

export default ChipsContainer;
