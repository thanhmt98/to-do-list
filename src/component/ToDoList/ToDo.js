import React, { Component } from 'react'
import ToDoInput from '../ToDoList/ToDoInput';
import ToDoList from '../ToDoList/ToDoList';
import uuid from 'uuid';


export default class ToDo extends Component {
    state = {
        items: [],
        id: uuid(),
        item: '',
        editItem: false
    }

    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    }
    // Update 
    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.item,
        }

        // console.log(newItem);
        const updateItems = [...this.state.items, newItem];

        this.setState({
            items: updateItems,
            item: '',
            id: uuid(),
            editItem: false
        })
    }

    handleClear = () => {
        this.setState({
            items: []
        })
    }

    handleDelete = (id) => {
        const fiteredItems = this.state.items.filter(item => item.id !== id)
        this.setState({
            items:fiteredItems
        })
    }

    handleEdit = (id) => {
        const fiteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);

        this.setState({
            items: fiteredItems,
            item: selectedItem.title,
            editItem: true,
            id: id
        })
    }

    render() {
        return (
            <div className="col-10 mx-auto col-md-8 mt-4">
                <h3 className="text-capitalize text-center">Todo Input</h3>   
                <ToDoInput
                    item = { this.state.item }
                    handleChange = { this.handleChange }
                    handleSubmit = { this.handleSubmit } 
                    editItem = {this.state.editItem}
                />   
                <ToDoList 
                    items = {this.state.items}
                    handleClear = {this.handleClear}
                    handleDelete = {this.handleDelete}
                    handleEdit = {this.handleEdit}
                />
            </div>
        )
    }
}
