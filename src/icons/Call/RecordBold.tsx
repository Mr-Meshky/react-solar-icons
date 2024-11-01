import React, { forwardRef, SVGProps } from 'react';

interface RecordBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordBold = forwardRef<SVGSVGElement, RecordBoldProps>(
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
        <path d="M5.889 16C3.74 16 2 14.21 2 12s1.741-4 3.889-4 3.889 1.791 3.889 4a4.06 4.06 0 0 1-.697 2.286h5.838A4.06 4.06 0 0 1 14.222 12c0-2.209 1.741-4 3.89-4C20.258 8 22 9.791 22 12s-1.741 4-3.889 4z"></path>
      </svg>
    );
  },
);

RecordBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordBold;
