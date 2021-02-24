import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Footer from "./components/Global/Footer";
import Header from "./components/Global/Header";

import { StyleMainContainer } from "./App.style.jsx";

// Creating Global Styles using styled-components
const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
;
* {
      margin: 0;
      box-sizing: border-box;
    }
    html,
    body {
      height: 100% !important;
      position: relative;
    font-family: 'Roboto', sans-serif;  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <StyleMainContainer className="App">
        <GlobalStyles />
        <Header />
        <Route exact path="/" component={Home} />
      </StyleMainContainer>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
