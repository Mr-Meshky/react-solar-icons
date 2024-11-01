import React, { forwardRef, SVGProps } from 'react';

interface RoundTransferDiagonalOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundTransferDiagonalOutline = forwardRef<
  SVGSVGElement,
  RoundTransferDiagonalOutlineProps
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
        d="M6.207 4.788A9.25 9.25 0 0 0 16.525 20.07l-5.897-6.194V16.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 1.294-.517l7.363 7.735A9.25 9.25 0 0 0 7.462 3.938l5.666 6.143V7.5a.75.75 0 0 1 1.5 0V12a.75.75 0 0 1-1.3.508zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RoundTransferDiagonalOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundTransferDiagonalOutline;