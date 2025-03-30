import React from 'react'
import styles from './TableRow.module.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { RiDeleteBin2Line } from "react-icons/ri";
import { formatCurrancy } from '../utils/formatCurrancy';

const TableRow = ({data}) => {
  const {name, category, price, quant} = data
  return (
    <tr>
      <td>
        <div className={styles.product}>
          <img src="https://picsum.photos/100/200" />
          <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <p className={styles.category}>{category}</p>
          </div>
        </div>
      </td>
      <td>{formatCurrancy(data.price, "BRL")}</td>
      <td>
        <div className={styles.quant}>
          <button className={styles.btn}>
            <IoIosRemoveCircleOutline className={`${styles.icon} ${styles.iconMinus}`}/>
          </button>
          <span className={styles.quantValue}>{quant}</span>
          <button className={styles.btn}>
            <IoIosAddCircleOutline className={`${styles.icon} ${styles.iconPlus}`}/>
          </button>
        </div>
      </td>
      <td>{formatCurrancy((price * quant), "BRL")}</td>
      <td>
        <button className={styles.btnRemove}>
          <RiDeleteBin2Line className={styles.iconRemove}/>
        </button>
      </td>
    </tr>
  )
}

export default TableRow
