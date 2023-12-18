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
    props.$highlight ? "#a4ffaf" : props.$button ? "#000000" : "#e6e5ea"};
  font-size: ${(props) => (props.$highlight ? "1.75rem" : "")};
  text-shadow: ${(props) => (props.$button ? "0px 5px 5px #00000086;" : "")};
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
  & ::-moz-range-track {
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
    height: 20px;
    width: 20px;
    background-color: #e6e5ea;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -5px;
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

export const Indicator = styled.div``;