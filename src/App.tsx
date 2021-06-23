import React from "react";
import { Home } from "./pages/home";
import { NewRoom } from "./pages/newRoom";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
  <>
      <GlobalStyle />
      <NewRoom/> 
  </>
  );
}

export default App;
