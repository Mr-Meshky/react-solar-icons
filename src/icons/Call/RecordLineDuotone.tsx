import React, { forwardRef, SVGProps } from 'react';

interface RecordLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordLineDuotone = forwardRef<SVGSVGElement, RecordLineDuotoneProps>(
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
        <path d="M21 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M10 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"></path>
        <path d="M6.5 15h11" opacity=".5"></path>
      </svg>
    );
  },
);

RecordLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordLineDuotone;
