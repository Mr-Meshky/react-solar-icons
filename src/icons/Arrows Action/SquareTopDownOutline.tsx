import React, { forwardRef, SVGProps } from 'react';

interface SquareTopDownOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareTopDownOutline = forwardRef<
  SVGSVGElement,
  SquareTopDownOutlineProps
>(({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
        d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62.57-.569 1.34-.896 2.619-1.068 1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5"
      ></path>
      <path
        fill={color}
        d="M12.47 10.47a.75.75 0 1 0 1.06 1.06l7.72-7.72v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0 0 1.5h3.533z"
      ></path>
    </svg>
  );
});

SquareTopDownOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareTopDownOutline;