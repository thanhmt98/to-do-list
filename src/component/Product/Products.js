import React, { Component } from 'react'
import DetailedProducts from './DetailedProducts'

export default class Product extends Component {
    // Mapping
    constructor(props) {
        super(props)

        this.state = {
            products: [
                {
                    img: 'https://images-na.ssl-images-amazon.com/images/I/61w-77mWokL._AC_SL1000_.jpg',
                    name: 'Iphone',
                    price: 300,
                    discount: true,
                },
                {
                    img: 'https://images-na.ssl-images-amazon.com/images/I/61ZuVk8MJkL._AC_SL1200_.jpg',
                    name: 'Samsumg',
                    price: 200,
                    discount: true,
                },
                {
                    img: 'https://m.media-amazon.com/images/I/71aWzx7xEsL._QL65_AC_UL640_.jpg',
                    name: 'Nokia',
                    price: 100,
                    discount: false,
                },
            ]
        };
        
    };

    // Cập nhật và xóa dữ liệu trong Component

    add_product = (name) => {
        var arrProduct = this.state.products;
        arrProduct.push(name);
        this.setState({products: arrProduct});
    }

    edit_product = (id, name) => {
        var arrProduct = this.state.products;
        arrProduct[id].name = name;
        this.setState({products: arrProduct});
    }
    remove_product = (id) => {
        var arrProduct = this.state.products;
        arrProduct.splice(id,1);
        this.setState({products: arrProduct});
    }

    // ----------------------------

    show_products = () => {
        const list_product = this.state.products.map((product, index) =>
            <DetailedProducts
                key = { index }
                index = { index }
                img = { product.img }
                price = { product.price }
                discount = { product.discount }
                edit = {(id, name) => {this.edit_product(id,name)}}
                remove = {(id) => {this.remove_product(id)}}
            >
                { product.name }
            </DetailedProducts>
        )
        return list_product
    }
    // -------------------------
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.show_products()}
                    </div>
                </div>
            </div>
        )
    }   
}
