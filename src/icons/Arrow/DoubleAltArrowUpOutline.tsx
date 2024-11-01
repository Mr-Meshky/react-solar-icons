import React, { forwardRef, SVGProps } from 'react';

interface DoubleAltArrowUpOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DoubleAltArrowUpOutline = forwardRef<
  SVGSVGElement,
  DoubleAltArrowUpOutlineProps
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
        fill-rule="evenodd"
        d="M11.512 6.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 7.987l-6.512 5.581a.75.75 0 1 1-.976-1.138zm-7 10 7-6a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 11.987l-6.512 5.581a.75.75 0 1 1-.976-1.138"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

DoubleAltArrowUpOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DoubleAltArrowUpOutline;
