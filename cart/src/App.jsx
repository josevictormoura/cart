import React from 'react'
import "./App.css"
import Header from './components/Header/Header'
import PageTitle from './components/PageTitle/PageTitle'
import TableRow from './components/TableRow/TableRow'
import Sumary from './components/sumary/Sumary'
import AppContext from './components/Context/AppContext'
import { Context } from './components/Context/Context'

const App = () => {
  return (
    <div>
      <AppContext>
        <Header/>
        <main>
          <PageTitle data='Seu carrinho'/>
          <div className='container'>
            <section className='content-table'>
              <table>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Preco</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <TableRow data={product}/>
                  ))}
                </tbody>
              </table>
            </section>
            <Sumary/>
          </div>
        </main>
      </AppContext>
    </div>
  )
}

export default App
