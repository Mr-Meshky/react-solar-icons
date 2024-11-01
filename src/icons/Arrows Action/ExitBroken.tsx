import React, { forwardRef, SVGProps } from 'react';

interface ExitBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ExitBroken = forwardRef<SVGSVGElement, ExitBrokenProps>(
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
          d="M9 4.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v.5m6 9.5H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5V14M13.658 2.347c-2.162-.377-3.243-.565-3.95.062S9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067s1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689-.476-.587-1.168-.875-2.29-1.126M12 11v2"
        ></path>
      </svg>
    );
  },
);

ExitBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ExitBroken;
