import React from "react";
import { useEffect } from "react";
import { Flex, Link, Text,SvgContainer,Svg } from "../lib/styles";

const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, .5)",
    zIndex: 1000,
};
  
  const modalStyle = {
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001
  };

  const close = {
    position:"absolute",
    top:"2%",
    right:"2%",
    width:"3.5rem",
    border:"none",
    background:"none",
    cursor:"pointer",
  }





const Modal = ({isOpen,Close}) => {
    useEffect(()=>{
        const handleOutsideClick = (e) =>{
            const modalContainer = document.getElementById('modal');
            if(isOpen && modalContainer && !modalContainer.contains(e.target)){
                Close();
            }
        }

        const overlay = document.getElementById('overlay')
        if(overlay){
            overlay.addEventListener("click",handleOutsideClick);
        }

        //remove event listeners on unmount
        return ()=>{
            if(overlay){
                overlay.removeEventListener("click",handleOutsideClick);
            }
        }
    },[isOpen, Close])



    if(!isOpen) return null;

    return (
        <div style={overlayStyle} id="overlay">
            <Flex style={modalStyle} id="modal" $Column>
                <button style={close} onClick={()=>{Close()}}>
                    <Svg src="/assets/close.svg"></Svg>
                </button>
                <Text $highlight>How To Use</Text>
                <ul>
                    <li>
                        <Text> Select at least <strong>one</strong> parameter from the list.</Text>
                    </li>
                    <li>
                        <Text>Character length <strong>MUST</strong> be at least 5.</Text>
                    </li>
                    <li>
                        <Text>Click the generated password field to copy the current password to your clipboard.</Text>
                    </li>
                    <li>
                        <Text>Strength Indicator shows you how strong your password will be.</Text>
                    </li>
                </ul>
                
                <Text $highlight>Credits</Text>
                <ul>
                    <li>
                    <Text>Coded by Michele Staffiere => Junior  Practice 2023.</Text>
                    </li>
                    <li>
                    <Text>Design and Figma files provided by FrontEndMentor.io</Text>
                    </li>
                    <li>
                    <Text>
                        <Link href="https://github.com/michelestaffiere" target="_blank">My Github.</Link>
                    </Text>
                    </li>
                    <li>
                    <Text>
                        <Link href="https://www.linkedin.com/in/michelestaffiere/" target="_blank">My LinkedIn.</Link>
                    </Text>
                    </li>
                </ul>
            </Flex>
        </div>
    );
};

export default Modal;
