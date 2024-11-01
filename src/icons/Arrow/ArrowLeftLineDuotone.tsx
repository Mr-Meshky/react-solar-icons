import React, { forwardRef, SVGProps } from 'react';

interface ArrowLeftLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowLeftLineDuotone = forwardRef<
  SVGSVGElement,
  ArrowLeftLineDuotoneProps
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
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M20 12H4m0 0 6-6m-6 6 6 6"
      ></path>
    </svg>
  );
});

ArrowLeftLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowLeftLineDuotone;
