import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ResponsiveItem(props) {
  const [screen, setscreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleOnResize = () => {
      setscreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.onresize = handleOnResize;
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, []);

  if (screen.width < 768 && props.componentMobile) {
    return <props.componentMobile />;
  }

  return <props.component />;
}
