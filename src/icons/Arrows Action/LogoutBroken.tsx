import React, { forwardRef, SVGProps } from 'react';

interface LogoutBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const LogoutBroken = forwardRef<SVGSVGElement, LogoutBrokenProps>(
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
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M15 12H6m0 0 2 2m-2-2 2-2"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-width="1.5"
          d="M12 21.983c-1.553-.047-2.48-.22-3.121-.862-.769-.768-.865-1.946-.877-4.121M16 21.998c2.175-.012 3.353-.108 4.121-.877C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879-.769.768-.865 1.946-.877 4.121M3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5M3.732 5.232C4.464 4.5 5.643 4.5 8 4.5"
        ></path>
      </svg>
    );
  },
);

LogoutBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default LogoutBroken;
