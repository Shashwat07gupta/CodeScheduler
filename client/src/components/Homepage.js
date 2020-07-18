import React,{ Component,Fragment } from 'react'; 
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

import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';
class Homepage extends Component{
    render(){
        return (
                <div>
                <div className={styles.text}>
                    <h1>CodeScheduler</h1>
                    <h4>A place to schedule your coding practice!</h4>
                </div>
            </div>

        );
    }
}

export default Homepage;