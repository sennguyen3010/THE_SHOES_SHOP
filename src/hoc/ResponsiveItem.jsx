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
      window.onresize = handleOnResize;
      return () => {
        window.removeEventListener('resize', handleOnResize);
      };
    };
  }, []);

  if (screen.width < 768 && props.componentMobile) {
    //load component mobile
    return <props.componentMobile />;
  }
  //ngược lại thì load component thường

  return <props.component />;
}
