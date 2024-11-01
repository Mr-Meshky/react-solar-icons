import React, { forwardRef, SVGProps } from 'react';

interface DownloadTwiceSquareBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DownloadTwiceSquareBoldDuotone = forwardRef<
  SVGSVGElement,
  DownloadTwiceSquareBoldDuotoneProps
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
        d="M8.5 6.25a.75.75 0 0 1 .75.75v4.929l1.174-1.41a.75.75 0 0 1 1.152.961l-2.5 3a.75.75 0 0 1-1.152 0l-2.5-3a.75.75 0 1 1 1.152-.96l1.174 1.409V7a.75.75 0 0 1 .75-.75M15.5 6.25a.75.75 0 0 1 .75.75v4.929l1.174-1.41a.75.75 0 0 1 1.152.961l-2.5 3a.75.75 0 0 1-1.152 0l-2.5-3a.75.75 0 1 1 1.152-.96l1.174 1.409V7a.75.75 0 0 1 .75-.75M6 16.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"
      ></path>
    </svg>
  );
});

DownloadTwiceSquareBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DownloadTwiceSquareBoldDuotone;
