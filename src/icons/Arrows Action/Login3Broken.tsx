import React, { forwardRef, SVGProps } from 'react';

interface Login3BrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Login3Broken = forwardRef<SVGSVGElement, Login3BrokenProps>(
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
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M2.001 11.999h14m0 0-3.5-3m3.5 3-3.5 3"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-width="1.5"
          d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121-.769.769-1.947.865-4.122.877M9.002 17c.012 2.175.109 3.353.877 4.121.641.642 1.568.815 3.121.862"
        ></path>
      </svg>
    );
  },
);

Login3Broken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Login3Broken;
