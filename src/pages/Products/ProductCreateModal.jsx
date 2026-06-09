import styles from './Products.module.css'
import { Input, InputSelect } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { Modal } from '../../components/Modal/Modal'
import { PLATES_TYPE } from '../../data/options'

export const ProductCreateModal = ({ openModal, setOpenModal, createFormData, handleChangeCreate, handleSubmitCreate, setCreateFormData }) => {

  return (
    <Modal isOpenModal={openModal} onCloseModal={() => setOpenModal(false)} onAccept={() => { }} >
      <div style={{ width: "100%", height: "100%", }}>
        <h2 style={{ color: "black" }}>Crear producto</h2>
        <form onSubmit={handleSubmitCreate}>
          <fieldset>
            <legend>Detalle del Producto</legend>
            <div className={styles.displayForm} style={{ color: "black" }}>
              <Input
                label="Nombre"
                type="text"
                className=""
                placeholder=""
                name="name"
                value={createFormData.name}
                onChange={handleChangeCreate}
                required
                variant="Light"
              />

              <InputSelect
                label="Tipo de comida"
                className="labelDark"
                name="category"
                value={createFormData.category}
                onChange={handleChangeCreate}
                data={PLATES_TYPE}
                variant="Light"
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
                variant="Light"
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
                variant="Light"
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
                variant="Light"
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
  )
} 