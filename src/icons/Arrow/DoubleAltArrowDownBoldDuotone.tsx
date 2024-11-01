import React, { forwardRef, SVGProps } from 'react';

interface DoubleAltArrowDownBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DoubleAltArrowDownBoldDuotone = forwardRef<
  SVGSVGElement,
  DoubleAltArrowDownBoldDuotoneProps
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
        d="M5 6.25a.75.75 0 0 0-.488 1.32l7 6c.28.24.695.24.976 0l7-6A.75.75 0 0 0 19 6.25z"
        opacity=".5"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M4.43 10.512a.75.75 0 0 1 1.058-.081L12 16.012l6.512-5.581a.75.75 0 1 1 .976 1.139l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.058"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

DoubleAltArrowDownBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DoubleAltArrowDownBoldDuotone;
