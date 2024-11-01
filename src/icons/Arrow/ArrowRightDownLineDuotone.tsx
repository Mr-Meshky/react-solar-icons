import React, { forwardRef, SVGProps } from 'react';

interface ArrowRightDownLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowRightDownLineDuotone = forwardRef<
  SVGSVGElement,
  ArrowRightDownLineDuotoneProps
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
        d="M6.53 5.47a.75.75 0 0 0-1.06 1.06zM5.47 6.53l12 12 1.06-1.06-12-12z"
        opacity=".5"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M18 9v9H9"
      ></path>
    </svg>
  );
});

ArrowRightDownLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowRightDownLineDuotone;
