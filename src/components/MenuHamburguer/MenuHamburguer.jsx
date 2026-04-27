import { useState } from "react"
import styles from './MenuHamburguer.module.css'
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";

export const MenuHamburguer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleModal = (e) => {
    e.stopPropagation()
    setIsOpenModal(true)
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
          <Link to="/dashboard"  ><li className={styles.menuItem} >Mesas</li></Link>
          <Link to="/view-orders"  ><li className={styles.menuItem} >Pedidos</li></Link>
          <Link to="/orders"  ><li className={styles.menuItem} >Crear pedido</li></Link>
          <Link to="/users"  ><li className={styles.menuItem} >Usuarios</li></Link>
          <Link to="/products"  ><li className={styles.menuItem} >Productos</li></Link>
          <li className={styles.menuItem} onClick={toggleModal}>Cerrar Sesión</li>

          <Modal
            isOpenModal={isOpenModal}
            onCloseModal={() => setIsOpenModal(false)}
          >
            <h2 style={{ color: 'black' }}>Cerrar Sesión</h2>
            <p style={{ color: 'black' }}>¿Estás seguro que deseas cerrar sesión?</p>

            <Button
              text="Aceptar"
              onClick={() => {
                setIsOpenModal(false);
                setLoading(true)
                setTimeout(() => {
                  setLoading(false)
                  setIsOpen(false)
                  navigate('/');
                }, 2000)
              }}
              className='btnSignOut'
              type="button"
            />
            <Button
              text="Cancelar"
              onClick={() => { setIsOpenModal(false); setIsOpen(false) }}
              className='btnBack'
              type="button"
            />
          </Modal>
        </ul>

        {loading && <Loader />}

      </div>

    </div>
  )
}