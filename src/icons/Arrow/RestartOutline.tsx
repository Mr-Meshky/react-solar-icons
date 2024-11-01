import React, { forwardRef, SVGProps } from 'react';

interface RestartOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RestartOutline = forwardRef<SVGSVGElement, RestartOutlineProps>(
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
          d="M18.364 3.058a.75.75 0 0 1 .75.75V8.05a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1 0-1.5h2.36a7.251 7.251 0 1 0 2.523 3.822.75.75 0 1 1 1.45-.387 8.75 8.75 0 1 1-2.84-4.447v-2.48a.75.75 0 0 1 .75-.75"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

RestartOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RestartOutline;
