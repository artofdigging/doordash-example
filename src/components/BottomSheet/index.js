import react, {useState} from 'react';
import styles from './bottom-sheet.module.css';
import BottomSheetHeader from '../BottomSheetHeader';


const BottomSheet = (props) => {

  return (
    <div class={ `${styles.bottomSheet} ${ props.isVisable ? styles.show : styles.hide}` }>
      <BottomSheetHeader 
        title="My Custom Title"
        subTitle="Some more information here"
        close={props.close}
      />
      {props.children}
    </div>
  )

}


export default BottomSheet;