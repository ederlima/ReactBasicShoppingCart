import React from 'react'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import { Context } from './context/Context'


//const ShoppingContext = React.createContext(state)

const App = () => {
   
    
    return (
            <Context>
                <header className="app-header">
                        <h1 className="app-header__title">Shopping Cart</h1>
                    </header>
                    <main className="main-container">
                        <section className="main-container__content">
                            <ProductList />
                        </section>
                        <aside className="main-container__aside">
                            <ShoppingCart />
                        </aside>
                </main>
            </Context>
    )
}
export default App