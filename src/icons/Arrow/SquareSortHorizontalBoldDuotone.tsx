import React, { forwardRef, SVGProps } from 'react';

interface SquareSortHorizontalBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareSortHorizontalBoldDuotone = forwardRef<
  SVGSVGElement,
  SquareSortHorizontalBoldDuotoneProps
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
        fill={color}
        d="M20.536 20.536C22 19.07 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M11.255 11.445a.75.75 0 0 1-1.01 1.11l-2.75-2.5a.75.75 0 0 1 0-1.11l2.75-2.5a.75.75 0 0 1 1.01 1.11L9.94 8.75H16a.75.75 0 0 1 0 1.5H9.94z"
      ></path>
      <path
        fill={color}
        d="M12.746 16.445a.75.75 0 1 0 1.008 1.11l2.75-2.5a.75.75 0 0 0 0-1.11l-2.75-2.5a.75.75 0 1 0-1.008 1.11l1.314 1.195H8a.75.75 0 0 0 0 1.5h6.06z"
      ></path>
    </svg>
  );
});

SquareSortHorizontalBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareSortHorizontalBoldDuotone;
