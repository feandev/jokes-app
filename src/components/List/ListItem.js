import React from 'react';
import styles from './ListItem.module.scss';

const ListItem = ({ content, url, type, source }) => {

  return (
    <>
      <li className={styles.item}>
        {
          type === 'text' ? (

            <p className={styles.text}>"{content}"</p>
          ) : (

            <img src={url} className={styles.image} alt='img' ></img>
          )
        }
        <p className={styles.source}>- {source}</p>
      </li>
    </>
  )
}

export default ListItem;