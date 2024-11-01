import React, { forwardRef, SVGProps } from 'react';

interface Reply2OutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Reply2Outline = forwardRef<SVGSVGElement, Reply2OutlineProps>(
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
          d="M19.5 6.25a.75.75 0 0 1 .75.75c0 2.244-.952 3.72-2.187 4.609-1.196.861-2.61 1.141-3.563 1.141H6.31l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06l-3.72 3.72h8.19c.713 0 1.8-.22 2.687-.859.848-.61 1.563-1.635 1.563-3.391a.75.75 0 0 1 .75-.75"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

Reply2Outline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Reply2Outline;
