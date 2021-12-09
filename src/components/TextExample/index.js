import react from 'react';
import styles from './text-example.module.css';

const TextExample = () => {
  return (
    <div className={styles.textExample}>
      The user of this component can put whatever content I want in here, and it should be scrollable (without causing the sheet to pull up or down)!
    </div>
  )
}


export default TextExample;