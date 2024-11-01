import React, { forwardRef, SVGProps } from 'react';

interface ImportBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ImportBoldDuotone = forwardRef<SVGSVGElement, ImportBoldDuotoneProps>(
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
        <path fill={color} d="M4 12a8 8 0 1 0 16 0z" opacity=".5"></path>
        <path
          fill={color}
          fill-rule="evenodd"
          d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

ImportBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ImportBoldDuotone;
