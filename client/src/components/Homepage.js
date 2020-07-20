import React,{ Component,Fragment } from 'react'; 
import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';
class Homepage extends Component{
    render(){
        return (
            <Fragment>
                <div className={styles.img}>
                <div className={styles.text}>
                    <h1>CodeScheduler</h1>
                    <h4>A place to schedule your coding practice!</h4>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Homepage;