import React, { forwardRef, SVGProps } from 'react';

interface Logout2BoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Logout2BoldDuotone = forwardRef<SVGSVGElement, Logout2BoldDuotoneProps>(
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
        <path fill={color} d="M12 20a8 8 0 1 1 0-16z" opacity=".5"></path>
        <path
          fill={color}
          fill-rule="evenodd"
          d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

Logout2BoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Logout2BoldDuotone;
