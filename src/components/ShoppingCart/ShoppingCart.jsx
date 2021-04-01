import React, { Component } from 'react'
import './ShoppingCart.css'
import ShoppingCarItem from './ShoppingCartItem/ShoppingCartItem'

class ShoppingCart extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
            <div className="shopping-cart">
                <h4>Carrinho</h4>
                <div className="shopping-cart__container">
                    <ShoppingCarItem cartItemInfo={ { name: 'Produto 1', count: 2 } } />
                </div>
            </div>
            
            </>
        )
        
    }
}
export default ShoppingCart