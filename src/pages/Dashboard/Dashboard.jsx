import { CardOrder } from './CardOrder/CardOrder'
import { Tables } from './Tables/Tables'
import styles from './Dashboard.module.css'
import { InputSelect } from '../../components/Input/Input'
import { useEffect, useState } from 'react'
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
  const [orders, setOrders] = useState([])

  // API GET: OBTENER DATOS DE USUARIOS
  useEffect(() => {
    fetch('/api/orders.json')
      .then(response => response.json())
      .then(result => {
        setOrders(result)
      })
      .catch(error => console.log("Error cargando archivo: ", error))
  }, [])


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
                  <legend>Filtro</legend>
                  <InputSelect
                    label="Ordenar por:"
                    type="text"
                    className="inputPrimary"
                    placeholder=""
                    onChange={(e) => setFilter(e.target.value)}
                    data={FILTERS_BY}
                  />
                  <div className="divFilter">
                    <button type='button' ><i className="fa-solid fa-filter" style={{ width: 25, height: 25 }}></i></button>
                  </div>
                </fieldset>
              </form>

              {orders.map((order) => (
                <CardOrder orders={orders} />
              ))}

            </div>



          </div>
        </div>
      </div>

      <div className="" style={{ display: "flex", flexDirection: "column", background: "black", textAlign: "center" }}>

        <button onClick={logout}>Cerrar sesión</button>
      </div>

    </div>
  )
}