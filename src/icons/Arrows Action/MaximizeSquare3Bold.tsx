import React, { forwardRef, SVGProps } from 'react';

interface MaximizeSquare3BoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MaximizeSquare3Bold = forwardRef<SVGSVGElement, MaximizeSquare3BoldProps>(
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
          d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18"
        ></path>
        <path
          fill={color}
          fill-rule="evenodd"
          d="M3.464 3.464C2 4.93 2 7.286 2 12v1.138c.509-.333 1.069-.48 1.606-.551.645-.087 1.439-.087 2.305-.087h.179c.865 0 1.659 0 2.304.087.711.095 1.463.32 2.08.938.619.618.844 1.37.94 2.08.086.646.086 1.44.086 2.305v.18c0 .865 0 1.659-.087 2.304-.072.537-.218 1.097-.55 1.605L12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M13.25 6.25a.75.75 0 0 0 0 1.5h1.94l-3.72 3.72a.75.75 0 1 0 1.06 1.06l3.72-3.72v1.94a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

MaximizeSquare3Bold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MaximizeSquare3Bold;
