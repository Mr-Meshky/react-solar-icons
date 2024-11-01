import React, { forwardRef, SVGProps } from 'react';

interface EndCallOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const EndCallOutline = forwardRef<SVGSVGElement, EndCallOutlineProps>(
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
          d="M12 7.75c-5.487 0-8.098 2.451-8.982 3.518-.175.21-.268.506-.268.874v1.923c0 .763.782 1.376 1.619 1.131l2-.586c.538-.158.881-.627.881-1.132v-.616H8c-.75 0-.75-.001-.75-.002v-.035a1 1 0 0 1 .022-.17 1.5 1.5 0 0 1 .108-.333c.117-.257.326-.54.677-.798.686-.502 1.874-.878 3.943-.878s3.257.375 3.943.878c.351.257.56.54.677.798a1.5 1.5 0 0 1 .126.455l.003.048v.02l.001.008v.007s0 .002-.75.002h.75v.388c0 .566.431 1.079 1.06 1.17l2 .294c.785.115 1.44-.473 1.44-1.17v-2.126c0-.44-.137-.786-.38-1.002C19.866 9.517 17.234 7.75 12 7.75m3.25 5.184v.316c0 1.347 1.014 2.46 2.342 2.655l2 .293c1.634.24 3.158-.985 3.158-2.655v-2.125c0-.733-.23-1.541-.88-2.121C20.594 8.157 17.609 6.25 12 6.25c-6.01 0-9.021 2.714-10.137 4.06-.457.553-.613 1.221-.613 1.832v1.923c0 1.832 1.81 3.078 3.54 2.57l2-.586c1.15-.336 1.96-1.371 1.96-2.57v-.545a.6.6 0 0 1 .193-.2c.314-.23 1.126-.588 3.057-.588 1.93 0 2.743.358 3.057.588.13.095.178.17.193.2"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

EndCallOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default EndCallOutline;
