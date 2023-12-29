import GeneratedPassword from "./components/GeneratedPassword";
import PasswordOptions from "./components/PasswordOptions";
import Credits from "./components/Credits";
import Modal from "./components/Modal";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
 body {
    display: flex;
    justify-content: center;
    background-color: #18171f;
    color: #e6e5ea;
    font-family: 'JetBrains Mono', monospace;
  }
`;

function App() {
  const [params, setParams] = useState({});
  return (
    <>
      <GlobalStyle />
      <div>
        <GeneratedPassword params={params} />
        <PasswordOptions setParams={setParams} />
        <Credits />
      </div>
    </>
  );
}

export default App;
