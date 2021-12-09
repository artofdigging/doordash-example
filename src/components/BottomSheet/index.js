import react, {useRef, useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import styles from './bottom-sheet.module.css';
import BottomSheetHeader from '../BottomSheetHeader';



const BottomSheet = (props) => {
  const transform = useSpring({ transform : props.isVisable ? 'translateY(0%)' : 'translateY(100%)' });

  /*const [bottomSheetPos, setBottomSheetPos] = useState({x: 0, y: 0})*/
  

  return (
    <animated.div
      class={ `${styles.bottomSheet}` }
      style={transform}
    >
      <BottomSheetHeader 
        title="My Custom Title"
        subTitle="Some more information here"
        close={props.close}
      />

      <div className={styles.bottomSheetContent}>
        {props.children}
      </div>
    </animated.div>
  )

}


export default BottomSheet;