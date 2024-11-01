import React, { forwardRef, SVGProps } from 'react';

interface Login2OutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Login2Outline = forwardRef<SVGSVGElement, Login2OutlineProps>(
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
          d="M12 3.25a.75.75 0 0 0 0 1.5 7.25 7.25 0 1 1 0 14.5.75.75 0 0 0 0 1.5 8.75 8.75 0 1 0 0-17.5"
        ></path>
        <path
          fill={color}
          d="M10.47 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4a.75.75 0 0 1 0-1.5h8.19z"
        ></path>
      </svg>
    );
  },
);

Login2Outline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Login2Outline;
