import React, { useMemo, useState } from "react";
import { MdClose } from "react-icons/md";

import SearchList from "./SearchList";
import ChipsContainer from "./ChipsContainer";

const allItems = [
  "Pragati",
  "Bhopal",
  "Delhi",
  "Noida",
  "India",
  "My name is pragati Shukla",
];

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsDropdownVisible(true);
  };

  const filteredItems = useMemo(() => {
    if (inputValue.trim() === "") {
      return allItems.filter((item) => !selectedItems.includes(item));
    }
    return allItems.filter(
      (item) =>
        !selectedItems.includes(item) &&
        item.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue, selectedItems]);

  const handleItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
    setInputValue("");
    setIsDropdownVisible(false);
  };

  const handleChipRemove = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  const handleInputBlur = () => {
    
    if (!document.hasFocus()) {
      setIsDropdownVisible(false);
    }
  };

  return (
    <>
      <div style={{ position: "relative", display: "flex", alignItems: "center", borderBottom: "1px solid black " }}>
        <ChipsContainer selectedItems={selectedItems} onChipRemove={handleChipRemove} />
        <div style={{ position: "relative" }}>
          <input
            style={{ outline: "none", border: 0, width: "100%", height: "50px" }}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setIsDropdownVisible(true)}
            onBlur={handleInputBlur}
            placeholder="Type to search..."
          />
          {isDropdownVisible && <SearchList filteredItems={filteredItems} onItemClick={handleItemClick} />}
        </div>
      </div>
    </>
  );
};

export default AutoComplete;
