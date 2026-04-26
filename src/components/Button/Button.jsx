import styles from './Button.module.css'

export const Button = ({text, type= 'button', className, onClick = () => {} }) => {
  return (
    <button type={type} className={`${styles.btn} ${styles[className]}`} onClick={onClick} >{text}</button>
  )
}
