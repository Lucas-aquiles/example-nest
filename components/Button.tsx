import Link from 'next/link';

import {classNames} from '../lib/functions';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  href?: string;
  size: keyof typeof sizeClasses;
  color: 'primary' | 'secondary' | 'opacity' | 'green';
  variant: keyof typeof variantClasses;
  fullWidth?: boolean;
  cypress: string;
  target?: string;
  rel?: string;
  responsive?: boolean;
  onlyIcon?: boolean;
};

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const variantClasses = {
  contained: `px-10 py-[12px] text-white border-2`,
  outlined: `px-10 py-[12px] border-2`,
  transparent: `p-0 m-0`,
};

const colorClasses = {
  primary_contained: `border-primary-500 bg-primary-500 hover:bg-primary-600 hover:border-primary-600`,
  secondary_contained: `border-secondary-500 bg-secondary-500 hover:bg-secondary-600 hover:border-secondary-600`,
  opacity_contained: `font-bold text-body-1 hover:text-gray-900`,
  green_contained: `border-green-500 bg-green-500 hover:bg-green-600 hover:border-green-600`, // Added
  primary_outlined: 'text-primary-500 border-primary-500 hover:bg-primary-200',
  secondary_outlined: 'text-secondary-500 border-secondary-500 hover:bg-secondary-200',
  opacity_outlined: 'font-bold text-body-1 hover:text-gray-900',
  green_outlined: 'text-green-500 border-green-500 hover:bg-green-200', // Added
  primary_transparent: 'text-primary-500 hover:text-primary-600',
  secondary_transparent: 'text-secondary-500 hover:text-secondary-600',
  opacity_transparent: 'font-bold text-body-1 hover:text-gray-900',
  green_transparent: 'text-green-500 hover:text-green-600', // Added
};

const Button = ({
  size,
  color,
  variant,
  href,
  className,
  children,
  disabled,
  fullWidth,
  cypress,
  target,
  rel,
  responsive,
  onlyIcon,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    sizeClasses[size],
    variantClasses[variant],
    colorClasses[`${color}_${variant}`],
    disabled ? 'opacity-10 cursor-not-allowed pointer-events-none' : 'opacity-100',
    'rounded-md font-semibold leading-6',
    fullWidth ? 'w-full' : '',
    className || ''
  );

  return href ? (
    <Link href={href} className={classes} target={target} rel={rel}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...rest}>
      {onlyIcon ? children : <p>{children}</p>}
    </button>
  );
};

Button.defaultProps = {
  size: 'md',
  color: 'primary',
  variant: 'contained',
  cypress: 'button',
};

export default Button;
