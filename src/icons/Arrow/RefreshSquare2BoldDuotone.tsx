import React, { forwardRef, SVGProps } from 'react';

interface RefreshSquare2BoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RefreshSquare2BoldDuotone = forwardRef<
  SVGSVGElement,
  RefreshSquare2BoldDuotoneProps
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
        d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M12.01 5.25a6.59 6.59 0 0 0-6.55 5.833H5a.75.75 0 0 0-.53 1.281l1.168 1.167a.75.75 0 0 0 1.06 0l1.169-1.167a.75.75 0 0 0-.53-1.28h-.364A5.09 5.09 0 0 1 12.01 6.75a5.08 5.08 0 0 1 3.838 1.743.75.75 0 1 0 1.13-.986A6.58 6.58 0 0 0 12.01 5.25M18.362 10.47a.75.75 0 0 0-1.06 0l-1.168 1.166a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334 5.08 5.08 0 0 1-3.839-1.743.75.75 0 0 0-1.13.987 6.58 6.58 0 0 0 4.969 2.256 6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z"
      ></path>
    </svg>
  );
});

RefreshSquare2BoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RefreshSquare2BoldDuotone;
