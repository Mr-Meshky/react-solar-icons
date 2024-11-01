import React, { forwardRef, SVGProps } from 'react';

interface ScreenShareBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ScreenShareBroken = forwardRef<SVGSVGElement, ScreenShareBrokenProps>(
  ({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
          stroke-width="1.5"
          d="M21 16c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-1c-2.828 0-4.243 0-5.121-.879C8 20.243 8 18.828 8 16V8c0-2.828 0-4.243.879-5.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v4M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5V14m5-9.5c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v.5"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M14.5 16V8m0 0 2.5 2.5M14.5 8 12 10.5"
        ></path>
      </svg>
    );
  },
);

ScreenShareBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ScreenShareBroken;
