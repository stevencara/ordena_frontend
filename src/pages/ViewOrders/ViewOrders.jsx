import { CardOrder } from '../Dashboard/CardOrder/CardOrder'
import { Tables } from '../Dashboard/Tables/Tables'
import { OrderItem } from './OrderItem/OrderItem'
import styles from './ViewOrders.module.css'

export const ViewOrders = () => {
  return (
    <div className="background">

      <div className="container">
        <h1>Ver pedidos</h1>
        <div className="contentFlex">

          {/* Modulo mesas*/}
          <div className="module">
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>  
          </div>

          {/* Modulo pedidos asociados a mesa*/}
          <div className="module">
            <form action="" className="formFlex">
              <label htmlFor="filter-orders">Filtrar por:
                <select name="" id="filter-orders" className={styles.inputTable}>
                  <option value="">Más reciente</option>
                  <option value="">Más antiguos</option>
                  <option value="">Mayor precio</option>
                  <option value="">Menor precio</option>
                </select>
              </label>
              <div className={styles.divFilter}>
                <button type='button' ><i className="fa-solid fa-filter" style={{ width: 25, height: 25 }}></i></button>
              </div>
            </form>
            <CardOrder />
          </div>

        </div>
      </div>
    </div>
  )
}