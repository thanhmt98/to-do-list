import React, {Component} from 'react';
import Product from './Product';

class Props extends Component {
    render() {
        var products = [
            {
                id: 1,
                img: "https://m.media-amazon.com/images/I/71aWzx7xEsL._QL65_AC_UL640_.jpg",
                title: "Phone1",
                price: 199.99,     
            },
            {
                id: 2,
                img: "https://images-na.ssl-images-amazon.com/images/I/61w-77mWokL._AC_SL1000_.jpg",
                title: "Phone2",
                price: 129.00,     
            },
            {
                id: 3,
                img: "https://images-na.ssl-images-amazon.com/images/I/61ZuVk8MJkL._AC_SL1200_.jpg",
                title: "Phone3",
                price: 84.99,     
            },
        ];
    
        let elements = products.map((product, index) =>{
            return <Product key={index}
                        img={product.img}
                        title={product.title}
                        price={product.price}
                    />
        });

        return (
            <div>
                <nav className="">
                    <a className="">Active link</a>
                    <a className="" >Link</a>
                </nav>
            
                <div className="row">
                    { elements }
                </div>
            </div>
        );
    }
}
export default Props
