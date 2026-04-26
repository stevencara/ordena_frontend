import styles from './Input.module.css'

export const Input = ({
  label = "",
  type,
  className,
  placeholder = "",
  name = "",
  value = "",
  min="",
  max="",
  onChange,
  variant = "dark"
}) => {

  const labelStyle = variant === "dark" ? styles.labelLight : styles.labelDark;

  return (
    <div className={styles.inputContainer}>
      <label className={`${styles.labelBase} ${labelStyle}`} >{label}
        <input
          type={type}
          placeholder={placeholder}
          className={`${styles.input} ${styles[className]}`}
          name={name}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export const InputSelect = ({
  label = "Tipo",
  className,
  name,
  value,
  onChange,
  data,
  variant = "dark"
}) => {

  const labelStyle = variant === "dark" ? styles.labelLight : styles.labelDark

  return (
    <div>
      <label className={`${styles.labelBase} ${labelStyle}`} >{label}
        <select
           className={`${styles.input} ${styles[className]}`}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="">Seleccione una opción</option>
          {data.map((d, index) => (
            <option key={index} value={d}>{d}</option>
          ))}

        </select>
      </label>
    </div>
  )
}
