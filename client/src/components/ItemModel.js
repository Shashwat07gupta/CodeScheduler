import React,{ Component, Fragment } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemactions';
import  PropTypes from 'prop-types';
class ItemModal extends Component{
    state = {
        modal: false,
        name: ''
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = ()=>{
        this.setState({
            modal: !this.state.modal
        });
    };
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value });
    };

    onSubmit = (e) => { 
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }

        //Add item via addItem action

        this.props.addItem(newItem);
        //Close the Modal
        this.toggle();
    };
    render(){
        return (
            <div>
            <div backgroundColor= "white">
                 <Fragment ><Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                    >
                    Add Item
                </Button>
                < Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>
                        Add  a Problem
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="problem name">
                                    Problem name
                                </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add Problem name"
                                    onChange={this.onChange}
                                />
                                <Button 
                                    color = "dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal> </Fragment> 
            </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps,{addItem})(ItemModal);