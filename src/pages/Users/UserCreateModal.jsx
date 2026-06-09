import styles from './Users.module.css'
import { Input, InputSelect } from '../../components/Input/Input'
import { USERS_TYPE, DOCUMENTS_TYPE, COUNTRIES } from "../../data/options.js"

import { Button } from '../../components/Button/Button'
import { Modal } from '../../components/Modal/Modal'
import { useRef, useState } from 'react'


export const UserCreateModal = ({ openModal, setOpenModal, createFormData, handleChangeCreate, handleSubmitCreate, setCreateFormData }) => {

  const [visible, setVisible] = useState(false)
  // ABRIR CALENDARIO CON CLICK EN ICONO
  const dataRef = useRef(null)
  const openCalendar = () => { dataRef.current.showPicker() }

  return (
      <Modal isOpenModal={openModal} onCloseModal={() => setOpenModal(false)} onAccept={() => { }} >
        <div style={{ width: "100%", height: "100%", }}>
          <h2 style={{ color: "black" }}>Crear usuario</h2>
          <form onSubmit={handleSubmitCreate}>
            <fieldset>
              <legend>Detalle del Usuario</legend>
              <div className={styles.displayForm} style={{ color: "black" }} >
                <Input
                  label="Nombres"
                  type="text"
                  placeholder=""
                  className="labelDark"
                  name="name"
                  value={createFormData.name}
                  onChange={handleChangeCreate}
                  required
                  variant="Light"
                />

                <Input
                  label="Apellidos"
                  type="text"
                  placeholder=""
                  className="labelDark"
                  name="lastname"
                  value={createFormData.lastname}
                  onChange={handleChangeCreate}
                  required
                  variant="Light"
                />

                <InputSelect
                  label="Tipo de documento"
                  className="labelDark"
                  name="typeDocument"
                  value={createFormData.typeDocument}
                  onChange={handleChangeCreate}
                  data={DOCUMENTS_TYPE}
                  variant="Light"
                />

                <Input
                  label="N° de documento"
                  type="text"
                  placeholder=""
                  className="labelDark"
                  name="dni"
                  value={createFormData.dni}
                  onChange={handleChangeCreate}
                  required
                  variant="Light"
                />


                <div style={{ display: "flex" }}>
                  <Input
                    ref={dataRef}
                    label="Fecha de Nacimiento"
                    type="date"
                    className="labelDark"
                    name="birthdate"
                    value={createFormData.birthdate}
                    min="1936-04-26"
                    max="2008-04-26"
                    onChange={handleChangeCreate}
                    required
                    variant="Light"
                  />
                  <i className={`fa-regular fa-calendar-days ${styles.icon}`} onClick={openCalendar}
                  ></i>
                </div>

                <Input
                  label="Correo Electrónico"
                  type="email"
                  placeholder=""
                  className="labelDark"
                  name="email"
                  value={createFormData.email}
                  onChange={handleChangeCreate}
                  required
                  variant="Light"
                />

                <Input
                  label="Teléfono"
                  type="number"
                  placeholder=""
                  className="labelDark"
                  name="phone"
                  value={createFormData.phone}
                  onChange={handleChangeCreate}
                  required
                  variant="Light"
                />

                <InputSelect
                  label="País de nacimiento"
                  className="labelDark"
                  name="nationality"
                  value={createFormData.nationality}
                  onChange={handleChangeCreate}
                  data={COUNTRIES}
                  variant="Light"
                />

                <InputSelect
                  label="Tipo de usuario"
                  className="labelDark"
                  name="role"
                  value={createFormData.role}
                  onChange={handleChangeCreate}
                  data={USERS_TYPE}
                  variant="Light"
                />

                <Input
                  label="Imágen de perfil (opcional)"
                  type="text"
                  className="labelDark"
                  placeholder="Subir URL foto"
                  name="image"
                  value={createFormData.image}
                  onChange={handleChangeCreate}
                  required
                  variant="Light"
                />


                <div style={{ display: "flex" }}>
                  <Input
                    label="Contraseña"
                    type={!visible ? "password" : "text"}
                    placeholder=""
                    className="labelDark"
                    name="password"
                    value={createFormData.password}
                    onChange={handleChangeCreate}
                    required
                    variant="Light"
                  />
                  <i className={`fa-solid fa-eye ${styles.icon}`}
                    onClick={() => setVisible(!visible)}
                  ></i>
                </div>

                <Input
                  label="Confirme Contraseña"
                  type={!visible ? "password" : "text"}
                  placeholder=""
                  className="labelDark"
                  name="confirmPassword"
                  value={createFormData.confirmPassword}
                  onChange={handleChangeCreate}
                  required
                  variant="Light"
                />

                <div className={styles.divActionsOrder}>
                  <Button text='Borrar' className='btnDelete' onClick={() => setCreateFormData({
                    name: "",
                    lastname: "",
                    dni: "",
                    typeDocument: "",
                    email: "",
                    password: "",
                    phone: "",
                    role: "",
                    nationality: "",
                    image: "",
                    active: true,
                    birthdate: "",
                  })} />
                  <Button text='Añadir' className='btnAdd' type='submit' />
                </div>

              </div>

            </fieldset>
          </form>
        </div>
      </Modal>

  )
} 