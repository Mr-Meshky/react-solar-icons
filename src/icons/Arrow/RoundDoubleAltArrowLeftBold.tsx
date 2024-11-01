import React, { forwardRef, SVGProps } from 'react';

interface RoundDoubleAltArrowLeftBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundDoubleAltArrowLeftBold = forwardRef<
  SVGSVGElement,
  RoundDoubleAltArrowLeftBoldProps
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7.03-3.53a.75.75 0 1 1 1.06 1.06L13.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06zm-2.94 0a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L9.56 12l2.47-2.47a.75.75 0 0 0 0-1.06"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RoundDoubleAltArrowLeftBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundDoubleAltArrowLeftBold;