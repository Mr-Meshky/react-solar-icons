import React, { forwardRef, SVGProps } from 'react';

interface RefreshSquareOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RefreshSquareOutline = forwardRef<
  SVGSVGElement,
  RefreshSquareOutlineProps
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
        d="M16.728 6a.75.75 0 0 0-1.5 0v1.023a5.665 5.665 0 0 0-7.3.715c-2.237 2.29-2.237 5.997 0 8.287a5.67 5.67 0 0 0 8.144 0 5.93 5.93 0 0 0 1.634-4.874.75.75 0 0 0-1.49.182c.16 1.3-.25 2.653-1.217 3.644a4.17 4.17 0 0 1-5.998 0c-1.668-1.708-1.668-4.483 0-6.19a4.17 4.17 0 0 1 4.883-.822h-.558a.75.75 0 0 0 0 1.5h2.651a.75.75 0 0 0 .75-.75z"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RefreshSquareOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RefreshSquareOutline;
