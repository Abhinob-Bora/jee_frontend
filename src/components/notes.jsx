import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import black from "../Images/black.png";
import pdfImage1 from "../Images/black.png";
import pdfImage2 from "../Images/black.png";
import pdfImage3 from "../Images/black.png";

const DashboardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px){
    padding: 6px 10px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    background-color: ${theme.bg};
    border-radius: 10px;
    padding: 20px 30px;
  `}
`;

const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px){
    font-size: 18px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  @media (max-width: 768px){
    font-size: 14px;
  }
  color: ${({ theme }) => theme.primary};
  &:hover{
    transition: 0.2s ease-in-out;
  }
`;

const Podcasts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  //center the items if only one item present
  @media (max-width: 550px){
    justify-content: center;
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const DisplayNo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.text_primary};
`;

const PdfImage = styled.img`
  width: 100px;
  height: 100px;
`;

const NotePdf = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, name: "PDF 1", description: "Description of PDF 1", price: 10, image: pdfImage1 },
    { id: 2, name: "PDF 2", description: "Description of PDF 2", price: 15, image: pdfImage2 },
    { id: 3, name: "PDF 3", description: "Description of PDF 3", price: 20, image: pdfImage3 },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  async function handleBuyClick() {
    // Your existing logic for handling the buy click
  }

  return (
    <DashboardMain>
      <h1>Topper Notes</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item)}>
            <PdfImage src={item.image} alt={item.name} />
            <br />
            {item.name}
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedItem.name}</h2>
            <PdfImage src={selectedItem.image} alt={selectedItem.name} />
            <p>{selectedItem.description}</p>
            <p>Price: ${selectedItem.price}</p>
            <button onClick={handleBuyClick}>Buy</button>
          </div>
        </div>
      )}
    </DashboardMain>
  );
};

export default NotePdf;
