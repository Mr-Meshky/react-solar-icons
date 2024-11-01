import React, { forwardRef, SVGProps } from 'react';

interface Logout2BoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Logout2Bold = forwardRef<SVGSVGElement, Logout2BoldProps>(
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
          d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
          clip-rule="evenodd"
        ></path>
        <path
          fill={color}
          d="M4 12a8 8 0 0 0 8 8v-3.75c0-.943 0-1.414-.293-1.707s-.764-.293-1.707-.293"
        ></path>
      </svg>
    );
  },
);

Logout2Bold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Logout2Bold;
