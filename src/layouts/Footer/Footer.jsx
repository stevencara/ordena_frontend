import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={styles.footer} >

      <section className={styles.footerContain}>
        <article className={styles.footerContainDiv}>
          <h3>Nosotros</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis repellendus hic laborum deserunt asperiores, distinctio autem repellat error esse explicabo voluptatem ex sunt. Quam ducimus pariatur placeat non blanditiis!</p>
        </article>

        <article className={styles.footerContainDiv}>
          <h3>Nosotros</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis repellendus hic laborum deserunt asperiores, distinctio autem repellat error esse explicabo voluptatem ex sunt. Quam ducimus pariatur placeat non blanditiis!</p>
        </article>

        <article className={styles.footerContainDiv}>
          <h3>Nosotros</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis repellendus hic laborum deserunt asperiores, distinctio autem repellat error esse explicabo voluptatem ex sunt. Quam ducimus pariatur placeat non blanditiis!</p>
        </article>
        
        <article className={styles.footerContainDiv}>
          <h3>Nosotros</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis repellendus hic laborum deserunt asperiores, distinctio autem repellat error esse explicabo voluptatem ex sunt. Quam ducimus pariatur placeat non blanditiis!</p>
        </article>
      </section>

      <section className="">
        <p>2026 | Todos los Derechos Reservados ®</p>
        <p>Calle 26 #69d-34 Bogotá, Colombia</p>
      </section>

    </footer>
  )
}