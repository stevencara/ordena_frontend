import { useState } from "react"
import styles from "./Suscribing.module.css"
import { Input } from "../../../components/Input/Input"
import { Button } from "../../../components/Button/Button"

export const Suscribing = () => {
  const [formData, setFormData] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData === "") {
      alert("Ingresa un correo electrónico")
      return
    }
    const validEmail = formData.includes('@')
    if (!validEmail) {
      alert("Debes ingresar un correo válido")
      return
    }
    console.log(formData)
    setFormData("")
  }

  return (
    <section className={styles.suscription}>
      <h2 className={`${styles.title2} ${styles.suscriptionTitle}`}>Suscríbete</h2>
      <p className={styles.suscriptionParagraph}>Recibe noticias, promociones especiales y nuevos platos directamente en tu correo. Sé el primero en enterarte de nuestras novedades y disfruta beneficios exclusivos.</p>
      <div className={styles.formText}>
        <form onSubmit={handleSubmit} >
          <Input
            label="Correo"
            type="text"
            className="labelBase"
            placeholder=""
            name="email"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            variant="Light"
          />
          <Button text="Enviar" className="btnLink" type="submit" />
        </form>
      </div>
    </section>
  )
}