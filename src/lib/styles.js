import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #24232c;
  color: #e6e5ea;
  text-align: left;
  width: 30rem;
  padding: 2rem;
  font-size: 18px;
`;
export const Label = styled.label`
  width: ${(props) => (props.$range ? "100%" : "fit-content")};
  display: ${(props) => (props.$checkbox ? "flex" : "")};
  cursor: pointer;
`;
export const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.p`
  color: ${(props) =>
    props.$highlight ? "#a4ffaf" : props.$button ? "#000000" : props.$Header ? "#817D92" : props.$SubHeader ? "#24232C" : "#e6e5ea"};
  font-size: ${(props) => (props.$highlight ? "1.75rem" : "")};
  text-shadow: ${(props) => (props.$button ? "0px 5px 5px #00000086;" : "")};
  text-align: ${(props)=>(props.$Header ? "center" : "")};
  margin-right:${(props)=>(props.$Indicator ? "1rem" : "")}
  
`;
export const CheckInput = styled.input`
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  height: 1.25rem;
  width: 1.25rem;
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid #e6e5ea;
  position: relative;

  &:hover {
    border: 2px solid #a4ffaf;
  }

  &:checked {
    border: 2px solid #a4ffaf;
    background-color: #a4ffaf;
  }

  &:checked::before {
    content: "";
    position: absolute;
    left: 30%;
    bottom: 10%;
    width: 0.2rem;
    height: 0.75rem;
    border: solid black;
    border-width: 0 0.24rem 0.24rem 0;
    transform: rotate(45deg);
  }
  &:hover {
    cursor: pointer;
  }
`;
export const RangeSlider = styled.input`
  margin-right: 1.25rem;
  margin-bottom: 2.25rem;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: 8px;
  background-color: #24232c;
  outline: none;

  /* track & thumb */
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 8px;
    background: linear-gradient(
      to right,
      #a4ffaf 0%,
      ${(props) => `#a4ffaf ${props.length * 3.33}%`},
      ${(props) => `#18171f ${props.length * 3.33}%`},
      #18171f 100%
    );
  }
  &::-moz-range-track {
    -moz-appearance: none;
    height: 8px;
    background: linear-gradient(
      to right,
      #a4ffaf 0%,
      ${(props) => `#a4ffaf ${props.length * 3.33}%`},
      ${(props) => `#18171f ${props.length * 3.33}%`},
      #18171f 100%
    );
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 35px;
    width: 35px;
    background-color: #e6e5ea;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -15px;
    margin-left: 5px;
  }

  &::-webkit-slider-thumb:hover {
    background-color: #18171f;
    border: 2px solid #a4ffaf;
  }
  &::-moz-range-thumb {
    appearance: none;
    height: 35px;
    width: 35px;
    background-color: #e6e5ea;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -15px;
    margin-left: 5px;
  }

  &::-moz-range-thumb:hover {
    background-color: #18171f;
    border: 2px solid #a4ffaf;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #a4ffaf;
  border: 1px solid #a4ffaf;
  margin-top: 1.5rem;
  padding: 0.25rem;
  text-transform: uppercase;
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  box-sizing: border-box;
  &:hover {
    background-color: #24232c;
    color: #a4ffaf;
    ${Text} {
      color: #a4ffaf;
    }
  }
`;
export const Asci = styled.span`
  margin-left: 2rem;
  display: inline-block;
  font-weight: 700;
  transform: scale(1.25);
`;
export const Indicator = styled.div`
  width: 100%;
  background-color: #18171f;
  margin-top: 1.5rem;
  padding: 0.25rem 1.75rem;
  text-transform: uppercase;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.25rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const Bars = styled.div`
  width: .40rem;
  height: 1.5rem;
  margin-right:.5rem;
  border: 2px solid #e6e5ea;
  background-color: ${(props) =>
    (props.$Strength === "low" ? "#F64A4A" : props.$Strength === "medium" ? "#FB7C58" : props.$Strength === "good"  ? "#F8CD65" : props.$Strength === "high" ? "#A4FFAF":    "#18171f")};
`;
export const BarContainer = styled.div`
align-items:center;
display: flex;
gap: 2.5px;
`
export const Svg = styled.img`
  width:100%;
  height:auto;
` 
export const SvgContainer = styled.div`
    width:2rem;
    height:2rem;
    box-sizing:border-box;
`

export const Password = styled(Form)`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  &:hover{
    cursor: pointer;
    ${Text} {
      color:#817D92;
    }
    ${Svg}{
      filter:grayscale(1);
    }
  }
`
