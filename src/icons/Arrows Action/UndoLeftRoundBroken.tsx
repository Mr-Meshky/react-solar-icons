import React, { forwardRef, SVGProps } from 'react';

interface UndoLeftRoundBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoLeftRoundBroken = forwardRef<SVGSVGElement, UndoLeftRoundBrokenProps>(
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
          d="M4 7h11a5 5 0 0 1 0 10M4 7l3-3M4 7l3 3m1 7h3"
        ></path>
      </svg>
    );
  },
);

UndoLeftRoundBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoLeftRoundBroken;
