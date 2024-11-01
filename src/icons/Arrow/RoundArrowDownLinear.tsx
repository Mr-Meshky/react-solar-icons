import React, { forwardRef, SVGProps } from 'react';

interface RoundArrowDownLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundArrowDownLinear = forwardRef<
  SVGSVGElement,
  RoundArrowDownLinearProps
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
        d="M12 8v8m0 0 3-3m-3 3-3-3"
      ></path>
    </svg>
  );
});

RoundArrowDownLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundArrowDownLinear;
