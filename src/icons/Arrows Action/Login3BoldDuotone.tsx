import React, { forwardRef, SVGProps } from 'react';

interface Login3BoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Login3BoldDuotone = forwardRef<SVGSVGElement, Login3BoldDuotoneProps>(
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
          d="M16 2h-1c-2.829 0-4.242 0-5.121.879S9 5.172 9 8v8c0 2.829 0 4.243.879 5.122.878.878 2.292.878 5.119.878H16c2.828 0 4.242 0 5.121-.879C22 20.243 22 18.828 22 16V8c0-2.828 0-4.243-.879-5.121S18.828 2 16 2"
          opacity=".5"
        ></path>
        <path
          fill={color}
          fill-rule="evenodd"
          d="M1.251 11.999a.75.75 0 0 1 .75-.75h11.973l-1.961-1.68a.75.75 0 0 1 .976-1.14l3.5 3a.75.75 0 0 1 0 1.14l-3.5 3a.75.75 0 0 1-.976-1.14l1.96-1.68H2.002a.75.75 0 0 1-.75-.75"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

Login3BoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Login3BoldDuotone;
