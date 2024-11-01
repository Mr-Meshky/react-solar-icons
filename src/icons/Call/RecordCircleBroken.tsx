import React, { forwardRef, SVGProps } from 'react';

interface RecordCircleBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordCircleBroken = forwardRef<SVGSVGElement, RecordCircleBrokenProps>(
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
        <path d="M18.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M10.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M8 14.5h8"></path>
        <path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.529 1.338-5"></path>
      </svg>
    );
  },
);

RecordCircleBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordCircleBroken;
