import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Footer from "./components/Global/Footer";
import Header from "./components/Global/Header";
import CardState from "./context/card/CardState";

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
      <CardState>
        <StyleMainContainer className="App">
          <GlobalStyles />
          <Header />
          <Route exact path="/" component={Home} />
          <Footer />
        </StyleMainContainer>
      </CardState>
    </BrowserRouter>
  );
};

export default App;
