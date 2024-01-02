import React, { useEffect, useState } from "react";
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
  Bars,
  BarContainer,
  Flex
} from "../lib/styles";
import { randomString } from "../lib/generator";
import PropTypes from "prop-types";

const PasswordOptions = ({setPassword }) => {

  const [strength, setStrength] = useState({
    status: "Select Options",
    bar1: "",
    bar2: "",
    bar3: "",
    bar4: "",
  });
  const [paramsObj, setParamsObj] = useState({
    Length: 0,
    Lower: false,
    Upper: false,
    Numbers: false,
    Symbols: false,
  });
  const [error, setError] = useState("");

  const handleSliderInput = (e) => {
    setParamsObj((prevState) => ({
      ...prevState,
      Length: e.target.value,
    }));
    return null;
  };

  const sendParams = () => {
    let random = randomString(paramsObj);
    setPassword(random);
  };

  const validateForm = () => {
    if (Object.values(paramsObj).includes(true)) {
      if(paramsObj.Length === 0){
        setError("Can't generate an empty password, please check again.")
        return false;
      }
      setError("");
      return true;
    } else {
      setError("No parameters selected, please check again.")
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendParams();
    }
  };

  const evaluateStrength = () => {
    let count = 0;
    for (const key in paramsObj) {
      if (paramsObj.hasOwnProperty(key)) {
        const value = paramsObj[key];
        if (key === "Upper" && value === true) {
          count++;
        } else if (key === "Lower" && value === true) {
          count++;
        } else if (key === "Numbers" && value === true) {
          count++;
        } else if (key === "Symbols" && value === true) {
          count++;
        }
      }
    }
    if (count === 1) {
      setStrength((prevState) => ({
        ...prevState,
        status: "TOO WEAK!",
        bar1: "low",
        bar2: "",
        bar3: "",
        bar4: "",
      }));
    } else if (count === 2) {
      setStrength((prevState) => ({
        ...prevState,
        status: "WEAK",
        bar1: "medium",
        bar2: "medium",
        bar3: "",
        bar4: "",
      }));
    } else if (count === 3) {
      setStrength((prevState) => ({
        ...prevState,
        status: "MEDIUM",
        bar1: "good",
        bar2: "good",
        bar3: "good",
        bar4: "",
      }));
    } else if (count === 4) {
      setStrength((prevState) => ({
        ...prevState,
        status: "STRONG",
        bar1: "high",
        bar2: "high",
        bar3: "high",
        bar4: "high",
      }));
    } else {
      setStrength((prevState) => ({
        ...prevState,
        status: "",
        bar1: "",
        bar2: "",
        bar3: "",
        bar4: "",
      }));
    }
    return null;
  };

  useEffect(() => {
    evaluateStrength();
  }, [paramsObj]);

  return (
    <>
      <Form>
        <Label htmlFor="range" $range>
          <Span>
            <Text>character length</Text>
            <Text $highlight>{paramsObj.Length}</Text>
          </Span>
          <RangeSlider
            name="range"
            type="range"
            min={0}
            max={30}
            value={paramsObj.Length}
            length={paramsObj.Length}
            onChange={handleSliderInput}
          />
        </Label>
        <Label htmlFor="lower" $checkbox>
          <CheckInput
            checked={paramsObj.Lower}
            type="checkbox"
            name="lower"
            id="lower"
            onChange={() => {
              setParamsObj((prevState) => ({
                ...prevState,
                Lower: !prevState.Lower,
              }));
            }}
          />
          Include Lowercase Letters
        </Label>
        <Label htmlFor="upper" $checkbox>
          <CheckInput
            checked={paramsObj.Upper}
            type="checkbox"
            name="upper"
            id="upper"
            onChange={() => {
              setParamsObj((prevState) => ({
                ...prevState,
                Upper: !prevState.Upper,
              }));
            }}
          />
          Include Uppercase Letters
        </Label>
        <Label htmlFor="numbers" $checkbox>
          <CheckInput
            checked={paramsObj.Numbers}
            type="checkbox"
            name="numbers"
            id="numbers"
            onChange={() => {
              setParamsObj((prevState) => ({
                ...prevState,
                Numbers: !prevState.Numbers,
              }));
            }}
          />
          Include Numbers
        </Label>
        <Label htmlFor="symbols" $checkbox>
          <CheckInput
            checked={paramsObj.Symbols}
            type="checkbox"
            name="symbols"
            id="symbols"
            onChange={() => {
              setParamsObj((prevState) => ({
                ...prevState,
                Symbols: !prevState.Symbols,
              }));
            }}
          />
          Include Symbols
        </Label>

        {

          // error messages
          error ? <Text $Error>{error}</Text> : ""
        }

        <Indicator>
          <Text $SubHeader>STRENGTH</Text>
          <Flex $Indicator>
            <Text $Indicator>{strength.status}</Text>
            <BarContainer>
              <Bars $Strength={strength.bar1}></Bars>
              <Bars $Strength={strength.bar2}></Bars>
              <Bars $Strength={strength.bar3}></Bars>
              <Bars $Strength={strength.bar4}></Bars>
            </BarContainer>
          </Flex>
        </Indicator>
        <Button
          onClick={(e) => {
            handleSubmit(e);
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
  setPassword:PropTypes.func, // setState func for random passowrd.
};

export default PasswordOptions;
