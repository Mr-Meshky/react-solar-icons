import React, { forwardRef, SVGProps } from 'react';

interface RecordSquareBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordSquareBold = forwardRef<SVGSVGElement, RecordSquareBoldProps>(
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
        <path d="M14.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"></path>
        <path
          fill-rule="evenodd"
          d="M3.464 3.465C2 4.929 2 7.286 2 12s0 7.071 1.464 8.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.464C22 19.07 22 16.714 22 12s0-7.07-1.465-8.535C19.072 2 16.714 2 12 2S4.929 2 3.464 3.465m9.797 10.285a3.25 3.25 0 1 1 2.74 1.5H7.999a3.25 3.25 0 1 1 2.74-1.5z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

RecordSquareBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordSquareBold;
