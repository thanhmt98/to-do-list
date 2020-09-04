import React, { Component } from 'react'
import './DetailedProducts.css'

export default class DetailedProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing : false
        }
        
    }

    discount_20 = (discount) => {
        if(discount === true) {
            return <p className="card-text">{ this.props.price}$ == { this.props.price-20}$</p>
        }
        else {
            return <p className="card-text">{ this.props.price}$</p>
        }
    }
    
    show_info = (message) => {
        alert(message)
    }

    // Set State-------- Ref----------------------------

    buttonEdit = () => {
        this.setState({editing: true});
    }

    buttonSave = () => {
        this.setState({editing: false});
        this.props.edit(this.props.index, this.txtName.value);
    }

    buttonRemove = () => {
        this.props.remove(this.props.index);
    }

    buttonAdd = () => {

    }

    renderEditing = () => {
        return <div className="col-md-12 product_edit_remove">
                    <div className="form-group">
                        <button onClick={() => this.buttonEdit()} className="btn btn-info">Edit</button>
                        <button onClick={() => this.buttonRemove()} className="btn btn-danger">Remove</button>
                    </div>
                </div>
    }

    renderSave = () => {
        return <div className="col-md-12">
                    <div className="form-group">
                        <input ref={(input) => {this.txtName = input}} defaultValue={this.props.children} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button onClick={() => this.buttonSave()} className="btn btn-danger">Save</button>
                    </div>
                </div>
    }

    show_button = () => {
        if(this.state.editing === false) {
            return this.renderEditing();
        } else {
            return this.renderSave();
        }
    }
    // --------------------------------------------------------

    render() {

        return (
            <div className="product">
                <div className="col">
                    <div className="card text-left">
                        <img className="card-img-top product_image" src={ this.props.img } alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{ this.props.children }</h4>
                            { this.discount_20(this.props.discount) }
                            <button onClick={ () => this.show_info(this.props.children) } type="button" className="btn btn-primary">More</button>
                        </div>
                        
                        {this.show_button()}

                        
                        <button className="btn btn-danger">Add Product</button>
                    </div>
                </div>
            </div>
        )
    }
}
