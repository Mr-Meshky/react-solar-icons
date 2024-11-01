import React, { forwardRef, SVGProps } from 'react';

interface RecordLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordLinear = forwardRef<SVGSVGElement, RecordLinearProps>(
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
        <path d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M6 16h12"></path>
      </svg>
    );
  },
);

RecordLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordLinear;
