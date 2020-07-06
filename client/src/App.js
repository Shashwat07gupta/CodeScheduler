import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ShoppingList from './components/Shoppinglist';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModel';
import { Container } from 'reactstrap';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal />
      <ShoppingList />
      </Container>
    </div>
    </Provider>
  );
}

export default App;
