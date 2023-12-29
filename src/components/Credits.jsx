import React from "react";
import { useState } from "react";
import { Text, SvgContainer, Svg, Flex } from "../lib/styles";
import Modal from "./Modal";


const margin = {
  margin: "1rem 0 0 0",
  cursor:"pointer"
}

const Credits = () => {
  const [modal, setModal] = useState(false);
  
  const openModal = () => {
    setModal(true);
  };
  
  const closeModal = () => {
    setModal(false);
  };
  return (
    <Flex>
      <SvgContainer onClick={()=>{openModal()}} style={margin}>
        <Svg src="/assets/question-mark.svg" />
      </SvgContainer>
      <Modal isOpen={modal} Close={closeModal} Open={openModal} />
    </Flex>
  );
};

export default Credits;
