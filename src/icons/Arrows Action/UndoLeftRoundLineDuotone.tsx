import React, { forwardRef, SVGProps } from 'react';

interface UndoLeftRoundLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoLeftRoundLineDuotone = forwardRef<
  SVGSVGElement,
  UndoLeftRoundLineDuotoneProps
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
        d="M7 4 4 7l3 3"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-width="1.5"
        d="M4 7h11a5 5 0 0 1 0 10H8"
        opacity=".5"
      ></path>
    </svg>
  );
});

UndoLeftRoundLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoLeftRoundLineDuotone;
