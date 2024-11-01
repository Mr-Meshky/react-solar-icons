import React, { forwardRef, SVGProps } from 'react';

interface SquareSortVerticalBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareSortVerticalBoldDuotone = forwardRef<
  SVGSVGElement,
  SquareSortVerticalBoldDuotoneProps
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
        d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M12.555 11.255a.75.75 0 0 1-1.11-1.01l2.5-2.75a.75.75 0 0 1 1.11 0l2.5 2.75a.75.75 0 0 1-1.11 1.01L15.25 9.94V16a.75.75 0 0 1-1.5 0V9.94z"
      ></path>
      <path
        fill={color}
        d="M7.555 12.746a.75.75 0 1 0-1.11 1.008l2.5 2.75a.75.75 0 0 0 1.11 0l2.5-2.75a.75.75 0 0 0-1.11-1.008L10.25 14.06V8a.75.75 0 1 0-1.5 0v6.06z"
      ></path>
    </svg>
  );
});

SquareSortVerticalBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareSortVerticalBoldDuotone;