import React, { forwardRef, SVGProps } from 'react';

interface LogoutBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const LogoutBold = forwardRef<SVGSVGElement, LogoutBoldProps>(
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
          d="M3.5 9.568v4.864c0 2.294 0 3.44.722 4.153.655.647 1.674.706 3.596.712-.101-.675-.122-1.48-.128-2.428a.734.734 0 0 1 .735-.734.735.735 0 0 1 .744.726c.006 1.064.033 1.818.14 2.39.103.552.267.87.507 1.108.273.27.656.445 1.38.54.744.1 1.73.101 3.145.101h.985c1.415 0 2.401-.002 3.146-.1.723-.096 1.106-.272 1.378-.541.273-.27.451-.648.548-1.362.1-.734.102-1.709.102-3.105V8.108c0-1.397-.002-2.37-.102-3.105-.097-.714-.275-1.093-.547-1.362-.273-.27-.656-.445-1.38-.54C17.728 3 16.742 3 15.327 3h-.985c-1.415 0-2.401.002-3.146.1-.723.096-1.106.272-1.379.541-.24.237-.404.556-.507 1.108-.107.572-.134 1.326-.14 2.39a.735.735 0 0 1-.744.726.734.734 0 0 1-.735-.734c.006-.948.027-1.753.128-2.428-1.922.006-2.94.065-3.596.712-.722.713-.722 1.86-.722 4.153m2.434 2.948a.723.723 0 0 1 0-1.032l1.97-1.946a.746.746 0 0 1 1.046 0 .723.723 0 0 1 0 1.032l-.71.7h7.086c.408 0 .74.327.74.73s-.332.73-.74.73H8.24l.71.7a.723.723 0 0 1 0 1.032.746.746 0 0 1-1.046 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

LogoutBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default LogoutBold;
