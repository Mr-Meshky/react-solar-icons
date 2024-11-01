import React, { forwardRef, SVGProps } from 'react';

interface EndCallLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const EndCallLineDuotone = forwardRef<SVGSVGElement, EndCallLineDuotoneProps>(
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
        <path d="M8 12.862v.616c0 .853-.577 1.604-1.42 1.852l-2 .586C3.296 16.292 2 15.363 2 14.065v-1.923c0-.49.125-.971.44-1.353m18.93-.933c.446.398.63.976.63 1.563v2.124c0 1.184-1.09 2.09-2.3 1.913l-2-.293c-.977-.144-1.7-.956-1.7-1.913v-.388"></path>
        <path
          d="M7.25 12.862a.75.75 0 0 0 1.5 0zM12 7v.75zm3.25 5.862a.75.75 0 0 0 1.5 0zM12 11.396v-.75zm-8.982-.128C3.902 10.2 6.513 7.75 12 7.75v-1.5c-6.01 0-9.021 2.714-10.137 4.06zM12 7.75c5.233 0 7.865 1.767 8.87 2.666l1-1.12C20.594 8.159 17.609 6.25 12 6.25zm4 5.112c.75 0 .75-.001.75-.002v-.016a1 1 0 0 0-.004-.066 1.5 1.5 0 0 0-.126-.455 2.06 2.06 0 0 0-.677-.799c-.686-.502-1.873-.877-3.943-.877v1.5c1.93 0 2.743.357 3.057.587.149.11.19.192.198.21q.007.016.001-.002a.3.3 0 0 1-.006-.065v-.013c0-.001 0-.002.75-.002m-4-2.216c-2.07 0-3.257.376-3.943.878-.351.257-.56.54-.677.798a1.5 1.5 0 0 0-.126.456l-.004.076v.006c0 .001 0 .002.75.002s.75.001.75.002v.006l-.006.073q-.005.018.001 0c.008-.017.05-.1.198-.209.314-.23 1.127-.588 3.057-.588z"
          opacity=".5"
        ></path>
      </svg>
    );
  },
);

EndCallLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default EndCallLineDuotone;
