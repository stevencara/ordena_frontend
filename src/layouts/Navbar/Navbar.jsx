import { MenuHamburguer } from "../../components/MenuHamburguer/MenuHamburguer"
import styles from "./Navbar.module.css"
import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/logo.jpg'
import { useAuth } from "../../hooks/useAuth"

export const Navbar = () => {
  const navigate = useNavigate();
  const {user} = useAuth()

  const handleClick = (e) => {
    e.stopPropagation();
    navigate('/index')
  }

  return (
    <header>
      <nav className={styles.navbar}>
        <div style={{ height: "100%", width: "20%" }}>
          <ul className={styles.menuIndex}>
            <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
              <img src={logo} alt="logo" className={styles.logo} onClick={handleClick} />
            </div>
            {/*<Link to="/index"><li className={styles.navItem} aria-current="page" >Inicio</li></Link>*/}
          </ul>
        </div>
        <div style={{ height: "100%", width: "80%" }}>
          <ul className={styles.menuOptions}>
            {!user && <Link to="/login"><li className={styles.navItem}>Iniciar Sesión</li></Link>}
            {!user && <Link to="/register" ><li className={styles.navItem} style={{ backgroundColor: "rgb(146, 70, 25)" }}>Regístrate</li></Link>}
            <li style={{height: "100%", listStyleType: "none"}}><MenuHamburguer /></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}