import React, { useState, useEffect, useRef, useCallback } from 'react';
import { styled, GlobalStyles } from '@mui/system';

const slideAnim = `
  @keyframes slideAnim {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const LooperContainer = styled('div')({
  width: '90vw',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

const InnerList = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: 'fit-content',
  
});

const ListInstance = styled('div')(({ speed, direction, animate }) => ({
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center', 
  width: 'max-content',
  animation: animate ? `slideAnim linear infinite ${speed}s ${direction === 'right' ? 'reverse' : 'normal'}` : 'none',
}));

export default function Looper({ speed, direction, children }) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const widthDeficit = parentWidth - width;
    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1,
      );
    }

  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener('resize', setupInstances);

    return () => {
      window.removeEventListener('resize', setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <>
      <GlobalStyles styles={slideAnim} />
      <LooperContainer ref={outerRef}>
        <InnerList ref={innerRef} data-animate="true">
          {[...Array(looperInstances)].map((_, ind) => (
            <ListInstance
              key={ind}
              speed={speed}
              direction={direction}
              animate={innerRef?.current?.getAttribute('data-animate') === 'true'}
            >
              {children}
            </ListInstance>
          ))}
        </InnerList>
      </LooperContainer>
    </>
  );
}
  