import './App.css';
import {Container , Row} from 'react-bootstrap'
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import { useSelector } from "react-redux";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {

  const isLogged = useSelector((state) => state.Sign.Log);
  console.log(isLogged);

  return (
    <div>
        
      <Router>
      <Navigation/>

        <div>
            <Switch>
              <Route exact path="/">
                  <Home/>
                </Route>

                <Route path="/login">
                  <LoginPage/>
                </Route>

                <Route path="/register">
                  <RegisterPage/>
                </Route>

                <Route path="/catalog">
                  <Catalog/>
                </Route>

                <Route path="/cart">
                  { isLogged ?
                    <Cart/>
                    : <LoginPage/>

                  }
                </Route>

                <Route path="/profile">
                  <Profile/>
                </Route>
            </Switch>
        </div>
      </Router>
    
    </div>
  );
}

export default App;
