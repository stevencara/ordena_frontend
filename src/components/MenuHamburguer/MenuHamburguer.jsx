import { useState } from "react"
import styles from './MenuHamburguer.module.css'
import { Link } from "react-router-dom";

export const MenuHamburguer = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="">
      <i className={`fa-solid fa-bars ${styles.icon}`}
        onClick={toggleMenu}
      ></i>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""} `}>
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
          <i class="fa-solid fa-xmark" style={{ color: "white", fontSize: "24px", width: 32, height: 32 }} onClick={toggleMenu}></i>
        </div>
        <ul className={styles.list} onClick={toggleMenu}>
          <li><Link to="/login" >Iniciar Sesión</Link></li>
          <li><Link to="/register" >Regístrate</Link></li>
          <li><Link to="/dashboard" >Mesas</Link></li>
          <li><Link to="/view-orders" >Pedidos</Link></li>
          <li><Link to="/create-order" >Crear pedido</Link></li>
          <li><Link to="/create-user" >Usuarios</Link></li>
          <li><Link to="/menu" >Menú</Link></li>

        </ul>
      </div>

    </div>
  )
}