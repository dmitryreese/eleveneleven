import React, { FC } from 'react';

import './styles.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode;
  onClick?: () => void
}

export const Button: FC<Props> = ({ children, onClick, ...props }) => {
  return (
    <button className="button" onClick={onClick} {...props}>{children}</button>
  );
}
