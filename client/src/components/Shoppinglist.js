import React, { Component } from 'react'; 
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems,deleteItem } from '../actions/itemactions';
import  PropTypes from 'prop-types';
class ShoppingList extends Component{

    static propTypes = {
        getItems : PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount(){
        this.props.getItems();   
    }
    onDeleteClick = (id)=>{
        this.props.deleteItem(id);
    };
    render(){
        const { items } = this.props.item;
        return(
            <div>
            <Container>
                <ListGroup>
                    <TransitionGroup classname="shopping-list">
                        {   console.log(items)}
                        {
                            items.map(({_id,name,link,remarks})=>(
                            <CSSTransition key={_id} timeout = {500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this,_id)}
                                    >&times;
                                    </Button>
                                    {name} <a href={"//"+link}>{link}</a> {remarks}
                                </ListGroupItem>
                            </CSSTransition> 
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>

        
            </div>
        );
    }
}


const mapStateToProps =(state) =>({
    item: state.item,
    isAuthenticated : state.auth.isAuthenticated
});

export default connect( mapStateToProps,
    { getItems, deleteItem }
    )(ShoppingList);