import { useEffect,useState } from "react";
import { randomString } from "../lib/generator";
import {Svg, SvgContainer, Text,Password} from "../lib/styles"
import { copyToClicboard } from "../lib/copyToClickboard";
import PropTypes from "prop-types";

const GeneratedPassword = ({params}) => {
  const [string, setString] = useState("");

  useEffect(()=>{
    setString(randomString(params))
  },[params])

  return (
    <>
    <Text $Header>Password Generator</Text>
    <Password onClick={ ()=>{ copyToClicboard(string)}}>
      <Text>{string.length < 1 ? "P4$5W0RD" : string}</Text>
      <SvgContainer>
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
