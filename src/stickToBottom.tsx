import React, { CSSProperties, useEffect, useState } from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const stickyStyle = {
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '100%',
} as CSSProperties;

const uid = Math.random().toString().substring(16);

const StickToBottom = (props: Props) => {
  const [sticked, setSticked] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', setStickIfNeeded);
    window.addEventListener('resize', setStickIfNeeded);
    setStickIfNeeded();
    return () => {
      window.removeEventListener('scroll', setStickIfNeeded);
      window.removeEventListener('resize', setStickIfNeeded);
    };
  });

  const setStickIfNeeded = () => {
    const bottom = document
      .getElementById(uid)
      ?.getBoundingClientRect()?.bottom;
    if (!bottom) return;
    setSticked(bottom >= window.innerHeight);
  };

  return (
    <div>
      <div id={uid}>{props.children}</div>
      <div style={stickyStyle}>{sticked && props.children}</div>
    </div>
  );
};

export default StickToBottom