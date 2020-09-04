import React, {Component} from 'react';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <div className="row">
                <div className="col card-text-left">
                    <img className="card-img-top" src={this.props.img} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">${this.props.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;