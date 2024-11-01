import React, { forwardRef, SVGProps } from 'react';

interface UndoLeftRoundLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoLeftRoundLinear = forwardRef<SVGSVGElement, UndoLeftRoundLinearProps>(
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
          d="M4 7h11a5 5 0 0 1 0 10H8M4 7l3-3M4 7l3 3"
        ></path>
      </svg>
    );
  },
);

UndoLeftRoundLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoLeftRoundLinear;
