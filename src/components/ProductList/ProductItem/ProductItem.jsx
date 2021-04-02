import React from 'react'
import ShoppingContext from '../../../context/Context';
import './ProductItem.css'

class ProductItem extends React.Component {
    
    render() {
        const {name, description, price, thumb, items} = this.props.productInfo;
        const {addToCart, cartHasProduct, removeFromCart, updateProduct} = this.context
        return(
            <>
            <div className="product-item">
                <img className="product-item__image" src={thumb} alt={`This is the product ${name}`}/>
                <h3 className="product-item__title">{name}</h3>
                <p className="product-item__desc">{description}</p>
                <p className="product-item__desc"><strong>{price}</strong></p>
                <div className="product-item__control">
                    { !cartHasProduct(this.props.productInfo) 
                        ? <button className="btn__add lg" onClick={ () => addToCart(this.props.product) }>Add to Cart</button> 
                        : <button className="btn__add lg" onClick={ () => removeFromCart(this.props.product) }>Remove from Cart</button> 
                    }
                    
                    {
                        
                        <div className="product-item__cart-control">
                        {/*TODO criar um estado pra quantidade e alterar no produto */}
                        <button className="btn__decrease" onChange={ () => updateProduct(this.props.productInfo, this.props.productInfo.items-1)}>-1</button>
                        <input className="product-item__count" type="number" value={items}/>
                        <button className="btn__increase">+1</button>
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