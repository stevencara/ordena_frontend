import { useState } from "react";
import styles from "./Login.module.css"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('El formulario fue enviado:', formData)
    setFormData({
      email: "",
      password: ""
    })
    navigate('/')
  }

  return (
    <>
      <div className="background">
        <div className={styles.contentLogin}>
          <div className={styles.formLogin}>
            <form action="" onSubmit={handleSubmit}>
              <h1>Iniciar Sesión</h1>
              <label htmlFor="user-email">Correo Electrónico</label>
              <input type="email" id="user-email" name="email" placeholder="henan.c@gmail.com" value={formData.email} onChange={handleChange} required className={styles.inputLogin} />
              
              <label htmlFor="user-password">Contraseña</label>
              <input type="password" id="user-password" name="password" value={formData.password} onChange={handleChange} placeholder="**************" required className={styles.inputLogin} />
              <button type="submit" className={styles.buttonLogin}>Ingresar</button>
            </form>


            <div className={styles.countOptions}>
              <p className={styles.inputParagragh}><Link to="/" className={styles.link}>Olvide mi contraseña</Link></p>
              <p className={styles.inputParagragh}>¿No tienes cuenta? <span><Link to="/" className={styles.link}>Registrate</Link></span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}