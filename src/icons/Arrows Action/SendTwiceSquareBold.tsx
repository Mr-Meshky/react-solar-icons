import React, { forwardRef, SVGProps } from 'react';

interface SendTwiceSquareBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SendTwiceSquareBold = forwardRef<SVGSVGElement, SendTwiceSquareBoldProps>(
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
          fill-rule="evenodd"
          d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M17 14.75a.75.75 0 0 1 0 1.5h-4.928l1.408 1.174a.75.75 0 0 1-.96 1.152l-3-2.5a.75.75 0 0 1 0-1.152l3-2.5a.75.75 0 0 1 .96 1.152l-1.408 1.174zm.75-6.25a.75.75 0 0 0-.75-.75h-4.928l1.408-1.174a.75.75 0 0 0-.96-1.152l-3 2.5a.75.75 0 0 0 0 1.152l3 2.5a.75.75 0 0 0 .96-1.152L12.072 9.25H17a.75.75 0 0 0 .75-.75M7.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

SendTwiceSquareBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SendTwiceSquareBold;
