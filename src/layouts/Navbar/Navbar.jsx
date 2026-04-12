import { MenuHamburguer } from "../../components/MenuHamburguer/MenuHamburguer"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav >
      <ul className={styles.menuNavbar}>
        <Link to="/login" ><li className={styles.navItem}>Iniciar Sesión</li></Link>
        <Link to="/register" ><li className={styles.navItem} style={{ backgroundColor: "rgb(146, 70, 25)" }}>Regístrate</li></Link>
        <li className={styles.navItem} ><MenuHamburguer /></li>
      </ul>
    </nav>
  )
}