import React from "react";
import styled from "styled-components";

const SearchList = ({ filteredItems, onItemClick }) => {
  return (
    <SearchListContainer>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <SearchListItem key={index} onClick={() => onItemClick(item)}>
            <SearchListItemAvatar>IC <span></span></SearchListItemAvatar>
            <SearchListItemDescriptionBox>
              <SearchListItemTitle>{item}</SearchListItemTitle>
              <SearchListItemEmail>pragati.shukla041@gmail.com</SearchListItemEmail>
            </SearchListItemDescriptionBox>
          </SearchListItem>
        ))
      ) : (
        <SearchListNoItemsAvailableContainer>
          <p>You have selected all available elements</p>
        </SearchListNoItemsAvailableContainer>
      )}
    </SearchListContainer>
  );
};

export default SearchList;

const SearchListContainer = styled.div`
  position: absolute;
  width: 380px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const SearchListItem = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
`;

const SearchListItemDescriptionBox = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const SearchListItemAvatar = styled.p`
  background-color: 	#E0E0E0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchListItemTitle = styled.p`
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
  width: clamp(0px, 40%, 180px);
`;

const SearchListItemEmail = styled.span`
  font-size: 12px;
  color: #a3a3a3;
`;

const SearchListNoItemsAvailableContainer = styled.div`
  padding: 0 12px;
  font-size: 12px;
`;
