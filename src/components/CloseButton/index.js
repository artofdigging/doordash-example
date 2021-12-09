import react from 'react'
import styles from './close-button.module.css';
import CloseIcon from '../../icons/Close';

const CloseButton = (props) => {
  return (
    <div className={styles.close} onClick={props.close}>
      <CloseIcon/>
    </div>
  )
}

export default CloseButton;