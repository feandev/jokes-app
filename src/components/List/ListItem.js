import { style } from '@mui/system';
import React from 'react';
import styles from './ListItem.module.scss';

const ListItem = ({ content, type }) => {

  return (
    <>
      <li className={styles.item}>
        {
          type === 'text' ? (

            <p className={styles.text}>"{content}"</p>
          ) : (

            <img src={content} className={styles.image} alt='img' ></img>
          )
        }
      </li>
    </>
  )
}

export default ListItem;