import React, { Component } from 'react';
import PokemonDetails from './PokemonDetails';
import { ListGroup, Button } from 'react-bootstrap'
import UpdateDetails from './UpdateDetails';
import AddPokemon from './AddPokemon';

class PokemonList extends Component {
    constructor() {
        super();
        const data = require('../data/pokedex.json');
        this.state = {
            data: data,
            showDetailsModal: false,
            currentValue: '',
            showUpdateModal: false,
            idForUpdate: '',
            showAddModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.sendDetails = this.sendDetails.bind(this);
        this.onValueChanged = this.onValueChanged.bind(this);
        this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
        this.SendIdForUpdate = this.SendIdForUpdate.bind(this);
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.onValueAdded = this.onValueAdded.bind(this);
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
    toggleAddModal() {
        this.setState(state => ({
            showAddModal: !state.showAddModal
        }));
    }

    sendDetails(value) {
        this.toggleModal();
        const newValue = this.state.data.filter((data) => data.id === value.id)
        this.setState({
            currentValue: newValue[0]
        })
    }

    onValueChanged(id,obj) {
       const matchingValue = this.state.data.filter(value=>value.id ===id)
       matchingValue.map(() =>{
            this.setState({
                ...this.state.data[id],
                obj  
            })
      })
    }
    SendIdForUpdate(id) {
        this.toggleUpdateModal();
        this.setState({
            idForUpdate: id
        })
    }

    onValueAdded(obj) {
        this.setState({
            ...this.state.data,
            data: this.state.data.unshift(obj)
        })
    }
    render() {
        console.log(this.state);
        return (
            <div>
                 
                {this.state.data.map((value) =>
                    <ListGroup key={value.id} >
                        <ListGroup.Item
                            onClick={() => this.sendDetails(value)} style={{ cursor: 'pointer', color: 'blue' }}>{value.name.english}
                        </ListGroup.Item>
                         <ListGroup.Item>
                            <Button variant="primary" onClick={()=>this.SendIdForUpdate(value.id)}>Update</Button>  
                        </ListGroup.Item> 
                    </ListGroup>
                )}
                <PokemonDetails
                    show={this.state.showDetailsModal}
                    toggle={this.toggleModal}
                    showDetails={this.state.currentValue}
                    updateValue = {this.onValueChanged}
                />
                 <UpdateDetails
                toggle = {this.toggleUpdateModal}
                show={this.state.showUpdateModal}
                id={this.state.idForUpdate}
                onValuesUpdate = {this.onValueChanged}
                /> 
                <AddPokemon 
                toggle = {this.toggleAddModal}
                show= {this.state.showAddModal}
                id={this.state.data.length + 1}
                onAddPokemon = {this.onValueAdded}
                />
                 <Button variant="primary" onClick={this.toggleAddModal}>Add</Button>
            </div>
        );
    }
}

export default PokemonList;