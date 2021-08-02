import React from 'react';

const Link = ({className, href, children}) => {
  const onClick = (event) => {
    event.preventDefault();
  };

  return (
    <a 
      onClick={onClick} 
      classnName={className} 
      href={href}
    >
      {children}
    </a>
  )
};

export default Link;