import React, { forwardRef, SVGProps } from 'react';

interface MinimizeSquare2BoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MinimizeSquare2Bold = forwardRef<SVGSVGElement, MinimizeSquare2BoldProps>(
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
          d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m4.47 5.53a.75.75 0 0 1 0-1.06l2.22-2.22H7.5a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-1.19l-2.22 2.22a.75.75 0 0 1-1.06 0m10.03-6.28a.75.75 0 0 0 0-1.5h-1.19l2.22-2.22a.75.75 0 0 0-1.06-1.06l-2.22 2.22V7.5a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75zm-9.75-.75c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.19L7.53 6.47a.75.75 0 0 0-1.06 1.06l2.22 2.22H7.5a.75.75 0 0 0-.75.75m10.78 5.97a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.19a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-1.19z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

MinimizeSquare2Bold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MinimizeSquare2Bold;