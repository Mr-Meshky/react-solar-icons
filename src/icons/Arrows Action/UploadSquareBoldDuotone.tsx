import React, { forwardRef, SVGProps } from 'react';

interface UploadSquareBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UploadSquareBoldDuotone = forwardRef<
  SVGSVGElement,
  UploadSquareBoldDuotoneProps
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
        d="M8 7.75a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 0 1.5zM12.75 17a.75.75 0 0 1-1.5 0v-5.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72z"
      ></path>
    </svg>
  );
});

UploadSquareBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UploadSquareBoldDuotone;
