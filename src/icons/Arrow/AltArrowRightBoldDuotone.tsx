import React, { forwardRef, SVGProps } from 'react';

interface AltArrowRightBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const AltArrowRightBoldDuotone = forwardRef<
  SVGSVGElement,
  AltArrowRightBoldDuotoneProps
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
        d="m12.404 8.303 3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723z"
      ></path>
      <path
        fill={color}
        d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406z"
        opacity=".5"
      ></path>
    </svg>
  );
});

AltArrowRightBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default AltArrowRightBoldDuotone;
