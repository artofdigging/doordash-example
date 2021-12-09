import react from 'react';
import styles from './bottom-sheet-header.module.css';
import CloseButton from '../CloseButton';

const BottomSheetHeader = (props) => {
  return (
    <div className={styles.bottomSheetHeader}>
      <div className={styles.bar}></div>
      <CloseButton close={props.close}/>
      <h2 className={styles.title}>{props.title}</h2>
      <h3 className={styles.subTitle}>{props.subTitle}</h3>
    </div>
  )
}

export default BottomSheetHeader;