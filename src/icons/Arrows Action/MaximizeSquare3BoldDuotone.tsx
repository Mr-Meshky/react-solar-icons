import React, { forwardRef, SVGProps } from 'react';

interface MaximizeSquare3BoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MaximizeSquare3BoldDuotone = forwardRef<
  SVGSVGElement,
  MaximizeSquare3BoldDuotoneProps
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"
        opacity=".5"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M12.5 7a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V8.81l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72h-1.94A.75.75 0 0 1 12.5 7"
        clip-rule="evenodd"
      ></path>
      <path
        fill={color}
        d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5"
      ></path>
    </svg>
  );
});

MaximizeSquare3BoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MaximizeSquare3BoldDuotone;
