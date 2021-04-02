import React from 'react'
import './ShoppingCartItem.css'

class ShoppingCartItem extends React.Component {


    render() {
        const { name, count } = this.props.cartItemInfo
        return (
            <>
            <div className="shopping-cart-item">
                <strong>{name}</strong><span className="shopping-cart-item__counter">{count}</span>
            </div>
            </>
        )
    }
}


export default ShoppingCartItem