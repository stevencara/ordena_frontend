import { Footer } from "../../layouts/Footer/Footer"
import styles from "./Index.module.css"
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import { useEffect, useRef, useState } from "react"
import { Statistics } from "./Statistics/Statistics"

export const Index = () => {

    return (
    <main className="background">
      {/* Seccion Carta Ejecutiva */}
      <section className={styles.corpus}>
        <div className={styles.corpusTxt}>
          <h1 className={styles.title1}>Resturante Avenida las Palmas</h1>
          <p className={styles.corpusParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusamus corrupti cumque eaque officiis dolor velit beatae minus, blanditiis in perferendis dolore aliquid error dolores aspernatur pariatur hic fuga qui.</p>
          <Button text="Ver menú" className="btnLink" />
        </div>
        <div className={styles.corpusImg}>
        </div>
      </section>


      {/* Seccion Platos clásicos */}
      <section className={styles.menu}>
        <h2 className={`${styles.title2} ${styles.menuTitle}`}>Platos clásicos</h2>
        <p className={styles.menuParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis mollitia dolores et esse aliquam, quo nesciunt, obcaecati aperiam tenetur quidem nihil dicta fugit vitae porro quia magnam explicabo! Sunt?</p>

        <div className={styles.platillos}>

          <article className={styles.platos}>
            <div className={styles.img1}></div>
            <h3>Arros con pato </h3><h3>$ 11.990</h3>
            <p className={styles.platosParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat dolor quisquam.</p>
          </article>

          <article className={styles.platos}>
            <div className={styles.img2}></div>
            <h3 className={styles.platilloTitle}>Arros con pato </h3><h3>$ 11.990</h3>
            <p className={styles.platosParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat dolor quisquam.</p>
          </article>

          <article className={styles.platos}>
            <div className={styles.img3}></div>
            <h3 className={styles.platilloTitle}>Arros con pato </h3><h3>$ 11.990</h3>
            <p className={styles.platosParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat dolor quisquam.</p>
          </article>

        </div>
      </section>


      {/* Seccion Carta Ejecutiva */}
      <section className={styles.presentation}>
        <h2 className={`${styles.title2} ${styles.presentationTitle}`}>Carta ejecutiva</h2>

        <article className={styles.presentationInterno}>
          <div className={styles.imgPresentation}>
            <div className={`${styles.imgPlato} ${styles.uno}`}></div>
          </div>

          <div className={styles.txtPresentation}>
            <h3 className={`${styles.title3} ${styles.txtPresentationTitle}`}>Ceviche Mixto</h3><br />
            <h3 className={`${styles.title3} ${styles.txtPresentationTitle}`}>$ 50.000</h3>
            <p className={styles.txtPresentationParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, natus, alias quia eveniet nemo aliquam vitae expedita ex qui veniam asperiores dignissimos recusandae magnam? Animi numquam maxime rem optio qui!</p>
            <Button text="Ordenar pedido" className="btnLink" />
          </div>
        </article>

        <article className={styles.presentationInterno}>
          <div className={styles.imgPresentation}>
            <div className={`${styles.imgPlato} ${styles.dos}`}></div>
          </div>

          <div className={styles.txtPresentation}>
            <h3 className={`${styles.title3} ${styles.txtPresentationTitle}`}>Ceviche Mixto</h3><br />
            <h3 className={`${styles.title3} ${styles.txtPresentationTitle}`}>$ 50.000</h3>
            <p className={styles.txtPresentationParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, natus, alias quia eveniet nemo aliquam vitae expedita ex qui veniam asperiores dignissimos recusandae magnam? Animi numquam maxime rem optio qui!</p>
            <Button text="Ordenar pedido" className="btnLink" />
          </div>
        </article>
      </section>

      {/* Seccion Reseñas */}
      <Statistics/>


      {/* Seccion Texto Final */}
      <section className={styles.finalTxt}>
        <p className={styles.finalTxtParagraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repudiandae voluptatum, illo neque eveniet in asperiores pariatur quibusdam tempore deserunt a exercitationem. Ut alias numquam placeat. Eligendi doloremque omnis sapiente.</p>
        <h2 className={`${styles.title2} ${styles.finalTxtTitle}`} >Lorem ipsum dolore</h2>
      </section>


      {/* Seccion Suscríbete */}
      <section className={styles.suscription}>
        <h2 className={`${styles.title2} ${styles.suscriptionTitle}`}>Suscríbete</h2>
        <p className={styles.suscriptionParagraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque inventore quas dolores praesentium accusantium, velit corrupti quam ducimus dolore, maxime et magni vitae culpa nemo provident nobis numquam repudiandae. Modi!</p>
        <div className={styles.formText}>
          <Input
            label="Correo"
            type="text"
            className="labelBase"
            placeholder=""
            name=""
            value=""
            onChange={() => { }}
            variant="Light"
          />
          <Button text="Enviar" className="btnLink" />
        </div>
      </section>

      <Footer />
    </main>

  )
}