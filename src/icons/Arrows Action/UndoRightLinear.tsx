import React, { forwardRef, SVGProps } from 'react';

interface UndoRightLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoRightLinear = forwardRef<SVGSVGElement, UndoRightLinearProps>(
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
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M20 7H9c-1.87 0-2.804 0-3.5.402A3 3 0 0 0 4.402 8.5C4 9.196 4 10.13 4 12s0 2.804.402 3.5A3 3 0 0 0 5.5 16.598C6.196 17 7.13 17 9 17h7m4-10-3-3m3 3-3 3"
        ></path>
      </svg>
    );
  },
);

UndoRightLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoRightLinear;
