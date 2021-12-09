import react from 'react';
import styles from './button.module.css';


const button = (props) => {
  return (
    <button class={styles.button} onClick={props.clickFunc}>
      {props.text}
    </button>
  )

}

export default button;