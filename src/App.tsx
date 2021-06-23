import firebase from 'firebase';
import { createContext, useEffect, useState } from 'react';
import {Route, BrowserRouter} from 'react-router-dom'

import { Home } from "./pages/home";
import { NewRoom } from "./pages/newRoom";
import { auth } from './services/firebase';

import { GlobalStyle } from "./styles/global";

import {AuthContextProvider} from './contexts/AuthContext'


function App() {


  return (
  <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms/new" exact component={NewRoom}/>
        </AuthContextProvider>
      </BrowserRouter>
  </>
  );
}

export default App;
