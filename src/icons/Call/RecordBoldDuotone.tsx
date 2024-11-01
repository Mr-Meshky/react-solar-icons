import React, { forwardRef, SVGProps } from 'react';

interface RecordBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordBoldDuotone = forwardRef<SVGSVGElement, RecordBoldDuotoneProps>(
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
        <path d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"></path>
        <path
          d="M6 16h12a3.99 3.99 0 0 1-2.646-1H8.646c-.705.623-1.632 1-2.646 1"
          opacity=".5"
        ></path>
      </svg>
    );
  },
);

RecordBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordBoldDuotone;
