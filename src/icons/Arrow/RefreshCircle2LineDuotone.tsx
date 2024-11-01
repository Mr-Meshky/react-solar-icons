import React, { forwardRef, SVGProps } from 'react';

interface RefreshCircle2LineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RefreshCircle2LineDuotone = forwardRef<
  SVGSVGElement,
  RefreshCircle2LineDuotoneProps
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
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        stroke-width="1.5"
        opacity=".5"
      ></circle>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m15.978 8.715-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0 5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"
      ></path>
    </svg>
  );
});

RefreshCircle2LineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RefreshCircle2LineDuotone;
