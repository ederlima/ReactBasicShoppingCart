import React from 'react'
import ShoppingContext from '../../../context/Context';
import './ProductItem.css'

class ProductItem extends React.Component {
    
    render() {
        const {name, description, price, thumb, items} = this.props.product;
        const {addToCart, cartHasProduct, removeFromCart, decreaseProductItems, increaseProductItems, updateProduct} = this.context
        return(
            <>
            <div className="product-item">
                <img className="product-item__image" src={thumb} alt={`This is the product ${name}`}/>
                <h3 className="product-item__title">{name}</h3>
                <p className="product-item__desc">{description}</p>
                <p className="product-item__desc"><strong>{price}</strong></p>
                <div className="product-item__control">
                    { !cartHasProduct(this.props.product) 
                        ? <button className="btn__add lg" onClick={ () => addToCart(this.props.product) }>Add to Cart</button> 
                        : <button className="btn__add lg" onClick={ () => removeFromCart(this.props.product) }>Remove from Cart</button> 
                    }
                    
                    {
                        
                        <div className="product-item__cart-control">
                        {/*TODO criar um estado pra quantidade e alterar no produto */}
                        <button className="btn__decrease" onClick={ () => decreaseProductItems(this.props.product)}>-1</button>
                        <input className="product-item__count" type="number" value={items} readOnly />
                        { /*<input className="product-item__count" type="number" value={items} onChange={ (evt) => updateProduct(this.props.product, evt.target.value) } /> */ }
                        <button className="btn__increase" onClick={ () => increaseProductItems(this.props.product) }>+1</button>
                        </div>
                    }
                    
                    
                </div>
            </div>
            </>
        )
    }
}

ProductItem.contextType = ShoppingContext

export default ProductItem