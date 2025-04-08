import React from 'react';
import Header from '../Header/Header';
import PageTile from '../PageTitle/PageTitle';
import TableRow from '../TableRow/TableRow';
import Sumary from '../sumary/Sumary';
import { Context } from '../Context/UseContext';
import { DELETE, GET } from '../../api/Api';
import ModalProduct from '../modalProduct/ModalProduct';
import Button from '../Button/Button';
import { toast, ToastContainer } from 'react-toastify';

const Cart = () => {
  const { setModal } = React.useContext(Context);
  const { products, setProducts } = React.useContext(Context);

  const fetchProducts = React.useCallback(async () => {
    try {
      const getProducts = await GET();
      setProducts(getProducts);
    } catch (error) {
      console.log('Erro ao buscar produto', error);
      toast.error('Erro ao carregar produto');
    }
  }, [setProducts]);

  const handleDeleteProduct = async (id) => {
    console.log(id);
    await DELETE(id);
    fetchProducts();
  };

  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <Header />
      <main>
        <PageTile data="Seu carrinho" />
        <div className="container">
          <section className="content-table">
            <Button bg="blue" onClick={() => setModal(true)}>
              Adicionar produto
            </Button>
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
                {products && products.length > 0 ? (
                  products.map((product) => (
                    <TableRow
                      key={product._id}
                      data={product}
                      handleDeleteProduct={handleDeleteProduct}
                    />
                  ))
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
        <ModalProduct />
      </main>
      <ToastContainer />
    </>
  );
};

export default Cart;
