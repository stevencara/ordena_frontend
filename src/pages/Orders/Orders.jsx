import styles from './Orders.module.css'
import { CardOrder } from '../Dashboard/CardOrder/CardOrder'
import { Button } from '../../components/Button/Button'
import { Input, InputSelect } from '../../components/Input/Input'
import { useState } from 'react'
import { Loader } from '../../components/Loader/Loader'

export const Orders = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    typeProduct: "",
    name: "",
    quantity: 0,
    description: "",
  })

  // OPCIONES DE INPUTS TIPO SELECT
  const PLATES_TYPE = ["Todos", "Hamburguesas", "Pizzas", "Ensaladas", "Mexicana", "Japonesa", "Pastas", "Bebidas", "Saludable", "Carnes", "Postres", "Niños", "Acompañamientos", "Entradas", "Internacional"]

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
    if (formData.typeProduct === "") {
      alert("Selecione un tipo de producto")
      return
    }
    const emptyFields = Object.entries(formData).some(([key, value]) => value === "")
    if (emptyFields) {
      alert("Hay campos vacíos")
      return
    }
    console.log(`El formulario enviado es: `, formData)
    setLoading(true)

    setFormData({
      typeProduct: "",
      name: "",
      quantity: 0,
      description: "",
    })

    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }


  return (
    <div className="background">
      <div className="container">
        <h1>Creá un pedido</h1>

        <div className="contentFlex">
          <div className="module">
            {/* FORMULARIO DE BÚSQUEDA*/}
            <form >
              <fieldset className="formFlex">
                <legend></legend>

                <Input
                  label="N° de mesa"
                  type="number"
                  className="inputPrimary"
                  placeholder=""
                  name=""
                  value=""
                  onChange={() => { }}
                  required
                  variant='dark'
                />

                <Input
                  label="N° de pedido"
                  type="number"
                  className="inputPrimary"
                  placeholder=""
                  name=""
                  value=""
                  onChange={() => { }}
                  required
                  variant='dark'
                />

                <div className={styles.divSearch}>
                  <button type='button' ><i className="fa-solid fa-magnifying-glass" style={{ width: 25, height: 25 }}></i></button>
                </div>
              </fieldset>
            </form>

            {/* FORMULARIO DE NUEVA ORDEN*/}
            <form onSubmit={handleSubmit} >
              <fieldset>
                <h2>Añadí a tu pedido</h2>
                <div className={styles.displayForm}>

                  <InputSelect
                    label="Tipo de comida"
                    type="text"
                    className="inputPrimary"
                    name="typeProduct"
                    value={formData.typeProduct}
                    placeholder=""
                    onChange={handleChange}
                    data={PLATES_TYPE}
                  />

                  <Input
                    label="Platillo"
                    type="text"
                    className="inputPrimary"
                    placeholder="Elegí el platillo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant='dark'
                  />

                  <Input
                    label="Cantidad"
                    type="number"
                    className="inputPrimary"
                    placeholder="Elegí el platillo"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    variant='dark'
                  />

                  <Input
                    label="Observación"
                    type="0"
                    className="inputPrimary"
                    placeholder="Ingrese alguna nota relevante sobre el pedido..."
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    variant='dark'
                  />


                  <div className={styles.divActionsOrder}>
                    <Button text="Atrás" className="btnBack" />
                    <Button text='Añadir' className='btnAdd' type='submit' />
                  </div>

                </div>

              </fieldset>
            </form>

            {loading && <Loader />}
          </div>

          {/* MODULO DETALLE PEDIDO*/}
          <div className="module">
            <CardOrder />
          </div>

        </div>
      </div>
    </div>
  )
}