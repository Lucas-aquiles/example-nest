import React from 'react';
import {classNames} from '../lib/functions';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: VoidFunction;
  cypress?: string;
}

const Card = ({children, className, onClick, cypress}: CardProps) => (
  <div
    onClick={onClick}
    className={classNames('rounded-xl px-[14px] py-9 lg:px-6', className ? className : '')}
    data-cy={cypress}
  >
    {children}
  </div>
);

Card.defaultProps = {
  className: 'bg-white',
};

export default Card;
