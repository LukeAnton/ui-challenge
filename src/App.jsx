import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./pages/Home";

// Creating Global Styles using styled-components
const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
;
  body {
    font-family: 'Roboto', sans-serif;  }
`;

//Calling mock server using axios

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
};

export default App;
