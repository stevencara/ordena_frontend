import { CardOrder } from './CardOrder/CardOrder'
import { Tables } from './Tables/Tables'
import styles from './Dashboard.module.css'
import { InputSelect } from '../../components/Input/Input'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Products } from '../Products/Products'
import { Users } from '../Users/Users'
import { ViewOrders } from '../ViewOrders/ViewOrders'
import { Register } from '../Register/Register'
import { Orders } from '../Orders/Orders'
import { Index } from '../Index/Index'

export const Dashboard = () => {
  const [filter, setFilter] = useState("")
  const { user, logout } = useAuth()

  const FILTERS_BY = ["Más reciente", "Más antiguos", "Mayor precio", "Menor precio"]


  return (
    <div className="background">

      <div className="container">
        <div className="container-form">
          <h1>Mesas</h1>
          <div className="container-flex">

            {/* Modulo mesas*/}
            <div className="module">
              <Tables />
            </div>

            {/* Modulo pedidos asociados a mesa*/}
            <div className="module">

              <form>
                <fieldset className="form-flex">
                  <legend></legend>
                  <InputSelect
                    label="Tipo de comida"
                    type="text"
                    className="inputPrimary"
                    placeholder=""
                    onChange={(e) => setFilter(e.target.value)}
                    data={FILTERS_BY}
                  />
                  <div className={styles.divFilter}>
                    <button type='button' ><i className="fa-solid fa-filter" style={{ width: 25, height: 25 }}></i></button>
                  </div>
                </fieldset>
              </form>
              <CardOrder />
            </div>



          </div>
        </div>
      </div>

      <div className="" style={{ display: "flex", flexDirection: "column", background: "black", textAlign: "center" }}>
        <h2 style={{ color: "white" }}>Bienvenido {user.nombre}</h2>
        <p style={{ color: "white" }}>Rol: {user.rol}</p>
        <button onClick={logout}>Cerrar sesión</button>
      </div>

    </div>
  )
}