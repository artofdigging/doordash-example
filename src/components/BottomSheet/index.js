import react, {useRef, useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import styles from './bottom-sheet.module.css';
import BottomSheetHeader from '../BottomSheetHeader';



const BottomSheet = (props) => {
  const ref = react.useRef();
  const [isCollapsed, setCollapsed] = useState(true);

  const transform = useSpring({
    config:{
      tension:210,
      friction:20
    },
    from: { transform: 'translateY(100vh)'},
    to: {
      transform : (props.isVisable & isCollapsed ? 'translateY(50vh)'  :  (props.isVisable & !isCollapsed) ? 'translateY(0vh)' : 'translateY(100vh)')
    }
  })

  const handleTouch = event => {
    event.stopPropagation(); 
    setCollapsed(!isCollapsed);
  };

  const close = (event) => {
    props.close(event);

    if(!isCollapsed){
      setCollapsed(!isCollapsed);
    }
  }
  

  return (
    <animated.div
      class={ `${styles.bottomSheet}` }
      style={transform}
      ref={ref}
    > 
        <BottomSheetHeader 
          title={props.title}
          subTitle={props.subTitle}
          close={close}
          touch={handleTouch}
        />

      <div className={styles.bottomSheetContent}>
        {props.children}
      </div>
    </animated.div>
  )

}


export default BottomSheet;