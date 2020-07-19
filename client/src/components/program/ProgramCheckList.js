import React from 'react';
import styles from './programList.module.css';

// что в программе 
export default function () {
  return (
      <>
        <div>
          <h5 className="card-title mt-4" > План программы:</h5>
          <ol className={styles.ol}>
            <li className={styles.li}>Полное сопровождение</li>
            <li className={styles.li}>Календарь приема</li>
            <li className={styles.li}>Полное сопровождение </li>
            <li className={styles.li}>Полное сопровождение </li>
            <li className={styles.li}>Для вас будет сформирован личный лист закупки</li>
          </ol>
        </div>
      </>

  )
}
