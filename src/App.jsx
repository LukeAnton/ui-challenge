import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Global/Footer";
import Header from "./components/Global/Header";

import { StyleMainContainer } from "./App.style.jsx";

// Creating Global Styles using styled-components
const GlobalStyles = createGlobalStyle`
* {
      margin: 0;
      box-sizing: border-box;
    }
  
`;

const App = () => {
  return (
    <BrowserRouter>
      <StyleMainContainer className="App">
        <GlobalStyles />
        <Header className="render-font " />
        <Route exact path="/" component={Home} />
        <Footer />
      </StyleMainContainer>
    </BrowserRouter>
  );
};

export default App;
