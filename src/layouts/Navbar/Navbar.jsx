import { MenuHamburguer } from "../../components/MenuHamburguer/MenuHamburguer"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav >
      <ul className={styles.menuNavbar}>
        <li><Link to="/login" >Iniciar Sesión</Link></li>
        <li style={{backgroundColor:"rgb(146, 70, 25)"}}><Link to="/register" >Regístrate</Link></li>
        <li><MenuHamburguer/></li>
      </ul>
    </nav>
  )
}