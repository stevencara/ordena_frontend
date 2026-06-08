import { Button } from '../../components/Button/Button'
import styles from './Products.module.css'
import { ProductItem } from './ProductItem/ProductItem'
import { useEffect, useState } from 'react'
import { Input, InputSelect } from '../../components/Input/Input'
import { Loader } from '../../components/Loader/Loader'
import { PLATES_TYPE } from '../../data/options'
import { createProduct, getProducts, deleteProduct, updateProduct } from "../../services/productService";
import { Modal } from '../../components/Modal/Modal'

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [plateType, setPlateType] = useState("Todos");
  const [openModal, setOpenModal] = useState(false); // Modal para Crear
  const [openDeleteModal, setOpenDeleteModal] = useState(false); // Modal para Eliminar
  const [productSearch, setProductSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // ESTADO FORMULARIO DETALLE / EDICIÓN (PATCH)
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    price: 0,
    description: "",
    image: ""
  })

  // ESTADO FORMULARIO CREACIÓN (POST)
  const [createFormData, setCreateFormData] = useState({
    name: "",
    category: "",
    price: 0,
    description: "",
    image: ""
  });

  // FUNCIÓN PARA CARGAR PRODUCTOS
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


  // Combinar filtro de categoría y el de búsqueda por nombre
  const productsFiltered = products.filter((p) => {
    const matchesCategory = plateType === "Todos" || p.category.toLowerCase() === plateType.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(productSearch.toLowerCase()) 
    return matchesCategory && matchesSearch
  })


  // AUTOCOMPLETAR FORMULARIO DE DETALLE/EDICIÓN
  const handleSelectProduct = (selectedProduct) => {
    const id = selectedProduct.id || selectedProduct._id || "";
    setEditingId(id);
    setFormData({
      id: selectedProduct.id || selectedProduct._id || "",
      name: selectedProduct.name || "",
      category: Array.isArray(selectedProduct.category) ? selectedProduct.category[0] : selectedProduct.category || "",
      price: selectedProduct.price || 0,
      description: selectedProduct.description || "",
      image: selectedProduct.image || ""
    })
  }


  // HANDLERS PARA CAPTURAR DATOS INDEPENDIENTES
  const handleChangeEdit = (e) => {
    const { name, value, type, checked } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleChangeCreate = (e) => {
    const { name, value, type, checked } = e.target
    setCreateFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }


  // FUNCIÓN POST CREAR UN PRODUCTO
  const handleSubmitCreate = async (e) => {
    e.preventDefault();

    if (!createFormData.name || createFormData.name === "") {
      alert("Digite un nombre de producto")
      return
    }

    if (!createFormData.category || createFormData.category === "") {
      alert("Seleccione un tipo de producto")
      return
    }

    if (!createFormData.price || createFormData.price === 0) {
      alert("Digite un precio")
      return
    }


    try {
      setLoading(true)

      // Sanitizamos el objeto antes de enviarlo
      const cleanedData = {
        ...createFormData,
        price: Number(createFormData.price),
        category: [createFormData.category]
      }

      console.log("Enviando este JSON exacto al backend:", cleanedData)

      await createProduct(cleanedData);
      await loadProducts();

      setCreateFormData({
        name: "",
        category: "",
        price: 0,
        description: "",
        image: ""
      })

      alert("Producto creado correctamente: ", formData.name)
      setOpenModal(!openModal)

    } catch (error) {
      console.error(error);
    } finally {
      console.log(`El formulario a enviar es: `, formData)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }


  }

  // FUNCIÓN PATCH - ACTUALIZAR PRODUCTO
  const handleUpdate = async (e) => {

    e.preventDefault();
    if (!editingId) return alert("Selecciona un producto de la lista para actualizar");

    try {
      setLoading(true);
      const data = {
        ...formData,
        category: [formData.category],
        price: Number(formData.price),
      };

      await updateProduct(editingId, data);
      await loadProducts();

      alert("Producto actualizado con éxito");

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  // FUNCIÓN PARA ELIMINAR PRODUCTO
  const handleDelete = async () => {
    if (!formData.id) return alert("Selecciona un producto de la lista para eliminar");;

    try {
      setLoading(true);
      await deleteProduct(formData.id);
      await loadProducts();

      // Limpiar el detalle tras eliminar
      setEditingId(null);
      setFormData({
        name: "",
        category: "",
        price: 0,
        description: "",
        image: ""
      })

      setOpenDeleteModal(false)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background">
      <div className="container">
        <div className="container-form">
          <h1>Productos</h1>

          {/* Filtro */}
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset className="form-flex">
              <legend>Filtro</legend>
              <Input
                label="Buscar"
                type="text"
                className="inputPrimary"
                placeholder=""
                name="productName"
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
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
                value={plateType}
                placeholder=""
                onChange={(e) => setPlateType(e.target.value)}
                data={PLATES_TYPE}
              />

            </fieldset>
          </form>

          <div className="container-flex">
            {/* Modulo Platillos*/}
            <div className="module">
              <ProductItem products={productsFiltered} onSelectProduct={handleSelectProduct} />
            </div>

            {/* Modulo Detalle Producto (EDICIÓN / PATCH) */}
            <div className="module">
              <Button className='btnAdd' text='+ Crear producto' type='submit' onClick={() => setOpenModal(true)} />
              
              <form onSubmit={handleUpdate}>
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
                      onChange={handleChangeEdit}
                      required
                    />

                    <InputSelect
                      label="Tipo de comida"
                      className="inputPrimary"
                      name="category"
                      value={formData.category}
                      onChange={handleChangeEdit}
                      data={PLATES_TYPE}
                    />

                    <Input
                      label="Precio"
                      type="number"
                      className="inputPrimary"
                      placeholder=""
                      name="price"
                      value={formData.price}
                      onChange={handleChangeEdit}
                      required
                    />

                    <Input
                      label="Descripción (opcional)"
                      type="text"
                      className="inputPrimary"
                      placeholder="Añada una descripción del producto..."
                      name="description"
                      value={formData.description}
                      onChange={handleChangeEdit}
                      required
                    />

                    <Input
                      label="Imágenes (opcional)"
                      type="text"
                      className="inputPrimary"
                      placeholder="Subir URL foto"
                      name="image"
                      value={formData.image}
                      onChange={handleChangeEdit}
                      required
                    />

                    <div className={styles.divActionsOrder}>
                      <Button className='btnDelete' text='Eliminar' onClick={() => {
                        if(formData.id) setOpenDeleteModal(true)
                      }} />
                      <Button className='btnAdd' text='Actualizar' type='submit'/>
                    </div>

                  </div>
                </fieldset>

              </form>
              {loading && <Loader />}
            </div>
          </div>

          {/* Modal Creación de Producto (POST) */}
          <Modal isOpenModal={openModal} onCloseModal={() => setOpenModal(false)} onAccept={() => { }} >
            <div style={{ width: "100%", height: "100%", }}>
              <h2 style={{ color: "black" }}>Crear producto</h2>
              <form onSubmit={handleSubmitCreate}>
                <fieldset>
                  <legend>Detalle del Producto</legend>
                  <div className={styles.displayForm} style={{color: "black"}}>
                    <Input
                      label="Nombre"
                      type="text"
                      className=""
                      placeholder=""
                      name="name"
                      value={createFormData.name}
                      onChange={handleChangeCreate}
                      required
                      variant = "Light"
                    />

                    <InputSelect
                      label="Tipo de comida"
                      className="labelDark"
                      name="category"
                      value={createFormData.category}
                      onChange={handleChangeCreate}
                      data={PLATES_TYPE}
                      variant = "Light"
                    />

                    <Input
                      label="Precio"
                      type="number"
                      className="labelDark"
                      placeholder=""
                      name="price"
                      value={createFormData.price}
                      onChange={handleChangeCreate}
                      required
                      variant = "Light"
                    />

                    <Input
                      label="Descripción (opcional)"
                      type="text"
                      className="labelDark"
                      placeholder="Añada una descripción del producto..."
                      name="description"
                      value={createFormData.description}
                      onChange={handleChangeCreate}
                      required
                      variant = "Light"
                    />

                    <Input
                      label="Imágenes (opcional)"
                      type="text"
                      className="labelDark"
                      placeholder="Subir URL foto"
                      name="image"
                      value={createFormData.image}
                      onChange={handleChangeCreate}
                      required
                      variant = "Light"
                    />

                    <div className={styles.divActionsOrder}>
                      <Button className='btnDelete' text='Borrar' onClick={() => setCreateFormData({
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

          {/* Modal de Confirmación de Eliminación */}  
          <Modal
            isOpenModal={openDeleteModal}
            onCloseModal={() => setOpenDeleteModal(false)}
          >
            <h2 style={{ color: 'black' }}>Eliminar producto</h2>
            <p style={{ color: 'black' }}>¿Estás seguro que deseas eliminar este producto "{formData.name}" ?</p>

            <Button
              text="Aceptar"
              onClick={handleDelete}
              className='btnSignOut'
              type="button"
            />

            <Button
              text="Cancelar"
              onClick={() => setOpenDeleteModal(false) }
              className='btnBack'
              type="button"
            />
          </Modal>

        </div>
      </div>
    </div>
  )
}