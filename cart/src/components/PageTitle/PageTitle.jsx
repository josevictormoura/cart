import React from 'react'
import styles from './PageTitle.module.css'

const PageTitle = ({data}) => {
  return (
    <div>
      <span className={styles.title}>{data}</span>
    </div>
  )
}

export default PageTitle
