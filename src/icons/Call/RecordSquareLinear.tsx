import React, { forwardRef, SVGProps } from 'react';

interface RecordSquareLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordSquareLinear = forwardRef<SVGSVGElement, RecordSquareLinearProps>(
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
        <path d="M18.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M10.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M8 14.5h8"></path>
        <path d="M2 12c0-4.714 0-7.07 1.464-8.535C4.93 2 7.286 2 12 2s7.071 0 8.535 1.465C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12"></path>
      </svg>
    );
  },
);

RecordSquareLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordSquareLinear;
