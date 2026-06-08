import { Button } from '../../components/Button/Button'
import styles from './Products.module.css'
import { ProductItem } from './ProductItem/ProductItem'
import { useEffect, useState } from 'react'
import { Input, InputSelect } from '../../components/Input/Input'
import { Loader } from '../../components/Loader/Loader'
import { PLATES_TYPE } from '../../data/options'
import { createProduct, getProducts, deleteProduct } from "../../services/productService";
import { Modal } from '../../components/Modal/Modal'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [plateType, setPlateType] = useState("Todos")
  const [openModal, setOpenModal] = useState(false)
  const [product, setProduct] = useState("")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    price: 0,
    description: "",
    image: ""
  })


  const loadProducts = async () => {
    try {
      setLoading(true)
      const data = await getProducts()
      setProducts(data)
      console.log(data)
    } catch (error) {
      console.error("Error cargando el archivo: ", error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);


  const productsFiltered = Array.isArray(products)
    ? products.filter((product) => {
      if (plateType === "" || plateType === "Todos") return true;
      return product.category === plateType
    }) : []


  // FUNCIÓN PARA AUTOCOMPLETAR EL FORMULARIO AL SELECCIONAR UN PRODUCTO
  const handleSelectProduct = (selectedProduct) => {
    setFormData({
      id: selectedProduct.id || selectedProduct._id || "",
      name: selectedProduct.name || "",
      category: Array.isArray(selectedProduct.category) ? selectedProduct.category[0] : selectedProduct.category || "",
      price: selectedProduct.price || 0,
      description: selectedProduct.description || "",
      image: selectedProduct.image || ""
    })
  }


  // CAPTURAR DATOS DE FORMULARIO CREACION DE USUARIO
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }


  // ENVIAR DATOS DE FORMULARIO CREACION DE PRODUCTO
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category || formData.category === "") {
      alert("Seleccione un tipo de producto")
      return
    }

    const emptyFields = Object.entries(formData).some(([key, value]) => value === "")
    if (emptyFields) {
      alert("Hay campos vacíos")
      return
    }

    try {
      setLoading(true)

      // Sanitizamos el objeto antes de enviarlo
      const cleanedData = {
        ...formData,
        price: Number(formData.price),
        category: [formData.category]
      }

      console.log("Enviando este JSON exacto al backend:", cleanedData)

      await createProduct(cleanedData);
      await loadProducts();

      setFormData({
        name: "",
        category: "",
        price: 0,
        description: "",
        image: ""
      })

      alert("Producto creado correctamente: ", formData.name)
    } catch (error) {
      console.error(error);
    } finally {
      console.log(`El formulario a enviar es: `, formData)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }


  }

  // ELIMINAR PRODUCTO
  const handleDelete = async (id) => {
  try {

    await deleteProduct(id);

    await loadProducts();
    
    setFormData({
      name: "",
      category: "",
      price: 0,
      description: "",
      image: ""
    })

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="background">
      <div className="container">
        <div className="container-form">
          <h1>Productos</h1>

          <form >
            <fieldset className="form-flex">
              <legend>Filtro</legend>
              <Input
                label="Buscar"
                type="text"
                className="inputPrimary"
                placeholder=""
                name="productName"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                variant='dark'
              />

              <div className="divSearch">
                <button type='button' ><i className="fa-solid fa-magnifying-glass" style={{ width: 25, height: 25 }}></i></button>
              </div>

              <InputSelect
                label="Tipo de comida"
                type="text"
                className="inputPrimary"
                name=""
                value=""
                placeholder=""
                onChange={(e) => setPlateType(e.target.value)}
                data={PLATES_TYPE}
              />

            </fieldset>
          </form>

          <div className="container-flex">
            {/* Modulo Platillos*/}
            <div className="module">
              <ProductItem products={productsFiltered} onSelectProduct={handleSelectProduct}/>
            </div>

            {/* Modulo Detalle Producto*/}
            <div className="module">
              <Button className='btnAdd' text='+ Crear producto' type='submit' onClick={() => setOpenModal(!openModal) } />
              <form onSubmit={handleSubmit}>
                <h2>Detalle del Producto</h2>
                <fieldset>
                  <legend>Detalle del Producto</legend>
                  <div className={styles.displayForm}>
                    <Input
                      label="Nombre"
                      type="text"
                      className="inputPrimary"
                      placeholder=""
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <InputSelect
                      label="Tipo de comida"
                      className="inputPrimary"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      data={PLATES_TYPE}
                    />

                    <Input
                      label="Precio"
                      type="number"
                      className="inputPrimary"
                      placeholder=""
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />

                    <Input
                      label="Descripción"
                      type="text"
                      className="inputPrimary"
                      placeholder="Añada una descripción del producto..."
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />

                    <Input
                      label="Imágenes"
                      type="text"
                      className="inputPrimary"
                      placeholder="Subir URL foto"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      required
                    />

                    <div className={styles.divActionsOrder}>
                      <Button className='btnDelete' text='Eliminar' onClick={() => handleDelete(formData.id) } />
                      <Button className='btnAdd' text='Actualizar' type='submit' />
                    </div>

                  </div>
                </fieldset>

              </form>
              {loading && <Loader />}
            </div>

          </div>

          {/* Modal Creación de Producto */}
          <Modal isOpenModal={openModal} onCloseModal={() => setOpenModal(!openModal)} onAccept={() => { }} >
            <div style={{ width: "100%", height: "100%", }}>
              <h2 style={{ color: "black" }}>Crear producto</h2>
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Detalle del Producto</legend>
                  <div className={styles.displayForm}>
                    <Input
                      label="Nombre"
                      type="text"
                      className="inputPrimary"
                      placeholder=""
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <InputSelect
                      label="Tipo de comida"
                      className="inputPrimary"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      data={PLATES_TYPE}
                    />

                    <Input
                      label="Precio"
                      type="number"
                      className="inputPrimary"
                      placeholder=""
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />

                    <Input
                      label="Descripción"
                      type="text"
                      className="inputPrimary"
                      placeholder="Añada una descripción del producto..."
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />

                    <Input
                      label="Imágenes"
                      type="text"
                      className="inputPrimary"
                      placeholder="Subir URL foto"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      required
                    />

                    <div className={styles.divActionsOrder}>
                      <Button className='btnDelete' text='Borrar' onClick={() => setFormData({
                        name: "",
                        category: "",
                        price: 0,
                        description: "",
                        image: ""
                      })} />
                      <Button className='btnAdd' text='Añadir' type='submit' />
                    </div>

                  </div>
                </fieldset>
              </form>
            </div>
          </Modal>

        </div>
      </div>
    </div>
  )
}