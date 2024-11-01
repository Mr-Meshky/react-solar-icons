import React, { forwardRef, SVGProps } from 'react';

interface LoginBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const LoginBold = forwardRef<SVGSVGElement, LoginBoldProps>(
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
          d="M3.5 9.568v4.864c0 2.294 0 3.44.722 4.153.655.647 1.674.706 3.596.712l-.015-.105c-.115-.844-.115-1.916-.115-3.247v-.053c0-.403.331-.73.74-.73.408 0 .739.327.739.73 0 1.396.001 2.37.101 3.105.098.714.275 1.093.548 1.362s.656.445 1.379.54c.744.1 1.731.101 3.146.101h.985c1.415 0 2.401-.002 3.146-.1.723-.096 1.106-.272 1.378-.541.273-.27.451-.648.548-1.362.1-.734.102-1.709.102-3.105V8.108c0-1.397-.002-2.37-.102-3.105-.097-.714-.275-1.093-.547-1.362-.273-.27-.656-.445-1.38-.54C17.728 3 16.742 3 15.327 3h-.985c-1.415 0-2.402.002-3.146.1-.723.096-1.106.272-1.379.541-.273.27-.45.648-.548 1.362-.1.734-.101 1.708-.101 3.105 0 .403-.331.73-.74.73a.734.734 0 0 1-.739-.73v-.053c0-1.33 0-2.403.115-3.247l.015-.105c-1.922.006-2.94.065-3.596.712-.722.713-.722 1.86-.722 4.153m9.885 5.38 2.464-2.432a.723.723 0 0 0 0-1.032l-2.464-2.432a.746.746 0 0 0-1.045 0 .723.723 0 0 0 0 1.032l1.202 1.186H6.457a.734.734 0 0 0-.74.73c0 .403.331.73.74.73h7.085l-1.202 1.186a.723.723 0 0 0 0 1.032.746.746 0 0 0 1.045 0"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

LoginBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default LoginBold;
