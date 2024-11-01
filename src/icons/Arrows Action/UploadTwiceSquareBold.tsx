import React, { forwardRef, SVGProps } from 'react';

interface UploadTwiceSquareBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UploadTwiceSquareBold = forwardRef<
  SVGSVGElement,
  UploadTwiceSquareBoldProps
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
        fill-rule="evenodd"
        d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M9.25 17a.75.75 0 0 1-1.5 0v-4.928L6.576 13.48a.75.75 0 0 1-1.152-.96l2.5-3a.75.75 0 0 1 1.152 0l2.5 3a.75.75 0 0 1-1.152.96L9.25 12.072zm6.25.75a.75.75 0 0 0 .75-.75v-4.928l1.174 1.408a.75.75 0 0 0 1.152-.96l-2.5-3a.75.75 0 0 0-1.152 0l-2.5 3a.75.75 0 0 0 1.152.96l1.174-1.408V17c0 .414.336.75.75.75M6 7.75a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

UploadTwiceSquareBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UploadTwiceSquareBold;