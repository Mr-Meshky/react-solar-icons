import React, { forwardRef, SVGProps } from 'react';

interface RecordSquareBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordSquareBoldDuotone = forwardRef<
  SVGSVGElement,
  RecordSquareBoldDuotoneProps
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
        d="M3.464 3.465C2 4.929 2 7.286 2 12s0 7.071 1.464 8.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.464C22 19.07 22 16.714 22 12s0-7.07-1.465-8.535C19.072 2 16.714 2 12 2S4.929 2 3.464 3.465"
        opacity=".5"
      ></path>
      <path
        fill-rule="evenodd"
        d="M12.75 12c0 .644.188 1.245.51 1.75h-2.52A3.25 3.25 0 1 0 8 15.25h8A3.25 3.25 0 1 0 12.75 12m1.5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m-4.5 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RecordSquareBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordSquareBoldDuotone;
