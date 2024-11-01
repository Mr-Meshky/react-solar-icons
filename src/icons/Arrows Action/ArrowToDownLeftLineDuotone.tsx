import React, { forwardRef, SVGProps } from 'react';

interface ArrowToDownLeftLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowToDownLeftLineDuotone = forwardRef<
  SVGSVGElement,
  ArrowToDownLeftLineDuotoneProps
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
        d="m17 14.5-5 5-5-5"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-width="1.5"
        d="M12 19.5v-10c0-1.667-1-5-5-5"
        opacity=".5"
      ></path>
    </svg>
  );
});

ArrowToDownLeftLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowToDownLeftLineDuotone;
