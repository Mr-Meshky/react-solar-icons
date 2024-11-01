import React, { forwardRef, SVGProps } from 'react';

interface AltArrowDownBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const AltArrowDownBoldDuotone = forwardRef<
  SVGSVGElement,
  AltArrowDownBoldDuotoneProps
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
        d="m8.303 12.404 3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z"
      ></path>
      <path
        fill={color}
        d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z"
        opacity=".5"
      ></path>
    </svg>
  );
});

AltArrowDownBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default AltArrowDownBoldDuotone;
