import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.text}>Carrinho de compras</span>
    </header>
  )
}

export default Header
