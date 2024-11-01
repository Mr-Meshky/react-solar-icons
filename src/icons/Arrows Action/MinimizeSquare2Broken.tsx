import React, { forwardRef, SVGProps } from 'react';

interface MinimizeSquare2BrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MinimizeSquare2Broken = forwardRef<
  SVGSVGElement,
  MinimizeSquare2BrokenProps
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
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M10.5 13.5h-3m3 0v3m0-3L7 17M13.5 10.5h3m-3 0v-3m0 3L17 7M10.5 10.5h-3m3 0v-3m0 3L7 7M13.5 13.5h3m-3 0v3m0-3L17 17"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-width="1.5"
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
      ></path>
    </svg>
  );
});

MinimizeSquare2Broken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MinimizeSquare2Broken;
