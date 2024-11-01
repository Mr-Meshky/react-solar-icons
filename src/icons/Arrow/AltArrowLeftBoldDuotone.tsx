import React, { forwardRef, SVGProps } from 'react';

interface AltArrowLeftBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const AltArrowLeftBoldDuotone = forwardRef<
  SVGSVGElement,
  AltArrowLeftBoldDuotoneProps
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
        d="M11.596 8.303 8.165 11.63a.5.5 0 0 0 0 .74l6.63 6.43c.414.401 1.205.158 1.205-.37v-5.723z"
      ></path>
      <path
        fill={color}
        d="M16 11.293V5.57c0-.528-.791-.771-1.205-.37l-2.482 2.406z"
        opacity=".5"
      ></path>
    </svg>
  );
});

AltArrowLeftBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default AltArrowLeftBoldDuotone;
