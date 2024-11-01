import React, { forwardRef, SVGProps } from 'react';

interface Logout3BoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Logout3Bold = forwardRef<SVGSVGElement, Logout3BoldProps>(
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
          d="M16.125 12a.75.75 0 0 0-.75-.75H4.403l1.96-1.68a.75.75 0 1 0-.976-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .976-1.14l-1.96-1.68h10.972a.75.75 0 0 0 .75-.75"
          clip-rule="evenodd"
        ></path>
        <path
          fill={color}
          d="M9.375 8c0 .702 0 1.053.169 1.306a1 1 0 0 0 .276.275c.252.169.603.169 1.305.169h4.25a2.25 2.25 0 1 1 0 4.5h-4.25c-.702 0-1.053 0-1.305.168a1 1 0 0 0-.276.276c-.169.253-.169.604-.169 1.306 0 2.828 0 4.243.879 5.121s2.293.879 5.12.879h1c2.83 0 4.244 0 5.122-.879.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C20.618 2 19.203 2 16.375 2h-1c-2.828 0-4.242 0-5.121.879-.879.878-.879 2.293-.879 5.121"
        ></path>
      </svg>
    );
  },
);

Logout3Bold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Logout3Bold;
