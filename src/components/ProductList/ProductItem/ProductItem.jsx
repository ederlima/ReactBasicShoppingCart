import React from 'react'
import './ProductItem.css'

class ProductItem extends React.Component {

    render() {
        const {name, description, price, thumb} = this.props.productInfo;
        return(
            <>
            <div className="product-item">
                <img className="product-item__image" src={thumb} alt={`This is the product ${name}`}/>
                <h3 className="product-item__title">{name}</h3>
                <p className="product-item__desc">{description}</p>
                <p className="product-item__desc"><strong>{price}</strong></p>
                <div className="product-item__control">
                    <button className="btn__add lg">Add To Cart</button>
                    <div className="product-item__cart-control">
                        <button className="btn__decrease">-1</button>
                        <input className="product-item__count" type="text"/>
                        <button className="btn__increase">+1</button>
                    </div>
                    
                </div>
            </div>
            </>
        )
    }
}

export default ProductItem