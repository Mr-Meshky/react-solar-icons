import React, { forwardRef, SVGProps } from 'react';

interface RoundArrowRightDownLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundArrowRightDownLinear = forwardRef<
  SVGSVGElement,
  RoundArrowRightDownLinearProps
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
      <circle cx="12" cy="12" r="10" stroke={color} stroke-width="1.5"></circle>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m9 9 6 6m0 0v-4.5m0 4.5h-4.5"
      ></path>
    </svg>
  );
});

RoundArrowRightDownLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundArrowRightDownLinear;
