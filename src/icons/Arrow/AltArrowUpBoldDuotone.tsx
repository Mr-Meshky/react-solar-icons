import React, { forwardRef, SVGProps } from 'react';

interface AltArrowUpBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const AltArrowUpBoldDuotone = forwardRef<
  SVGSVGElement,
  AltArrowUpBoldDuotoneProps
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
        d="m8.303 11.596 3.327-3.431a.5.5 0 0 1 .74 0l6.43 6.63c.401.414.158 1.205-.37 1.205h-5.723z"
      ></path>
      <path
        fill={color}
        d="M11.293 16H5.57c-.528 0-.771-.791-.37-1.205l2.406-2.482z"
        opacity=".5"
      ></path>
    </svg>
  );
});

AltArrowUpBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default AltArrowUpBoldDuotone;
