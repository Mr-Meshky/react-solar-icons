import React, { forwardRef, SVGProps } from 'react';

interface ForwardBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ForwardBroken = forwardRef<SVGSVGElement, ForwardBrokenProps>(
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
          d="m19.5 12-5-5m5 5-5 5m5-5H13m-3.5 0c-1.667 0-5 1-5 5"
        ></path>
      </svg>
    );
  },
);

ForwardBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ForwardBroken;
