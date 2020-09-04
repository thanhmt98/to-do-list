import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

export default class ToDoList extends Component {
    render() {
        const { items, handleClear, handleDelete, handleEdit } = this.props

        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">ToDoList</h3>
                {
                    items.map(item => {
                        return <ToDoItem 
                                    key = {item.id} 
                                    title = {item.title} 
                                    handleDelete = {() => handleDelete(item.id)}
                                    handleEdit = { () => handleEdit(item.id) }
                                />
                    })
                }
                <button onClick={handleClear} type="button" className="btn btn-danger btn-block text-capitalize mt-5">
                    Clear List
                </button>
            </ul>
        )
    }
}
