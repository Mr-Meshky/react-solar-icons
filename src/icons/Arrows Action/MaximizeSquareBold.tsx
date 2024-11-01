import React, { forwardRef, SVGProps } from 'react';

interface MaximizeSquareBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MaximizeSquareBold = forwardRef<SVGSVGElement, MaximizeSquareBoldProps>(
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
          d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m10.5-5a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V8.81l-7.44 7.44h1.94a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3.75a.75.75 0 0 1 1.5 0v1.94l7.44-7.44h-1.94A.75.75 0 0 1 12.5 7"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

MaximizeSquareBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MaximizeSquareBold;