import React from 'react';
import Header from '../Header/Header';
import PageTile from '../PageTitle/PageTitle';
import TableRow from '../TableRow/TableRow';
import Sumary from '../sumary/Sumary';
import { Context } from '../Context/UseContext';

const Cart = () => {
  const { products } = React.useContext(Context);

  return (
    <>
      <Header />
      <main>
        <PageTile data="Seu carrinho" />
        <div className="container">
          <section className="content-table">
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
                {products.lenght > 0 ? (
                  products.map((product) => <TableRow data={product} />)
                ) : (
                  <tr>
                    <td colSpan="5">Nenhum produto adicionado!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <Sumary />
        </div>
      </main>
    </>
  );
};

export default Cart;
