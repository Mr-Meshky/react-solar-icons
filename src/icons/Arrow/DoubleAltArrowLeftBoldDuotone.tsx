import React, { forwardRef, SVGProps } from 'react';

interface DoubleAltArrowLeftBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DoubleAltArrowLeftBoldDuotone = forwardRef<
  SVGSVGElement,
  DoubleAltArrowLeftBoldDuotoneProps
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
        d="M17.75 19a.75.75 0 0 1-1.32.488l-6-7a.75.75 0 0 1 0-.976l6-7A.75.75 0 0 1 17.75 5z"
        opacity=".5"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M13.488 19.57a.75.75 0 0 0 .081-1.058L7.988 12l5.581-6.512a.75.75 0 1 0-1.138-.976l-6 7a.75.75 0 0 0 0 .976l6 7a.75.75 0 0 0 1.057.082"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

DoubleAltArrowLeftBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DoubleAltArrowLeftBoldDuotone;
