
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import { Home } from "./pages/home";
import { NewRoom } from "./pages/newRoom";
import { Room } from './pages/room';

import { GlobalStyle } from "./styles/global";

import {AuthContextProvider} from './contexts/AuthContext'



function App() {


  return (
  <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rooms/new" exact component={NewRoom}/>
            <Route path="/rooms/:id" exact component={Room}/>
          </Switch>

        </AuthContextProvider>
      </BrowserRouter>
  </>
  );
}

export default App;
