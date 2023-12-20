import { useEffect,useState } from "react";
import { randomString } from "../lib/generator";
import {Svg, SvgContainer, Text,Password} from "../lib/styles"
import { copyToClicboard } from "../lib/copyToClickboard";
import PropTypes from "prop-types";

const GeneratedPassword = ({params}) => {
  const [string, setString] = useState("");
  const [isCopied,setIsCopied] = useState (false);

  useEffect(()=>{
    setString(randomString(params));
    setIsCopied(false);
  },[params])

  
  return (
    <>
    <Text $Header>Password Generator</Text>
    <Password onClick={ ()=>{ 
      copyToClicboard(string)
      setIsCopied(true);      
      }}>
      {!string ? <Text $Header>P4$5W0rD !</Text> : <Text $Password>{string}</Text>} 
      <SvgContainer>
        {!isCopied ? "" : <Text $Copy>COPIED</Text>}
        <Svg src="../../public/assets/copy.svg" />
      </SvgContainer>
    </Password>
    </>
  );
};

GeneratedPassword.propTypes = {
  params: PropTypes.object, 
}
export default GeneratedPassword;
