import React, { Component ,Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/registermodal';
import LoginModal from './auth/loginModal';
import  Logout from './auth/logout';
import change from '.././App';
import ItemModal from './ItemModel';
import ShoppingList from './Shoppinglist';
import Homepage from './Homepage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
class AppNavbar extends Component{
    state = {
        isOpen: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    } 
    render() {
        const { isAuthenticated,user }= this.props.auth;
        
        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{ user ? `Welcome ${user.name}` : ''}</strong>
                    </span> 
                </NavItem>
                   <NavItem>
                                <Logout />                           
                    </NavItem>

            </Fragment>
        );
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        );

        return(
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">
                        CodeScheduler 
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {isAuthenticated ? authLinks : guestLinks } 
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            {isAuthenticated ? <Fragment><ItemModal/><ShoppingList/></Fragment>: <Homepage/>}
        </div>
        );
    }   
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps,null)(AppNavbar);