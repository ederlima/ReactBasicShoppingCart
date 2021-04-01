import React from 'react'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'


const productList = [
    {name: 'Produto 1', description: 'This is the awesome Product 1', price: 'R$ 10,00', thumb: 'https://picsum.photos/210/210?1'},
    {name: 'Produto 2', description: 'This is the awesome Product 2', price: 'R$ 10,00', thumb: 'https://picsum.photos/210/210?2'},
    {name: 'Produto 3', description: 'This is the awesome Product 3', price: 'R$ 10,00', thumb: 'https://picsum.photos/210/210?3'},
    {name: 'Produto 4', description: 'This is the awesome Product 4', price: 'R$ 10,00', thumb: 'https://picsum.photos/210/210?4'},
    {name: 'Produto 5', description: 'This is the awesome Product 5', price: 'R$ 10,00', thumb: 'https://picsum.photos/210/210?5'},
    {name: 'Produto 6', description: 'This is the awesome Product 6', price: 'R$ 10,00', thumb: 'https://picsum.photos/210/210?6'},
]


const App = () => {
    return (
        <>
            <header className="app-header">
                <h1 className="app-header__title">Shopping Cart</h1>
            </header>
            <main className="main-container">
                <section className="main-container__content">
                    <ProductList productList={productList} />
                </section>
                <aside className="main-container__aside">
                    <ShoppingCart />
                </aside>
            </main>
        </>
    )
}
export default App