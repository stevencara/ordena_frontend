import styles from './Products.module.css'
import { Input, InputSelect } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { PLATES_TYPE } from '../../data/options'

export const ProductEditForm = ({ formData, handleChangeEdit, handleUpdate, setOpenDeleteModal }) => {

  return (
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
              if (formData.id) setOpenDeleteModal(true)
            }} />
            <Button className='btnAdd' text='Actualizar' type='submit' />
          </div>

        </div>
      </fieldset>

    </form>
  )
} 