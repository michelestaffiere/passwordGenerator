import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import {Link, Text, Svg, ModalWindow,BackDrop } from "../lib/styles";
import PropTypes from "prop-types";


// inline styles for close button
const close = {
    position:"absolute",
    right:"10%",
    border:"none",
    padding:".5rem",
    color:"#24232C",
    "background":"#a4ffaf",
    "font-family": "JetBrains Mono, monospace",
    "font-size":"1rem",
    cursor:"pointer"
}


const Modal = ({closeModal,modalState}) => {
    useEffect(()=>{
        const handleOutsideClick = (e) =>{
            const modalContainer = document.getElementById("modal");
            if(modalState && modalContainer && !modalContainer.contains(e.target)){
                closeModal(false);
            }
        }
        const backDrop = document.getElementById("container");
        if(backDrop){
            backDrop.addEventListener("click",handleOutsideClick);
        }

        return ()=>{
            if(backDrop){
                backDrop.removeEventListener("click",handleOutsideClick);
            }
        }
    },[closeModal,modalState])

  return (
    <BackDrop id="container">
      <ModalWindow id="modal">
        <button style={close} onClick={()=>{closeModal(false)}}>Close</button>
        <Text $highlight>How To Use</Text>
        <ul>
          <li>
            <Text>  
              Select at least <strong>one</strong> parameter from the list.
            </Text>
          </li>
          <li>
            <Text>
              Character length <strong>should</strong> be at least 5 for more secure results.
            </Text>
          </li>
          <li>
            <Text>
              Click the generated password field to copy the current password to
              your clipboard.
            </Text>
          </li>
          <li>
            <Text>
              Strength Indicator shows you how strong your password will be.
            </Text>
          </li>
        </ul>

        <Text $highlight>Credits</Text>
        <ul>
          <li>
            <Text>Coded by Michele Staffiere 2023.</Text>
          </li>
          <li>
            <Text>Design and Figma files provided by FrontEndMentor.io</Text>
          </li>
          <li>
            <Text>
              <Link href="https://github.com/michelestaffiere" target="_blank">
                My Github.
              </Link>
            </Text>
          </li>
          <li>
            <Text>
              <Link
                href="https://www.linkedin.com/in/michelestaffiere/"
                target="_blank"
              >
                My LinkedIn.
              </Link>
            </Text>
          </li>
        </ul>
      </ModalWindow>
    </BackDrop>
  );
};
Modal.propTypes = {
    closeModal:PropTypes.func, // state func to update status of modal (bool)
    modalState:PropTypes.bool // value of modal state 
}

export default Modal;
