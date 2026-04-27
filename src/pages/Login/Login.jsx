import { useState } from "react";
import styles from "./Login.module.css"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

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
    if (!formData.email.includes('@')) {
      alert("Debes ingresar un correo válido")
      return
    }

    console.log('El formulario fue enviado:', formData)
    alert("Te has logueado exitosamente")
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/dashboard');
    }, 2000)
  }

  return (
    <>
      <div className="background">
        <div className={styles.contentLogin}>
          <div className={styles.formLogin}>

            <h1>Iniciar Sesión</h1>
            <fieldset>
              <legend></legend>
              <form action="" onSubmit={handleSubmit}>
                <Input
                  label="Correo Electrónico"
                  name="email"
                  type="email"
                  placeholder="henan.c@gmail.com"
                  className="inputPrimary"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <Input
                  label="Contraseña"
                  name="password"
                  type="password"
                  placeholder="**************"
                  className="inputPrimary"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />

                <Button text="Ingresar" type="submit" className="btnLogin" />
                {loading && <Loader />}
              </form>
            </fieldset>

            <div className={styles.countOptions}>
              <p className={styles.paragragh}><Link to="/" className={styles.link}>Olvide mi contraseña</Link></p>
              <p className={styles.paragragh}>¿No tienes cuenta? <span><Link to="/register" className={styles.link}>Regístrate</Link></span></p>
            </div>


          </div>
        </div>

      </div>
    </>
  )
}