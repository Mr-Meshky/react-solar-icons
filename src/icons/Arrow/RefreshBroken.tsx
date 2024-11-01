import React, { forwardRef, SVGProps } from 'react';

interface RefreshBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RefreshBroken = forwardRef<SVGSVGElement, RefreshBrokenProps>(
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
          d="M3.68 11.333h-.75zm0 1.667-.528.532a.75.75 0 0 0 1.056 0zm2.208-1.134A.75.75 0 1 0 4.83 10.8zM2.528 10.8a.75.75 0 0 0-1.056 1.065zm16.088-3.408a.75.75 0 1 0 1.277-.786zm-1.723-3.785a.75.75 0 1 0-.786 1.277zm-4.43.151a.75.75 0 0 0 .074-1.498zM12.08 2.25c-5.047 0-9.15 4.061-9.15 9.083h1.5c0-4.182 3.42-7.583 7.65-7.583zm-9.15 9.083V13h1.5v-1.667zm1.28 2.2 1.679-1.667L4.83 10.8l-1.68 1.667zm0-1.065L2.528 10.8l-1.057 1.065 1.68 1.666zm15.684-5.86a9.16 9.16 0 0 0-3-3l-.786 1.277a7.66 7.66 0 0 1 2.509 2.508zM12.537 2.26a9 9 0 0 0-.458-.011v1.5q.193 0 .384.01zM11.883 21v.75zm8.43-8.333h.75zm0-1.667.528-.533a.75.75 0 0 0-1.055 0zM18.1 12.133a.75.75 0 1 0 1.055 1.067zm3.373 1.067a.75.75 0 1 0 1.054-1.067zM5.318 16.606a.75.75 0 1 0-1.277.788zm6.215 3.636a.75.75 0 0 0-.066 1.499zm-4.42.188a.75.75 0 0 0 .774-1.285zm4.77 1.32c5.062 0 9.18-4.058 9.18-9.083h-1.5c0 4.18-3.43 7.583-7.68 7.583zm9.18-9.083V11h-1.5v1.667zm-1.277-2.2L18.1 12.133l1.055 1.067 1.686-1.667zm0 1.066 1.687 1.667 1.054-1.067-1.686-1.666zm-8.32 10.208q.208.009.417.009v-1.5q-.176 0-.35-.008zm-7.425-4.347a9.2 9.2 0 0 0 3.072 3.036l.774-1.285a7.7 7.7 0 0 1-2.57-2.539z"
        ></path>
      </svg>
    );
  },
);

RefreshBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RefreshBroken;
