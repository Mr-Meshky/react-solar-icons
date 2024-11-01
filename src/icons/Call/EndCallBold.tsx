import React, { forwardRef, SVGProps } from 'react';

interface EndCallBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const EndCallBold = forwardRef<SVGSVGElement, EndCallBoldProps>(
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
        <path d="M8 13.478v-.616s0-1.466 4-1.466 4 1.466 4 1.466v.388c0 .957.723 1.77 1.7 1.913l2 .293c1.21.177 2.3-.73 2.3-1.913v-2.125c0-.587-.184-1.164-.63-1.562C20.23 8.837 17.42 7 12 7 6.251 7 3.44 9.583 2.44 10.79c-.315.382-.44.864-.44 1.353v1.923c0 1.298 1.296 2.227 2.58 1.85l2-.585c.843-.248 1.42-1 1.42-1.852"></path>
      </svg>
    );
  },
);

EndCallBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default EndCallBold;
