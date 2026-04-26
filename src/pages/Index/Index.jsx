import { Footer } from "../../layouts/Footer/Footer"
import styles from "./Index.module.css"
import { Button } from "../../components/Button/Button"
import { Statistics } from "./Statistics/Statistics"
import img1 from "../../assets/background.jpg"
import img2 from "../../assets/background2.jpg"
import img3 from "../../assets/background3.jpg"
import { useEffect, useState } from "react"
import { Suscribing } from "./Suscribing/Suscribing"


export const Index = () => {
  const imagesHero = [img1, img2, img3]
  const [imgHero, setImgHero] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImgHero((prev) => (prev + 1) % imagesHero.length)
    }, 7000);

    return () => clearInterval(intervalo)
  }, [])



  return (
    <main className={styles.hero} style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${imagesHero[imgHero]})`
    }}>

      {/* Seccion Hero */}
      <section className={styles.corpus}>
        <div className={styles.corpusTxt}>
          <h1 className={styles.title1}>Resturante Avenida las Palmas</h1>
          <p className={styles.corpusParagraph}>Disfruta lo mejor de la comida típica colombiana en un solo lugar.
            Sabores auténticos, recetas tradicionales y el sazón de casa que
            nos caracteriza. Desde un buen ajiaco santafereño hasta una bandeja
            paisa bien servida, aquí encuentras el verdadero gusto de nuestra tierra.</p>
          <Button text="Ver menú" className="btnLink" />
        </div>
        <div className={styles.corpusImg}>
        </div>
      </section>


      {/* Seccion Platos clásicos */}
      <section className={styles.menu}>
        <h2 className={`${styles.title2} ${styles.menuTitle}`}>Platos clásicos</h2>
        <p className={styles.menuParagraph}>Una selección de los platos más representativos de Colombia, preparados
          con ingredientes frescos y recetas tradicionales que conservan el sabor
          auténtico de cada región.</p>

        <div className={styles.platillos}>

          <article className={styles.platos}>
            <div className={styles.img1}></div>
            <h3>Bandeja Paisa</h3><h3>$ 25.900</h3>
            <p className={styles.platosParagraph}>Frijoles, arroz, carne molida, chicharrón, huevo frito, plátano maduro, arepa y aguacate. Un plato completo y lleno de tradición antioqueña.</p>
          </article>

          <article className={styles.platos}>
            <div className={styles.img2}></div>
            <h3 className={styles.platilloTitle}>Ajiaco Santafereño</h3><h3>$ 18.500</h3>
            <p className={styles.platosParagraph}>Sopa típica bogotana preparada con pollo, papa criolla, mazorca y guascas, acompañada de arroz, alcaparras y crema de leche.</p>
          </article>

          <article className={styles.platos}>
            <div className={styles.img3}></div>
            <h3 className={styles.platilloTitle}>Sancocho de Gallina</h3><h3>$ 22.000</h3>
            <p className={styles.platosParagraph}> Caldo espeso con gallina criolla, yuca, papa, plátano y mazorca,
              perfecto para compartir en familia con arroz y aguacate.</p>
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
            <h3 className={`${styles.title3} ${styles.txtPresentationTitle}`}>Sobrebarriga en Salsa</h3><br />
            <h3 className={`${styles.title3} ${styles.txtPresentationTitle}`}>$ 32.000</h3>
            <p className={styles.txtPresentationParagraph}>Tierna sobrebarriga cocinada lentamente en salsa criolla, acompañada de arroz blanco, papa salada y ensalada fresca. Un clásico lleno de sabor.</p>
            <Button text="Ordenar pedido" className="btnLink" />
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
            <Button text="Ordenar pedido" className="btnLink" />
          </div>
        </article>
      </section>

      {/* Seccion Reseñas */}
      <Statistics />


      {/* Seccion Texto Final */}
      <section className={styles.finalTxt}>
        <p className={styles.finalTxtParagraph}> En Restaurante Avenida Las Palmas trabajamos cada día para llevar a tu mesa lo mejor de nuestra tradición culinaria. Cada plato es preparado con dedicación,
          ingredientes frescos y ese toque casero que nos hace sentir como en familia.</p>
        <h2 className={`${styles.title2} ${styles.finalTxtTitle}`} >El sabor de Colombia en cada bocado</h2>
      </section>


      {/* Seccion Suscríbete */}
      <Suscribing/>

      <Footer />
    </main>

  )
}