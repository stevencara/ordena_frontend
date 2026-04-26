import { MenuHamburguer } from "../../components/MenuHamburguer/MenuHamburguer"
import styles from "./Navbar.module.css"
import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/logo.jpg'

export const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    navigate('/')
  }

  return (
    <header>
      <nav className={styles.navbar}>
        <div style={{ height: "100%", width: "50%" }}>
          <ul className={styles.menuIndex}>
            <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}><img src={logo} alt="logo" className={styles.logo} onClick={handleClick} /></div>
            <Link to="/"><li className={styles.navItem} aria-current="page" >Inicio</li></Link>
          </ul>
        </div>
        <div style={{ height: "100%", width: "50%" }}>
          <ul className={styles.menuOptions}>
            <Link to="/login"><li className={styles.navItem}>Iniciar Sesión</li></Link>
            <Link to="/register" ><li className={styles.navItem} style={{ backgroundColor: "rgb(146, 70, 25)" }}>Regístrate</li></Link>
            <li className={styles.navItem} ><MenuHamburguer /></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}