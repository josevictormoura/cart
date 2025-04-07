import React from 'react';
import styles from './ModalProduct.module.css';
import { Context } from '../Context/UseContext';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import { GET, POST } from '../../api/Api';

const ModalProduct = () => {
  const { modal, setModal } = React.useContext(Context);
  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [price, setPrice] = React.useState('');
  const { setProducts } = React.useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !category || !price) {
      toast.error('Preencha todos os campos!');
      return;
    }

    addToProduct(name, category, price);
  }

  async function addToProduct(name, category, price) {
    try {
      await POST({
        name,
        category,
        price: parseFloat(price),
        quantility: 1,
      });

      const updateProducts = await GET();
      setProducts(updateProducts);

      toast.success('Produto adicionado com sucesso!');
      setName('');
      setCategory('');
      setPrice('');
      setModal(false);
    } catch (error) {
      console.log('Erro ao adicionar produto:', error);
      toast.error('Erro ao adicionar produto. Tente novamente.');
    }
  }

  if (modal) {
    return (
      <div className={styles.modalProduct}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Novo Produto</h2>
          <button
            type="button"
            onClick={() => setModal(false)}
            className={styles.closeForm}
          >
            x
          </button>
          <Input
            id="name"
            type="text"
            value={name}
            setValue={setName}
            label="Nome"
          />
          <Input
            id="category"
            type="text"
            value={category}
            setValue={setCategory}
            label="Categoria"
          />
          <Input
            id="price"
            type="number"
            value={price}
            setValue={setPrice}
            label="Preco"
          />
          <Button bg="blue">Adicionar</Button>
        </form>
        <ToastContainer />
      </div>
    );
  }
  return null;
};

export default ModalProduct;
