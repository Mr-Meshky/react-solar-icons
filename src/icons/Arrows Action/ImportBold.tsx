import React, { forwardRef, SVGProps } from 'react';

interface ImportBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ImportBold = forwardRef<SVGSVGElement, ImportBoldProps>(
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
          fill={color}
          fill-rule="evenodd"
          d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06"
          clip-rule="evenodd"
        ></path>
        <path
          fill={color}
          d="M17.748 12c-.448 0-.84.274-1.157.591l-3 3a2.25 2.25 0 0 1-3.182 0l-3-3C7.092 12.274 6.7 12 6.252 12H4a8 8 0 1 0 16 0z"
        ></path>
      </svg>
    );
  },
);

ImportBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ImportBold;
