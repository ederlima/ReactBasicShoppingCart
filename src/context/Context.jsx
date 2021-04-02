import React from 'react'

const generateProductList = (count) => {
    const produtListAr = []
    for(let i = 1; i < count + 1; i++) {
        produtListAr.push(
            {name: `Produto ${i}`, 
            description: `This is the awesome Product ${i}`, 
            price: `R$ 1${i},00`, 
            thumb: `https://picsum.photos/210/210?${i}`,
            id: `product-${i}`
        })
    }
    return produtListAr
}


const ShoppingContext = React.createContext();


export class Context extends React.Component {

    state = {
        productList: generateProductList(6),
        shoppingCart: []
    }
    addToCart = (product) => {
        let cartClone = [...this.state.shoppingCart]
        if(this.cartHasProduct(product)) {
            console.log('este produto já está no Cart')
            
        } else {
            cartClone.push(product)
        }

        console.log(cartClone)
        this.setState({ ...this.state,
            shoppingCart: cartClone
        })
        //console.log(product)

    }
    cartHasProduct = (product) => {
        return this.state.shoppingCart.filter ( item => item.id === product.id ).length >= 1
    }
    render() {
        const {productList, shoppingCart} = this.state
        const {addToCart} = this
        return (
            <ShoppingContext.Provider value={{ productList, shoppingCart, addToCart }}>
                {
                    this.props.children
                }
            </ShoppingContext.Provider>
        )
    }
}

export default ShoppingContext