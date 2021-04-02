import React, { Component } from 'react'
import ShoppingContext from '../../context/Context'
import './ShoppingCart.css'
import ShoppingCarItem from './ShoppingCartItem/ShoppingCartItem'


class ShoppingCart extends Component {
    
    //const {state, setState} = React.useContext() //TODO APLICAR CONTEXTO

    render() {

        const {shoppingCart} = this.context

        return (
            <>
            <div className="shopping-cart">
                <h4>Shopping Cart</h4>
                <div className="shopping-cart__container">
                    { shoppingCart.map( (item, key) => <ShoppingCarItem key={key} cartItemInfo={ { name: item.name, count: item.items } } />) }
                </div>
            </div>
            
            </>
        )
        
    }
}

ShoppingCart.contextType = ShoppingContext

export default ShoppingCart