import styles from './Modal.module.css';

export function Modal({ isOpenModal, onCloseModal, children }) {
  if (!isOpenModal) return null;

  return (
    <div className={styles.modalOverlay} onClick={onCloseModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}  >
        <button text="Cerrar" style={{ display: 'flex', width: '100%', justifyContent: 'end', backgroundColor: 'white', border:'none' }} onClick={onCloseModal}>
          <i className="fa-solid fa-rectangle-xmark" style={{ color: 'brown', fontSize:'24px', cursor:'pointer' }}></i>
        </button>
        {children}
      </div>
    </div>
  );
}

