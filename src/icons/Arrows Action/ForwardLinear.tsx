import React, { forwardRef, SVGProps } from 'react';

interface ForwardLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ForwardLinear = forwardRef<SVGSVGElement, ForwardLinearProps>(
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
          d="m19.5 12-5-5m5 5-5 5m5-5h-10c-1.667 0-5 1-5 5"
        ></path>
      </svg>
    );
  },
);

ForwardLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ForwardLinear;