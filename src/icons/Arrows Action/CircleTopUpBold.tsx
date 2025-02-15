import React, { forwardRef, SVGProps } from 'react';

interface CircleTopUpBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CircleTopUpBold = forwardRef<SVGSVGElement, CircleTopUpBoldProps>(
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
          d="M14.5 2.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.56l-6.72 6.72a.75.75 0 1 1-1.06-1.06l6.72-6.72h-4.19a.75.75 0 0 1-.75-.75"
          clip-rule="evenodd"
        ></path>
        <path
          fill={color}
          d="M11.25 2.75c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10q-.001-.9-.154-1.755A2.25 2.25 0 0 1 19 8.75v-.568l-4.159 4.159a2.25 2.25 0 1 1-3.182-3.182L15.818 5h-.568a2.25 2.25 0 0 1-2.245-2.096q-.856-.153-1.755-.154"
        ></path>
      </svg>
    );
  },
);

CircleTopUpBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CircleTopUpBold;
