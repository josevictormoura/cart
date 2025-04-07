import React from 'react';
import styles from './Sumary.module.css';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Button from '../Button/Button';

const Sumary = () => {
  return (
    <section className={styles.sumary}>
      <div className={styles.sumaryContainer}>
        <p className={styles.resume}>Resumo da compra</p>
        <div className={styles.subTotal}>
          <p>Sub total</p>
          <p>R$ 418</p>
        </div>
        <div className={styles.frete}>
          <p>Frete</p>
          <p>Gratuito</p>
        </div>
        <button className={styles.cupomDesconto}>
          <span>Adicionar cupom de desconto</span>
          <IoIosArrowRoundForward className={styles.iconArrow} />
        </button>
        <div className={styles.total}>
          <p>Total</p>
          <p>R$ 418</p>
        </div>
      </div>
      {/* <button className={styles.btnFinishOrder}>FINALIZAR COMPRA</button> */}
      <Button width="100%" bg="green">
        FINALIZAR COMPRA
      </Button>
    </section>
  );
};

export default Sumary;
