import { useEffect,useState } from "react";
import { randomString,verifyParams } from "../lib/generator";
import PropTypes from "prop-types";



const GeneratedPassword = ({params}) => {
  useEffect(()=>{
     let check = verifyParams(params);
     if(check){
      setString(randomString(params));
     }
  },[params])
  const [string, setString] = useState("P4$5W0rD!");
  return (
    <div>
      <p>{string}</p>
      <button>copy button</button>
    </div>
  );
};

GeneratedPassword.propTypes = {
  params: PropTypes.object, // params object{}
}
export default GeneratedPassword;
