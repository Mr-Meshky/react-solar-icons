import React, { forwardRef, SVGProps } from 'react';

interface RecordSquareOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordSquareOutline = forwardRef<SVGSVGElement, RecordSquareOutlineProps>(
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
          fill-rule="evenodd"
          d="M11.25 12c0 .644-.187 1.245-.51 1.75h2.52a3.25 3.25 0 1 1 2.74 1.5H8A3.25 3.25 0 1 1 11.25 12m-5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m11.5 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
          clip-rule="evenodd"
        ></path>
        <path
          fill-rule="evenodd"
          d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.528v-.115c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.087-.176 5.387c-.172 1.278-.5 2.049-1.069 2.618-.57.57-1.34.897-2.619 1.069-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.499-2.62-1.069-.569-.57-.896-1.34-1.068-2.618-.174-1.3-.176-3.009-.176-5.387s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

RecordSquareOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordSquareOutline;
