import React, { forwardRef, SVGProps } from 'react';

interface ArrowLeftDownLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowLeftDownLineDuotone = forwardRef<
  SVGSVGElement,
  ArrowLeftDownLineDuotoneProps
>(({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill={color}
        d="M18.53 6.53a.75.75 0 0 0-1.06-1.06zm-1.06-1.06-12 12 1.06 1.06 12-12z"
        opacity=".5"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M6 9v9h9"
      ></path>
    </svg>
  );
});

ArrowLeftDownLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowLeftDownLineDuotone;
