import React,{ Component,Fragment } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ShoppingList from './components/Shoppinglist';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModel';
//import RegisterModal from './components/auth/registermodal';
//import LoginModal from '.components/auth/loginModal';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authActions';
import Homepage from './components/Homepage';
import PropTypes from 'prop-types';
import RegisterModal from './components/auth/registermodal';
import LoginModal from './components/auth/loginModal';
import  Logout from './components/auth/logout';
import { login } from './actions/authActions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
//let =true;
const loggedIn = {
  isAuthenticated: false
}
/*export const change =() =>{
  console.log("f******g finally....");
  loggedIn.isAuthenticated = true;
} */
class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser);
  }
  render(){
  ///login(changeLoggedin(loggedIn));
  
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
        </Container>
      </div>
    </Provider>
  );
  }
}
export default App;