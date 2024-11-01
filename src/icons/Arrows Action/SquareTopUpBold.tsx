import React, { forwardRef, SVGProps } from 'react';

interface SquareTopUpBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareTopUpBold = forwardRef<SVGSVGElement, SquareTopUpBoldProps>(
  ({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
          d="m18.432 8.75 3.205-3.205C22 7.009 22 9.04 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c2.96 0 4.991 0 6.455.363L15.25 5.568V5a2.25 2.25 0 0 0-4.5 0v6A2.25 2.25 0 0 0 13 13.25h6a2.25 2.25 0 0 0 0-4.5z"
        ></path>
        <path
          fill={color}
          d="M19 11.75a.75.75 0 0 0 0-1.5h-4.19l6.72-6.72a.75.75 0 0 0-1.06-1.06l-6.72 6.72V5a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75z"
        ></path>
      </svg>
    );
  },
);

SquareTopUpBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareTopUpBold;