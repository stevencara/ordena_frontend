import styles from './SpecialPlates.module.css'
import { Button } from "../../../components/Button/Button"


export const SpecialPlates = () => {

  return (
    <section className={styles.presentation}>
      <h2 className={`${styles.title2} ${styles.presentationTitle}`}>Carta ejecutiva</h2>

      <article className={styles.presentationInterno}>
        <div className={styles.imgPresentation}>
          <div className={`${styles.imgPlato} ${styles.uno}`}></div>
        </div>

        <div className={styles.txtPresentation}>
          <h3 className={`${styles.title3} ${styles.txtPresentationTitle}`}>Sobrebarriga en Salsa</h3><br />
          <h3 className={`${styles.title3} ${styles.txtPresentationTitle}`}>$ 32.000</h3>
          <p className={styles.txtPresentationParagraph}>Tierna sobrebarriga cocinada lentamente en salsa criolla, acompañada de arroz blanco, papa salada y ensalada fresca. Un clásico lleno de sabor.</p>
          {/* <Button text="Ordenar pedido" className="btnLink" /> */}
        </div>
      </article>

      <article className={styles.presentationInterno}>
        <div className={styles.imgPresentation}>
          <div className={`${styles.imgPlato} ${styles.dos}`}></div>
        </div>

        <div className={styles.txtPresentation}>
          <h3 className={`${styles.title3} ${styles.txtPresentationTitle}`}>Mojarra Frita</h3><br />
          <h3 className={`${styles.title3} ${styles.txtPresentationTitle}`}>$ 32.000</h3>
          <p className={styles.txtPresentationParagraph}>Mojarra fresca frita al punto perfecto, acompañada de arroz con coco, patacones y ensalada. Un plato típico de la costa caribe colombiana.</p>
          {/*  <Button text="Ordenar pedido" className="btnLink" /> */}
        </div>
      </article>
    </section>
  )
}