import React, { forwardRef, SVGProps } from 'react';

interface RefreshSquare2OutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RefreshSquare2Outline = forwardRef<
  SVGSVGElement,
  RefreshSquare2OutlineProps
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
        d="M6.713 10.674c.454-2.52 2.672-4.424 5.33-4.424 1.578 0 3 .67 3.99 1.74a.75.75 0 1 1-1.101 1.02 3.92 3.92 0 0 0-2.888-1.26 3.91 3.91 0 0 0-3.8 2.935l.237-.226a.75.75 0 0 1 1.038 1.082l-1.622 1.556a.75.75 0 0 1-1.08-.044l-1.378-1.556a.75.75 0 1 1 1.122-.994zM16.649 10.696a.75.75 0 0 1 .53.251l1.382 1.555a.75.75 0 1 1-1.122.996l-.155-.175c-.454 2.523-2.683 4.428-5.35 4.428a5.45 5.45 0 0 1-3.98-1.719.75.75 0 1 1 1.093-1.026 3.95 3.95 0 0 0 2.888 1.245 3.925 3.925 0 0 0 3.815-2.932l-.23.222a.75.75 0 1 1-1.04-1.082l1.62-1.555a.75.75 0 0 1 .548-.208"
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

RefreshSquare2Outline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RefreshSquare2Outline;
