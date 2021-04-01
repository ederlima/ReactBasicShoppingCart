import React from 'react'
import './ProductList.css'
import ProductItem from './ProductItem/ProductItem'


class ProductList extends React.Component {

    render() {
        return (
            <>
                <div className="product-list">
                    <h2>Product List</h2>
                    <p>Add items to cart</p>
                    <div className="product-list__container">
                        {
                            this.props.productList.map(
                                (product, key) => 
                                <ProductItem 
                                    addToCart={this.props.addToCart}
                                    product={product}
                                    key={key} 
                                    productInfo={{ name: product.name, description: product.description, price: product.price, thumb: product.thumb }}
                                />)
                        }

                    </div>
                </div>
                
            </>
        )
    }

}

export default ProductList