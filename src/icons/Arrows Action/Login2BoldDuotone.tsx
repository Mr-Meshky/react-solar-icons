import React, { forwardRef, SVGProps } from 'react';

interface Login2BoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Login2BoldDuotone = forwardRef<SVGSVGElement, Login2BoldDuotoneProps>(
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
          d="M10.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H4a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
          clip-rule="evenodd"
        ></path>
        <path fill={color} d="M12 20a8 8 0 1 0 0-16z" opacity=".5"></path>
      </svg>
    );
  },
);

Login2BoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Login2BoldDuotone;
