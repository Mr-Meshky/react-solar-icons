import React, { forwardRef, SVGProps } from 'react';

interface ScreenShareBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ScreenShareBold = forwardRef<SVGSVGElement, ScreenShareBoldProps>(
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
          fill={color}
          d="M6.623 4.508c-1.471.027-2.318.151-2.89.725C3 5.965 3 7.143 3 9.5v5c0 2.357 0 3.536.732 4.268.573.573 1.42.698 2.891.725-.123-.918-.123-2.064-.123-3.394V7.902c0-1.33 0-2.477.123-3.394"
        ></path>
        <path
          fill={color}
          fill-rule="evenodd"
          d="M8.879 2.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879m6.151 4.59a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.061l1.22-1.22V16a.75.75 0 0 0 1.5 0V9.81l1.22 1.22a.75.75 0 1 0 1.06-1.06z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

ScreenShareBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ScreenShareBold;