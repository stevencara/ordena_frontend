import styles from './CardOrder.module.css'
import { Button } from '../../../components/Button/Button'

export const CardOrder = ({ orderDetails = [], currentOrder, handleCreateOrder, handleDeleteProduct }) => {


  const totalResumen =
    orderDetails?.reduce(
      (acc, product) => acc + (Number(product.price) * product.quantity),
      0
    )

  return (
    <div className={styles.cardOrder}>

      {/* ENCABEZADO */}
      <h2 className={styles.cardTitle}>
        {currentOrder
          ? `Mesa ${currentOrder.table_number} - Pedido #${currentOrder.id}`
          : 'Pedido sin crear'}
      </h2>

      <div className={styles.state}>
        {currentOrder?.state || 'SIN PEDIDO'}
      </div>

      <label className={styles.labelCardItem}>Mesero: </label>
      <span className={styles.spanCardItem}>Maria Isabel Perez</span>
      <br />

      <label className={styles.labelCardItem}>Fecha: </label>
      <span className={styles.spanCardItem}> {
        currentOrder?.created_at ?
          new Date(currentOrder.created_at)
            .toLocaleDateString() : '---'}
      </span>

      {/* TABLA DE PRODUCTOS */}
      <table className={styles.tableOrder}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cant.</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.length === 0
            ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  Sin productos agregados
                </td>
              </tr>
            )
            : orderDetails.map((product) => (
              <tr key={product.product_id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${Number(product.price).toLocaleString()}</td>
                <td>${(Number(product.price) * product.quantity).toLocaleString()}</td>
                <td>
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDeleteProduct(product.product_id)}
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3"><strong>Total</strong></td>
            <td colSpan="1"><strong>$ {totalResumen.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>

      {/* OBSERVACIONES: solo mostrar las que tengan descripción */}
      {orderDetails.some(p => p.description) && (
        <>
          <p>Observaciones</p>
          <ul className={styles.description}>
            {orderDetails
              .filter(p => p.description)
              .map((product) => (
                <li key={product.product_id}>
                  <strong>{product.name}:</strong> {product.description}
                </li>
              ))}
          </ul>
        </>
      )}

      {/* ACCIONES */}
      <div className={styles.divActionsOrder}>
        <Button className='btnDelete' text='Eliminar pedido' />
        <Button
          className='btnUpdate'
          text={currentOrder ? 'Actualizar' : 'Crear pedido'}
          onClick={handleCreateOrder}
        />
      </div>

    </div>
  )
}