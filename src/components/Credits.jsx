import React from "react";
import { useState } from "react";
import { SvgContainer, Svg, Flex } from "../lib/styles";
import PropTypes from "prop-types";

const credits = {
  margin: "1rem 0 0 0",
  cursor:"pointer",
  background:"transparent",
  border:"none",
  width:"3rem",
}

const Credits = ({openModal}) => {
  return (
    <Flex>
      <button style={credits} onClick={()=>{openModal(true)}}>
        <Svg src="/assets/question-mark.svg" />
      </button>
    </Flex>
  );
};

Credits.propTypes = {
  openModal:PropTypes.func // set state function. Boolean value.
}



export default Credits;
