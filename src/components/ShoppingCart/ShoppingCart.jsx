import React, { Component } from 'react'
import './ShoppingCart.css'
import ShoppingCarItem from './ShoppingCartItem/ShoppingCartItem'


class ShoppingCart extends Component {
    
    //const {state, setState} = React.useContext() //TODO APLICAR CONTEXTO

    render() {
        return (
            <>
            <div className="shopping-cart">
                <h4>Shopping Cart</h4>
                <div className="shopping-cart__container">
                    <ShoppingCarItem cartItemInfo={ { name: 'Product 1', count: 2 } } />
                </div>
            </div>
            
            </>
        )
        
    }
}
export default ShoppingCart