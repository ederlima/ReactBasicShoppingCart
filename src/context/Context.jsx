import React from 'react'

const generateProductList = (count) => {
    const produtListAr = []
    for(let i = 1; i < count + 1; i++) {
        produtListAr.push(
            {
            name: `Product ${i}`, 
            description: `This is the awesome Product ${i}`, 
            price: `R$ 1${i},00`, 
            thumb: `https://picsum.photos/210/210?${i}`,
            id: `product-${i}`,
            items: 1
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
            cartClone.push({...product})
            console.log(`Produto ${product.name} inserido!`)
        }

        this.setState({ ...this.state,
            shoppingCart: cartClone
        })

    }
    removeFromCart = (product) => {
        let cartClone = [...this.state.shoppingCart]
        if(this.cartHasProduct(product)) {
            product.items = 1
            cartClone = cartClone.filter( item => item.id !== product.id)
            this.setState({
                ...this.state,
                shoppingCart: cartClone
            })
            console.log(`Produto ${product.name} removido!`)
        }
    }
    updateProduct = (product, value) => {
        if(this.getProductIndex(product) > -1) {
            let updatedCart = this.state.shoppingCart
            updatedCart[this.getProductIndex(product)] = product
            this.setState({
                ...this.state,
                shoppingCart: updatedCart
            })
        }
    }
    increaseProductItems = (product) => {
        if(this.cartHasProduct(product)) {
            product.items += 1
            this.updateProduct(product)
        } else {
            product.items = 1
            this.addToCart(product)
        }
    }
    decreaseProductItems = (product) => {
        if(product.items > 1) {
            product.items -= 1
            this.updateProduct(product, product.items)
        } else {
            product.items = 1
            this.removeFromCart(product)
        }
    }
    cartHasProduct = (product) => {
        return this.state.shoppingCart.filter ( item => item.id === product.id ).length >= 1
    }
    getProductIndex = (product) => {
        return this.state.shoppingCart.findIndex( item => item.id === product.id)
    }
    getProduct = (productIndex) => {
        return this.state.shoppingCart[productIndex]
    }
    getCartTotalItems = () => {
        return this.state.shoppingCart.length > 0 ? this.state.shoppingCart.reduce( (acc, item) => acc + item.items, 0) : 0
    }
    render() {
        const {productList, shoppingCart} = this.state
        const {addToCart, cartHasProduct, removeFromCart, increaseProductItems, decreaseProductItems, getCartTotalItems} = this
        return (
            <ShoppingContext.Provider value={{ productList, shoppingCart, addToCart, cartHasProduct, removeFromCart, decreaseProductItems, increaseProductItems, getCartTotalItems }}>
                {
                    this.props.children
                }
            </ShoppingContext.Provider>
        )
    }
}

export default ShoppingContext