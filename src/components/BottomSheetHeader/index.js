import react from 'react';
import styles from './bottom-sheet-header.module.css';
import CloseButton from '../CloseButton';

const BottomSheetHeader = (props) => {
  return (
    <react.Fragment>
      <div className={styles.bottomSheetHeader} onTouchStart={props.touch}>
        <div className={styles.bar}></div>
        <h2 className={styles.title}>{props.title}</h2>
        <h3 className={styles.subTitle}>{props.subTitle}</h3>
      </div>
      <CloseButton close={props.close}/>
    </react.Fragment>
  )
}

export default BottomSheetHeader;