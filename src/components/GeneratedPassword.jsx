import { useEffect, useState } from "react";
import { randomString } from "../lib/generator";
import { Svg, SvgContainer, Text, Password } from "../lib/styles";
import { copyToClicboard } from "../lib/copyToClickboard";
import PropTypes from "prop-types";


const wordBreak = {
  "word-break":"break-all",
  "max-width":"80%"
}

const GeneratedPassword = ({password}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(()=>{
    setIsCopied(false);
  },[password])

  return (
    <>
      <Text $Header>Password Generator</Text>
      <Password onClick={() => {
          if (password === "") {
            return null;
          } else {
            copyToClicboard(password);
            setIsCopied(true);
          }
        }}
      >
        {!password ? (
          <div>
            <Text $Header>P4$5W0rD !</Text>
          </div>
        ) : (
          <div style={wordBreak}>
            <Text $Password>{password}</Text>
          </div>
        )}
        <SvgContainer>
          <Svg src="/assets/copy.svg" />
          {!isCopied ? "" : <Text $Copy>COPIED</Text>}
        </SvgContainer>
      </Password>
    </>
  );
};

GeneratedPassword.propTypes = {
  params: PropTypes.object,
  password:PropTypes.string
};
export default GeneratedPassword;
