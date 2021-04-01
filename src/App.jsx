import React, { useContext } from 'react'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

const generateProductList = (count) => {
    const produtListAr = []
    for(let i = 1; i < count + 1; i++) {
        produtListAr.push(
            {name: `Produto ${i}`, 
            description: `This is the awesome Product ${i}`, 
            price: `R$ 1${i},00`, 
            thumb: `https://picsum.photos/210/210?${i}`},
            )
    }
    return produtListAr
}
const productList = generateProductList(6)

const shoppingContext = React.createContext({
    productList,
    shoppingCart: []
})

const App = () => {


    const {state, setState} = useContext(shoppingContext)

    const addProduct = (product) => {
        setState({
            ...state,
            shoppingCart: [...state.shoppingCart, product]
        })
    }
    const addToCart = (product) => {
         console.log(product)
    }

    return (
        <>
            <header className="app-header">
                <h1 className="app-header__title">Shopping Cart</h1>
            </header>
            <main className="main-container">
                <section className="main-container__content">
                    <ProductList productList={productList} addToCart={addToCart} />
                </section>
                <aside className="main-container__aside">
                    <ShoppingCart />
                </aside>
            </main>
        </>
    )
}
export default App