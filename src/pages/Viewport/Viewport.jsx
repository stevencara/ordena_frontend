import { CardOrder } from './CardOrder/CardOrder'
import { Tables } from './Tables/Tables'
import styles from './Viewport.module.css'

export const Viewport = () => {
  return (
    <div className="background">

      <div className="container">
        <h1>Mesas</h1>
        <div className="contentFlex">

          {/* Modulo mesas*/}
          <div className="module">
            <Tables />
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
            <CardOrder />
            <CardOrder />
          </div>

        </div>
      </div>
    </div>
  )
}