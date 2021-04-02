import React from 'react'
import './ProductList.css'
import ProductItem from './ProductItem/ProductItem'
import ShoppingContext from '../../context/Context'

class ProductList extends React.Component {

    render() {
        console.log(this.context)
        const {productList, shoppingCart, addToCart} = this.context
        return (
            <>
                <div className="product-list">
                    <h2>Product List</h2>
                    <p>Add items to cart</p>
                    <div className="product-list__container">
                        {
                            productList.map(
                                (product, key) => 
                                <ProductItem 
                                    addToCart={() => addToCart(product)}
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

ProductList.contextType = ShoppingContext

export default ProductList