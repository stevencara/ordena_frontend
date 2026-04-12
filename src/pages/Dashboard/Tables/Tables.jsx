import { useEffect, useState } from 'react';
import styles from './Tables.module.css';

export const Tables = () => {

  const [tables, setTables] = useState([]);

  useEffect(() => {
    fetch('/api/tables.json')
    .then(response => response.json())
    .then(result => {
      setTables(result)
    })
  })

  return (
    <div>
      <form action="" className="formFlex">
        <label htmlFor="table-id">N° de mesa
          <input type="number" id="table-id" className={styles.inputTable} />
        </label>
        <label htmlFor="order-id">N° de pedido
          <input type="number" id="order-id" className={styles.inputTable} />
        </label>
        <div className={styles.divSearch}>
          <button type='button' ><i className="fa-solid fa-magnifying-glass" style={{ width: 25, height: 25 }}></i></button>
        </div>
      </form>

      <div className={styles.gridTables}>
        {tables.map((table) => (
          <div key={table.number} className={styles.tableItem}>{table.number}</div>
        ))}
      </div>
    </div>
  )
}