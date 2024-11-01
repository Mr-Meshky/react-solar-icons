import React, { forwardRef, SVGProps } from 'react';

interface RecordBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordBroken = forwardRef<SVGSVGElement, RecordBrokenProps>(
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
        <path d="M21 11.5A3.5 3.5 0 1 1 17.5 8M10 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M6.5 15h11"></path>
      </svg>
    );
  },
);

RecordBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordBroken;
