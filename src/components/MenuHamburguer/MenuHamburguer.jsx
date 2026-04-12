import { useState } from "react"
import styles from './MenuHamburguer.module.css'
import { Link } from "react-router-dom";

export const MenuHamburguer = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div style={{ display: "block", width: "100%", height: "100%" }}>
      <i className={`fa-solid fa-bars ${styles.icon}`}
        onClick={toggleMenu}
      ></i>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""} `}>
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
          <i className={"fa-solid fa-xmark"} style={{ color: "white", fontSize: "24px", width: 32, height: 32 }} onClick={toggleMenu}></i>
        </div>
        <ul onClick={toggleMenu}>
          <Link to="/login" ><li className={styles.menuItem}>Iniciar Sesión</li></Link>
          <Link to="/register"  ><li className={styles.menuItem} >Regístrate</li></Link>
          <Link to="/dashboard"  ><li className={styles.menuItem} >Mesas</li></Link>
          <Link to="/view-orders"  ><li className={styles.menuItem} >Pedidos</li></Link>
          <Link to="/create-order"  ><li className={styles.menuItem} >Crear pedido</li></Link>
          <Link to="/create-user"  ><li className={styles.menuItem} >Usuarios</li></Link>
          <Link to="/menu"  ><li className={styles.menuItem} >Menú</li></Link>

        </ul>
      </div>

    </div>
  )
}