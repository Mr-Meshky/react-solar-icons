import React, { forwardRef, SVGProps } from 'react';

interface RefreshCircle2BrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RefreshCircle2Broken = forwardRef<
  SVGSVGElement,
  RefreshCircle2BrokenProps
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
        d="m15.978 8.715-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0 5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-width="1.5"
        d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      ></path>
    </svg>
  );
});

RefreshCircle2Broken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RefreshCircle2Broken;
