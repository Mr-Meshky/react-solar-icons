import React, { forwardRef, SVGProps } from 'react';

interface MaximizeBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MaximizeBold = forwardRef<SVGSVGElement, MaximizeBoldProps>(
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
          d="M16.143 1.25a.75.75 0 1 0 0 1.5h4.046l-5.72 5.72a.75.75 0 0 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75zM7.857 22.75a.75.75 0 0 0 0-1.5H3.811l5.72-5.72a.75.75 0 1 0-1.061-1.06l-5.72 5.72v-4.047a.75.75 0 1 0-1.5 0V22c0 .414.336.75.75.75z"
        ></path>
      </svg>
    );
  },
);

MaximizeBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MaximizeBold;
