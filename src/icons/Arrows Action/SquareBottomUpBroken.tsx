import React, { forwardRef, SVGProps } from 'react';

interface SquareBottomUpBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareBottomUpBroken = forwardRef<
  SVGSVGElement,
  SquareBottomUpBrokenProps
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
        d="M22 12c0 4.714 0 7.071-1.464 8.535C19.178 21.894 17.056 21.993 13 22M2 11c.008-4.055.107-6.178 1.465-7.536C4.929 2 7.286 2 12 2s7.071 0 8.536 1.464c.973.974 1.3 2.343 1.409 4.536"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m3 21 8-8m0 0H5m6 0v6"
      ></path>
    </svg>
  );
});

SquareBottomUpBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareBottomUpBroken;
