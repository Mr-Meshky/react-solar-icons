import React, { forwardRef, SVGProps } from 'react';

interface Login2BrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Login2Broken = forwardRef<SVGSVGElement, Login2BrokenProps>(
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
          stroke={color}
          stroke-linecap="round"
          stroke-width="1.5"
          d="M20 12a8 8 0 0 0-8-8m0 16a7.99 7.99 0 0 0 6.245-3"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M4 12h10m0 0-3-3m3 3-3 3"
        ></path>
      </svg>
    );
  },
);

Login2Broken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Login2Broken;
