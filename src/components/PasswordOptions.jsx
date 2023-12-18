import React, { useState } from "react";
import {
  Form,
  Label,
  Span,
  Text,
  CheckInput,
  RangeSlider,
  Button,
  Asci,
  Indicator,
} from "../lib/styles";
import styled from "styled-components";
import PropTypes from "prop-types";

const PasswordOptions = ({ setParams }) => {
  const [length, setLength] = useState(5);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [formStatus, setFormStatus] = useState(false);

  const [paramsObj, setParamsObj] = useState({
    Length:5,
    Lower: false,
    Upper:false,
    Numbers:false,
    Symbols:false
  });


  const handleSliderInput = (e) => {
    setLength(Number(e.target.value));
    return null;
  };

  const sendParams = () => {
    const params = new Object();
    params.Uppercase = upperCase;
    params.Lowercase = lowerCase;
    params.Symbols = symbols;
    params.Numbers = numbers;
    params.Characters = length;

    setUpperCase(false);
    setLowerCase(false);
    setSymbols(false);
    setNumbers(false);
    setParams(params);
  };

  const validateForm = () => {
    // construct params object.
    const params = new Object();
    params.Uppercase = upperCase;
    params.Lowercase = lowerCase;
    params.Symbols = symbols;
    params.Numbers = numbers;
    params.Characters = length;

    console.log(params);
    // create an array out of the object values
    if (Object.values(params).includes(true)) {
      console.log("params");
      setFormStatus(false);
      return true;
    } else {
      console.log("no params");
      setFormStatus(true)
      // setShowModal ?
      return false;
    }
  };

  const handleSubmit_ = (e) =>{
    e.preventDefault();
    if(validateForm()){
      sendParams();
    }
  }

  return (
    <>
      <Form>
        <Label htmlFor="range" $range>
          <Span>
            <Text>character length</Text>
            <Text $highlight>{length}</Text>
          </Span>
          <RangeSlider
            name="range"
            type="range"
            min={0}
            max={30}
            value={length}
            length={length}
            onChange={handleSliderInput}
          />
        </Label>

        <Label htmlFor="lower" $checkbox>
          <CheckInput
            checked={lowerCase}
            type="checkbox"
            name="lower"
            id="lower"
            onChange={() => {
              !lowerCase ? setLowerCase(true) : setLowerCase(false);
            }}
          />
          Include Lowercase Letters
        </Label>

        <Label htmlFor="upper" $checkbox>

          {/* working obj replacement instead of using multiple states. Copy to each checkbox later */}
          <CheckInput
            checked={paramsObj.Upper}
            type="checkbox"
            name="upper"
            id="upper"
            onChange={() => {
              // !upperCase ? setUpperCase(true) : setUpperCase(false);
              setParamsObj((prevState) => ({
                ...prevState,
                Upper: !prevState.Upper
              }));
            }}
          />
          Include Uppercase Letters
        </Label>
        <Label htmlFor="numbers" $checkbox>
          <CheckInput
            checked={numbers}
            type="checkbox"
            name="numbers"
            id="numbers"
            onChange={() => {
              !numbers ? setNumbers(true) : setNumbers(false);
            }}
          />
          Include Numbers
        </Label>
        <Label htmlFor="symbols" $checkbox>
          <CheckInput
            checked={symbols}
            type="checkbox"
            name="symbols"
            id="symbols"
            onChange={() => {
              !symbols ? setSymbols(true) : setSymbols(false);
            }}
          />
          Include Symbols
        </Label>

        <Indicator>
          <Text>STRENGTH</Text>
        </Indicator>

        <Button
          onClick={(e) => {
            validateForm(e);
          }}
        >
          <Text $button>
            GENERATE<Asci>➔</Asci>
          </Text>
        </Button>
      </Form>
    </>
  );
};

// prop validation.
PasswordOptions.propTypes = {
  setParams: PropTypes.func, // setState function to update params state in App.jsx.
};

export default PasswordOptions;
