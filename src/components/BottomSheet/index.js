import react, {useRef, useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import styles from './bottom-sheet.module.css';
import BottomSheetHeader from '../BottomSheetHeader';



const BottomSheet = (props) => {
  const transform = useSpring({config: {tension:210, friction:20 },  transform : props.isVisable ? 'translateY(50%)' : 'translateY(100%)' });

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    console.log(down,my)
    
  })

  return (
    <animated.div
      class={ `${styles.bottomSheet}` }
      style={transform}
      {...bind()}
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