import React, { forwardRef, SVGProps } from 'react';

interface MaximizeSquare3BrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MaximizeSquare3Broken = forwardRef<
  SVGSVGElement,
  MaximizeSquare3BrokenProps
>(({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
        stroke-width="1.5"
        d="M12 2c4.714 0 7.071 0 8.536 1.464C22 4.93 22 7.286 22 12s0 7.071-1.464 8.535C19.178 21.894 17.056 21.993 13 22M2 11c.008-4.055.107-6.178 1.465-7.536.973-.973 2.342-1.3 4.535-1.409"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m12 12 5-5m0 0h-3.75M17 7v3.75"
      ></path>
      <path
        stroke={color}
        stroke-width="1.5"
        d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18Z"
      ></path>
    </svg>
  );
});

MaximizeSquare3Broken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MaximizeSquare3Broken;
