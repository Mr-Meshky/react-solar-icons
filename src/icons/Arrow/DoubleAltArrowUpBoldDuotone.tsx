import React, { forwardRef, SVGProps } from 'react';

interface DoubleAltArrowUpBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DoubleAltArrowUpBoldDuotone = forwardRef<
  SVGSVGElement,
  DoubleAltArrowUpBoldDuotoneProps
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
        d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z"
        opacity=".5"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

DoubleAltArrowUpBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DoubleAltArrowUpBoldDuotone;
