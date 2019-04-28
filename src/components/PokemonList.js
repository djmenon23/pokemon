import React, { Component } from 'react';
import PokemonDetails from './PokemonDetails';
import { ListGroup, Button } from 'react-bootstrap'
import UpdateDetails from './UpdateDetails';

class PokemonList extends Component {
    constructor() {
        super();
        const data = require('../data/pokedex.json');
        this.state = {
            data: data,
            showDetailsModal: false,
            currentValue: '',
            showUpdateModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.sendDetails = this.sendDetails.bind(this);
        this.onValueChanged = this.onValueChanged.bind(this);
        this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
    }
    toggleModal() {
        this.setState(state => ({
            showDetailsModal: !state.showDetailsModal
        }));
    }
    toggleUpdateModal() {
        this.setState(state => ({
            showUpdateModal: !state.showUpdateModal
        }));
    }

    sendDetails(value) {
        this.toggleModal();
        const newValue = this.state.data.filter((data) => data.id === value.id)
        this.setState({
            currentValue: newValue[0]
        })
    }

    onValueChanged(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState(prevState => ({
            ...prevState.currentValue.name,
            [name]: value
        }))
    }
    render() {
        return (
            <div>
                {this.state.data.map((value) =>
                    <ListGroup key={value.id} row>
                        <ListGroup.Item
                            onClick={() => this.sendDetails(value)} style={{ cursor: 'pointer', color: 'blue' }}>{value.name.english}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary" onClick={this.toggleUpdateModal}>Update</Button>  
                        </ListGroup.Item>
                    </ListGroup>
                )}
                <PokemonDetails
                    show={this.state.showDetailsModal}
                    toggle={this.toggleModal}
                    showDetails={this.state.currentValue}
                />
                <UpdateDetails
                toggle = {this.toggleUpdateModal}
                show={this.state.showUpdateModal}/>
            </div>
        );
    }
}

export default PokemonList;