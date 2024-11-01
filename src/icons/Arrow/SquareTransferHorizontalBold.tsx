import React, { forwardRef, SVGProps } from 'react';

interface SquareTransferHorizontalBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareTransferHorizontalBold = forwardRef<
  SVGSVGElement,
  SquareTransferHorizontalBoldProps
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m15 1.25a.75.75 0 0 1 .493 1.315l-3.437 3a.75.75 0 0 1-.987-1.13L15 14.75H7a.75.75 0 0 1 0-1.5zm-5.997-6.743a.75.75 0 0 1-.072 1.058L9 9.25h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.493-1.315l3.437-3a.75.75 0 0 1 1.059.072"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

SquareTransferHorizontalBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareTransferHorizontalBold;