import React, { forwardRef, SVGProps } from 'react';

interface RecordOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordOutline = forwardRef<SVGSVGElement, RecordOutlineProps>(
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
          fill-rule="evenodd"
          d="M9.464 15.25A4.75 4.75 0 1 0 6 16.75h12a4.75 4.75 0 1 0-3.464-1.5zM6 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m12 6.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

RecordOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordOutline;
