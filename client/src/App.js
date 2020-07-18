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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser);
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
}
privateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        this.props.auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/list",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
  render(){
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
        <Router>
          <Switch>
           <Route exact path='/profile' component={()=> <Fragment><ItemModal/><ShoppingList/></Fragment> } / >
           </Switch>
         <Switch>
  <Route exact path='/home' component={()=> <Homepage/> } / >
         </Switch>
        </Router>
        </Container>
      </div>
    </Provider>
  );
  }
}
export default App;