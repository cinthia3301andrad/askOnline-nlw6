
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import { Home } from "./pages/home";
import { NewRoom } from "./pages/newRoom";
import { Room } from './pages/room';

import { GlobalStyle } from "./styles/global";

import {AuthContextProvider} from './contexts/AuthContext'
import { AdminRoom } from './pages/adminRoom';



function App() {


  return (
  <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rooms/new" exact component={NewRoom}/>
            <Route path="/rooms/:id"  component={Room}/>
            <Route path="/admin/rooms/:id"  component={AdminRoom}/>
          </Switch>

        </AuthContextProvider>
      </BrowserRouter>
  </>
  );
}

export default App;
