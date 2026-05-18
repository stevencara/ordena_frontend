import { useRef, useState } from "react";
import { Input, InputSelect } from "../../components/Input/Input";
import styles from "./Register.module.css"
import { Link, useNavigate } from "react-router-dom"
import { Button } from '../../components/Button/Button'
import { DOCUMENTS_TYPE, COUNTRIES } from "../../data/options.js"
import { Loader } from "../../components/Loader/Loader.jsx";
import { Modal } from "../../components/Modal/Modal.jsx";

export const Register = () => {

  const [visible, setVisible] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openModalRecoverPassword, setOpenModalRecoverPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    dni: "",
    typeDocument: "",
    birthdate: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false
  })
  const navigate = useNavigate();
  const [email, setEmail] = useState("")

  // CAPTURAR DATOS DE FORMULARIO CREACION DE USUARIO
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // ENVIAR DATOS DE FORMULARIO CREACION DE USUARIO
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.typeDocument === "") {
      alert("Selecione un tipo de documento de identidad")
      return
    }
    if (!formData.email.includes('@')) {
      alert("Debes ingresar un correo válido")
      return
    }
    if (formData.phoneNumber.length > 10 || formData.phoneNumber.length < 10) {
      alert("El número de teléfono debe tener 10 dígitos")
      return
    }
    if (formData.nationality === "") {
      alert("Selecione su país de orígen")
      return
    }
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (!regex.test(formData.password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }
    const emptyFields = Object.entries(formData).some(([key, value]) => value === "")
    if (emptyFields) {
      alert("Hay campos vacíos")
      return
    }
    if (formData.acceptedTerms === false) {
      alert("Aceptar los términos y condiciones para continuar")
      return
    }
    console.log(`El formulario enviado es: `, formData)
    alert("Te has registrado exitosamente")
    setLoading(true)

    setFormData({
      name: "",
      lastname: "",
      dni: "",
      typeDocument: "",
      birthdate: "",
      email: "",
      phoneNumber: "",
      nationality: "",
      password: "",
      confirmPassword: "",
      acceptedTerms: false
    })

    setTimeout(() => {
      setLoading(false)
      navigate('/login')
    }, 2000)

  }

  // ABRIR CALENDARIO CON CLICK EN ICONO
  const dataRef = useRef(null)
  const openCalendar = () => { dataRef.current.showPicker() }


  // FUNCIÓN PARA CAMBIAR EL CHECK A TRUE DENTRO DEL MODAL
  const handleAcceptTerms = () => {
    setFormData({
      ...formData,
      acceptedTerms: true // Cambia el checkbox a marcado
    });
    setOpenModal(false);
  };


  // FUNCIÓN PARA ENVIAR EL CORREO DE RECUPERACION
  const handleSubmitEmailToRecoverCredencials = (e) => {

    e.preventDefault();
    if (!email.includes('@')) {
      alert("Debes ingresar un correo válido")
      return
    }

    console.log("El correo a recuperar es: ", email)
    alert("Se envió correo de recuperación a ", email)
    setOpenModalRecoverPassword(false);
    setEmail("")
  };

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="container-form">

            <h1>Regístrate</h1>


            <form onSubmit={handleSubmit} >
              <fieldset>
                <legend> Información personal </legend>

                <Input
                  label="Nombres"
                  type="text"
                  placeholder=""
                  className="inputPrimary"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Apellidos"
                  type="text"
                  placeholder=""
                  className="inputPrimary"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="N° de documento"
                  type="text"
                  placeholder=""
                  className="inputPrimary"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  required
                />

                <InputSelect
                  label="Tipo de documento"
                  className="inputPrimary"
                  name="typeDocument"
                  value={formData.typeDocument}
                  onChange={handleChange}
                  data={DOCUMENTS_TYPE}
                />

                <div style={{ display: "flex" }}>
                  <Input
                    ref={dataRef}
                    label="Fecha de Nacimiento"
                    type="date"
                    placeholder=""
                    className="inputPrimary"
                    name="birthdate"
                    value={formData.birthdate}
                    min="1936-04-26"
                    max="2008-04-26"
                    onChange={handleChange}
                    required
                  />
                  <div className={`${styles.icon}`}>
                    <i className={`fa-regular fa-calendar-days`} onClick={openCalendar}
                    ></i>
                  </div>
                </div>

                <Input
                  label="Correo Electrónico"
                  type="email"
                  placeholder="hernan.c@gmail.com"
                  className="inputPrimary"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Teléfono"
                  type="number"
                  placeholder=""
                  className="inputPrimary"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />

                <InputSelect
                  label="País de nacimiento"
                  className="inputPrimary"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  data={COUNTRIES}
                />

                <div style={{ display: "flex" }}>
                  <Input
                    label="Contraseña"
                    type={!visible ? "password" : "text"}
                    placeholder="**************"
                    className="inputPrimary"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <div className={`${styles.icon}`}>
                    <i className={`fa-solid fa-eye`}
                      onClick={() => setVisible(!visible)}
                    ></i>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <Input
                    label="Confirme Contraseña"
                    type={!visible ? "password" : "text"}
                    placeholder="**************"
                    className="inputPrimary"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <div className={`${styles.icon}`}>
                    <i className={`fa-solid fa-eye`}
                      onClick={() => setVisible(!visible)}
                    ></i>
                  </div>
                </div>




                <input type="checkbox" id="user-acept_terms" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} /><span className={styles.spanStyle}>  Al continuar, aceptas los <Link onClick={() => setOpenModal(!openModal)}>Términos y Condiciones</Link></span>
                <Button className='btnRegister' text='Registrarse' type="submit" />


              </fieldset>
            </form>

            {loading && <Loader />}

            <div className={styles.countOptions}>
              <p className={styles.spanStyle}>¿Ya tienes cuenta? <span><Link to="/login" className={styles.link}>Iniciar Sesión</Link></span></p>
              <p className={styles.spanStyle}><Link className={styles.link} onClick={() => setOpenModalRecoverPassword(!openModalRecoverPassword)}>Olvidé mi contraseña</Link></p>
            </div>

            {/* Modal Términos y condiciones */}
            <Modal isOpenModal={openModal} onCloseModal={() => setOpenModal(!openModal)} onAccept={handleAcceptTerms} >
              <div style={{ width: "100%", height: "100%", }}>
                <h3 style={{ color: "black" }}>Términos y condiciones</h3>
                <h4>1. Aceptación de los términos</h4>
                <p>Al descargar, instalar o utilizar la aplicación, el usuario acepta de forma expresa el presente acuerdo. Si no está de acuerdo, debe abstenerse de usarla. </p>

                <h4>2. Uso de la aplicación y restricciones</h4>
                <p>Se otorga una licencia limitada, no exclusiva e intransferible para uso personal.Está prohibido modificar, realizar ingeniería inversa, extraer bases de datos (uso de bots) o utilizar la app para fines ilícitos.</p>

                <h4>3. Propiedad intelectual</h4>
                <p>Todo el contenido, diseño, logotipos, códigos y material de la app son propiedad exclusiva de (Tu Nombre o Empresa).</p>

                <h4>4. Privacidad y tratamiento de datos</h4>
                <p>El uso de la aplicación se rige por nuestra Política de Privacidad. El usuario autoriza el acceso a permisos necesarios (como ubicación, cámara o notificaciones) para el correcto funcionamiento de la app.</p>

                <h4>5. Limitación de responsabilidad</h4>
                <p>El desarrollador no se hace responsable de daños directos, indirectos o incidentales derivados del uso o la imposibilidad de uso de la aplicación, ni de fallos en dispositivos de terceros.</p>

                <h4>6. Modificaciones</h4>
                <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las actualizaciones serán notificadas dentro de la app o por correo electrónico.</p>

                <Button className='btnRegister' text='Aceptar' type="button" onClick={handleAcceptTerms} />
              </div>
            </Modal>

            {/* Modal Recuperación de credenciales */}
            <Modal isOpenModal={openModalRecoverPassword} onCloseModal={() => setOpenModalRecoverPassword(!openModalRecoverPassword)} onAccept={() => { }} >
              <div style={{ width: "100%", height: "100%", }}>
                <h3 style={{ color: "black" }}>Recuperar contraseña</h3>
                <fieldset>
                  <legend>Datos</legend>
                  <form action="" onSubmit={handleSubmitEmailToRecoverCredencials}>
                    <Input
                      label="Correo Electrónico"
                      name="email"
                      type="email"
                      placeholder=""
                      className=""
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      variant=""
                    />

                    <Button className='btnRegister' text='Solicitar recuperación' type="submit" />
                  </form>
                </fieldset>
              </div>
            </Modal>

          </div>
        </div >
      </div >
    </>
  )
}